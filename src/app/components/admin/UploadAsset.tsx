"use client";

import { useEdgeStore } from "@/lib/edgeStore";
import React, { useState } from "react";

const UploadFile: React.FC = () => {
  const { edgestore } = useEdgeStore();
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (file) {
      try {
        const result = await edgestore.myPublicImage.upload({
          file,
          onProgressChange: (progress) => {
            setProgress(progress);
          },
        });
        setUploadedFileUrl(result.url);
        console.log("File uploaded:", result.url);
        setTimeout(() => {
                setProgress(0);
        setFile(null);
        setUploadedFileUrl("")   
        }, 5000);
 
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-50 shadow-lg rounded-lg max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Upload File to Edge Store</h1>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Upload
      </button>
      {progress > 0 && (
        <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
      {uploadedFileUrl && (
        <div className="mt-4">
          <p className="text-green-600">File uploaded successfully!</p>
          <a href={uploadedFileUrl} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            View Uploaded File
          </a>
        </div>
      )}
    </div>
  );
};

export default UploadFile;
