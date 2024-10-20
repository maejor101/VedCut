import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import Ffmpeg from "fluent-ffmpeg";

export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const uploadDir = path.join(process.cwd(), "uploads");
  await fs.mkdir(uploadDir, { recursive: true });

  // Store the file
  const filePath = path.join(uploadDir, file.name);
  const arrayBuffer = await file.arrayBuffer();
  await fs.writeFile(filePath, Buffer.from(arrayBuffer));

  const fileContents = await fs.readFile(filePath);

  //video -> 00:02:00

  //start -> 00:01:00
  //end -> 00:01:45

  //duration = end - start 00:01:45 - 00:01:00 -> 00:00:45

  Ffmpeg(filePath)
    .setStartTime("00:01:00")
    .setDuration("00:00:30")
    .output("new.mp4")
    .on("end", async () => {
      console.log("Done processing...");
      const donwloadFile = await fs.readFile("new.mp4");
      return new Response(donwloadFile, {
        headers: {
          "Content-Type": donwloadFile.type || "application/octet-stream",
          "Content-Disposition": `attachment; filename="${donwloadFile.name}"`,
        },
      });
    })
    .on("error", (err) => {
      return NextResponse.json({
        message: "Failed to download video...",
      });
    })
    .run();

  return NextResponse.json({
    message: "Failed to download video...",
  });
}
