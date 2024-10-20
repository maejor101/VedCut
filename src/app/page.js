// app/upload/page.jsx (or /pages/upload.js if not using the app directory)
"use client";
import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

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
    <div>
      <h1>Upload a file</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
