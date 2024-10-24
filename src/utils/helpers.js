import { promises as fs } from "fs";
import path from "path";

export const timeToSeconds = (time) => {
  const [hours, minutes, seconds] = time.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
};

export const timeDifference = (startTime, endTime) => {
  let diffInSeconds = timeToSeconds(endTime) - timeToSeconds(startTime);

  if (diffInSeconds < 0) {
    diffInSeconds += 24 * 3600;
  }

  const hours = Math.floor(diffInSeconds / 3600);
  const minutes = Math.floor((diffInSeconds % 3600) / 60);
  const seconds = diffInSeconds % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
};

export const createFolder = async (folderName) => {
  const uploadDir = path.join(process.cwd(), folderName);
  return await fs.mkdir(uploadDir, { recursive: true });
};
