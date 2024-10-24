import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import Ffmpeg from "fluent-ffmpeg";
import { timeDifference } from "@/utils/helpers";

export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");
  const start = data.get("start");
  const end = data.get("end");
  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const uploadDir = path.join(process.cwd(), "uploads");
  await fs.mkdir(uploadDir, { recursive: true });
  // const newFilename =
  console.log(file);
  const filePath = path.join(uploadDir, file.name);
  const arrayBuffer = await file.arrayBuffer();
  await fs.writeFile(filePath, Buffer.from(arrayBuffer));

  const duration = timeDifference(start, end);

  try {
    //Using a promise to process the video
    await new Promise((resolve, reject) => {
      Ffmpeg(filePath)
        .setStartTime(start)
        .setDuration(duration)
        .output("new.mp4")
        .on("end", async () => {
          console.log("Done processing...");
          resolve();
        })
        .on("error", (err) => {
          reject(new Error(err));
        })
        .run();
    });
    //At this point, the video would have successfully been process, ready for download
    const donwloadFile = await fs.readFile("new.mp4");
    return new Response(donwloadFile, {
      headers: {
        "Content-Type": donwloadFile.type || "application/octet-stream",
        "Content-Disposition": `attachment; filename="${donwloadFile.name}"`,
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Video failed to process",
    });
  }
}
