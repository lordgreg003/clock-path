"use client";
import React, { useState } from "react";
import { FiUpload } from "react-icons/fi"; // Importing an upload icon from react-icons

const UploadEmployees: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle file upload here
    if (selectedFile) {
      console.log("File Uploaded:", selectedFile.name);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Upload Employees
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your company details in a few simple steps to get started with
          ClockPath.
        </p>

        <form onSubmit={handleSubmit}>
          {/* File upload section */}
          <div className="border-dashed border-2 border-gray-300 p-6 rounded-lg text-center mb-4 hover:border-indigo-500 transition duration-200">
            <FiUpload className="mx-auto text-gray-400 mb-4 text-4xl" />{" "}
            {/* Upload Icon */}
            <p className="text-gray-600 mb-2">
              Drag and drop to upload Employee List
            </p>
            <p className="text-sm text-gray-400">
              EXCEL or CSV (
              <a href="#" className="text-indigo-500">
                View Sample
              </a>
              )
            </p>
            <div className="flex items-center justify-center">
              <div className="border-t border-gray-300 flex-grow"></div>
              <span className="mx-4  text-gray-500 py-5">or</span>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div>
            <label
              htmlFor="fileInput"
              className="bg-white border border-black text-[#6200EE] py-2 px-4 rounded-lg cursor-pointer hover:bg-indigo-50"
            >
              Browse Files
            </label>
            <input
              id="fileInput"
              type="file"
              accept=".csv, .xls, .xlsx"
              onChange={handleFileChange}
              className="hidden"
            />
            {selectedFile && (
              <p className="mt-4 text-sm text-gray-600">
                Selected File:{" "}
                <span className="font-semibold">{selectedFile.name}</span>
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadEmployees;
