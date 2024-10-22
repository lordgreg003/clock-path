"use client";
import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { open_sans, playfair_Display } from "@/app/ui/fonts/fonts";
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";

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
          {/* File upload section */}
          <div className="border-dashed border-2 border-gray-300 p-6 rounded-lg text-center mb-4 hover:border-indigo-500 transition duration-200">
            <FiUpload className="mx-auto text-gray-400 mb-4 text-4xl" />{" "}
            {/* Upload Icon */}
            <p
              className={`${open_sans.className} text-[#333333] font-normal mb-2`}
            >
              Drag and drop to upload Employee List
            </p>
            <p className={`${open_sans} text-sm text-[#98A2B3]`}>
              EXCEL or CSV (
              <a href="#" className="font-semibold text-[14px] text-[#6200EE]">
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
              className=" border border-[#6200EE] text-[#6200EE] py-2 px-4 rounded-lg cursor-pointer "
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
            className="w-full bg-[#EFE6FD] text-[#CEB0FA] py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadEmployees;
