"use client";
import React, { useState } from "react";
import { FiUpload, FiTrash } from "react-icons/fi";
import axios from "axios";
import { open_sans, playfair_Display } from "@/app/ui/fonts/fonts";
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";

const UploadEmployees: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setUploadProgress(0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const progress = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              setUploadProgress(progress);
            }
          },
        });

        console.log("File Uploaded:", response.data);
      } catch (error) {
        console.error("Upload failed:", error);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-primary-primary50 px-4">
      <div className="w-full flex justify-end my-4">
        <Link href="/payment" className="flex items-center mr-5">
          <div className="text-[#6200EE] font-semibold hover:underline cursor-pointer">
            Skip
          </div>
          <div>
            <GrFormNextLink className="text-2xl text-[#6200EE]" />
          </div>
        </Link>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2
          className={`${playfair_Display.className} text-[#333333] text-[28px] font-bold text-center mb-4`}
        >
          Upload Employees
        </h2>
        <p
          className={`${open_sans.className} font-normal text-[#5C5C5C] text-center mb-6`}
        >
          Enter your company details in a few simple steps to get started with
          ClockPath.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="border-dashed border-2 border-gray-300 p-6 rounded-lg text-center mb-4 hover:border-indigo-500 transition duration-200">
            <FiUpload className="mx-auto text-gray-400 mb-4 text-4xl" />
            <p
              className={`${open_sans.className} text-[#333333] font-normal mb-2`}
            >
              Drag and drop to upload Employee List
            </p>
            <p className={`${open_sans.className} text-sm text-[#98A2B3]`}>
              EXCEL or CSV (
              <a href="#" className="font-semibold text-[14px] text-[#6200EE]">
                View Sample
              </a>
              )
            </p>
            <div className="flex items-center justify-center">
              <div className="border-t border-gray-300 flex-grow"></div>
              <span className="mx-4 text-gray-500 py-5">or</span>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div>
            <label
              htmlFor="fileInput"
              className="border border-[#6200EE] text-[#6200EE] py-2 px-4 rounded-lg cursor-pointer"
            >
              Browse Files
            </label>
            <input
              id="fileInput"
              type="file"
              accept=".csv, .xls, .xlsx"
              onChange={handleFileChange}
              className="hidden"
              multiple
            />
            {selectedFile && (
              <div className="mt-4 text-sm text-gray-600 flex justify-between items-center">
                <span className="font-semibold">{selectedFile.name}</span>
                <button
                  type="button"
                  className="text-red-600 hover:text-red-800"
                  onClick={handleRemoveFile} // Button to remove file
                >
                  <FiTrash className="text-xl" />
                </button>
              </div>
            )}
          </div>

          {uploadProgress > 0 && (
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <div
                className="bg-[#6200EE] h-4 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
              <p className="text-center text-sm mt-1">{uploadProgress}%</p>
            </div>
          )}

          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              selectedFile
                ? "bg-[#6200EE] text-white hover:bg-[#4e00d9]" // When file is selected
                : "bg-[#EFE6FD] text-[#CEB0FA] hover:bg-indigo-700" // Default state
            }`}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadEmployees;
