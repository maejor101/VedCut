// app/upload/page.jsx (or /pages/upload.js if not using the app directory)
"use client";
import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState(null);

  const [times, setTimes] = useState({
    start: "",
    end: "",
  });

  const handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setTimes({
      ...times,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("start", times.start);
    formData.append("end", times.end);

    const response = await fetch("/trim", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } else {
      console.log("File upload failed");
    }
  };

  return (
    <div className="container flex flex-col mx-auto justify-center items-center">
      <h1 className="my-5">Upload a file</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full p-4 border"
        />
        <div className="my-3 flex flex-row gap-x-3">
          <input
            className="text-xs px-3 text-black p-2 outline-none border-none"
            type="text"
            name="start"
            id="start"
            placeholder="HH:MM:SS"
            onChange={handleInput}
          />
          <input
            type="text"
            name="end"
            onChange={handleInput}
            id="end"
            placeholder="HH:MM:SS"
            className="text-xs px-3 text-black p-2 outline-none border-none"
          />
        </div>
        <button type="submit" className="w-full bg-yellow-600 p-3 my-2">
          Upload
        </button>
      </form>
    </div>
  );
}
