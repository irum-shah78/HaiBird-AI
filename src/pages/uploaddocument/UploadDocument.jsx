import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Upload,
  X,
  Download,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import add from "../../assets/add-icon.svg";
import uploaded from "../../assets/uploaded-icon.svg";

const FileIcon = ({ fileType }) => {
  const getFileTypeInfo = (type) => {
    if (type.includes("pdf")) {
      return { icon: "📄", bgColor: "bg-red-500", label: "PDF" };
    } else if (type.includes("powerpoint") || type.includes("presentation")) {
      return { icon: "📊", bgColor: "bg-orange-500", label: "PPT" };
    } else if (type.includes("word") || type.includes("document")) {
      return { icon: "📝", bgColor: "bg-blue-500", label: "DOC" };
    } else if (type.includes("text")) {
      return { icon: "📑", bgColor: "bg-gray-500", label: "TXT" };
    }
    return { icon: "📄", bgColor: "bg-gray-500", label: "FILE" };
  };

  const { icon, bgColor, label } = getFileTypeInfo(fileType);

  return (
    <div className="bg-white shadow-xl p-6 flex items-center justify-center rounded-lg">
      <div
        className={`${bgColor} text-white px-2 py-1 rounded text-sm mr-3 flex flex-col items-center justify-center gap-1`}
      >
        <span>{icon}</span>
        <span>{label}</span>
      </div>
    </div>
  );
};

const FileIconn = ({ fileType }) => {
  const getFileTypeInfo = (type) => {
    if (type.includes("pdf")) {
      return { icon: "📄", bgColor: "bg-red-500", label: "PDF" };
    } else if (type.includes("powerpoint") || type.includes("presentation")) {
      return { icon: "📊", bgColor: "bg-orange-500", label: "PPT" };
    } else if (type.includes("word") || type.includes("document")) {
      return { icon: "📝", bgColor: "bg-blue-500", label: "DOC" };
    } else if (type.includes("text")) {
      return { icon: "📑", bgColor: "bg-gray-500", label: "TXT" };
    }
    return { icon: "📄", bgColor: "bg-gray-500", label: "FILE" };
  };

  const { icon, bgColor, label } = getFileTypeInfo(fileType);

  return (
    <div
      className={`${bgColor} text-white px-2 py-1 rounded text-sm mr-3 flex flex-col items-center justify-center gap-1`}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

const UploadDocument = () => {
  const [files, setFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(files.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFiles = files.slice(startIndex, endIndex);
  const navigate = useNavigate();

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer?.files || []);
    handleFiles(droppedFiles);
  }, []);

  const removeFile = (index) => {
    const newFiles = [...files];
    URL.revokeObjectURL(newFiles[index].blob);
    newFiles.splice(index, 1);
    setFiles(newFiles);
    if (files.length === 1) {
      setUploadStatus(null);
    }
  };

  const handleFiles = async (newFiles) => {
    const fileInfo = newFiles.map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2),
      type: file.type,
      fileData: file,
    }));

    setFiles((prevFiles) => [...prevFiles, ...fileInfo]);

    setIsUploading(true);
    setUploadStatus({
      fileName: fileInfo[0]?.name,
      progress: 0,
    });

    for (let i = 0; i <= 100; i += 10) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      setUploadStatus((prev) => ({
        ...prev,
        progress: i,
      }));
    }

    setIsUploading(false);
  };
  const handleDownload = (file) => {
    if (!file.fileData) return;
    const blobUrl = URL.createObjectURL(file.fileData);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  };

  const deletFile = (fileId) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== fileId));
    if (files.length === 1) {
      setUploadStatus(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const generateSerialNumber = () => Math.floor(Math.random() * 1000);
  const getCurrentDate = () => {
    const today = new Date();
    return today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatFileSize = (sizeInBytes) => {
    const sizeInKB = (sizeInBytes * 1024).toFixed(2);
    return `${sizeInKB}`;
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-8">
        <div className="text-center mb-8 mt-14">
          <h1 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <span className="text-[#CC9F3A] lg:text-[60px] md:text-[50px] text-[45px] font-normal font-arapix">
              UPLOAD
            </span>{" "}
            <span className="text-black lg:text-[60px] md:text-[50px] text-[45px] font-normal font-arapix">
              DOCUMENTS
            </span>
          </h1>
          <p className="text-[#5E5E5E] text-[16px] flex items-center justify-center mx-auto max-w-4xl">
            Easily upload your policy documents in PDF, Word, or text formats.
            These files are automatically processed, structured, and securely
            stored for efficient access and analysis.
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          {files.length === 0 ? (
            <div className="flex-1 ">
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-16 cursor-pointer bg-[#FCFAF6]"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() =>
                  document.querySelector('input[type="file"]').click()
                }
              >
                <div className="flex flex-col items-center justify-center gap-6">
                  <button className="bg-black text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 lg:w-[400px] md:w-[200px] w-[150px] md:text-[16px] text-[12px]">
                    <Upload size={20} />
                    Upload Your Document
                  </button>
                  <div className="text-gray-500 text-center">
                    <p>or drop a file here</p>
                    <p className="text-sm mt-1">
                      You can Upload a pdf, word or plain text
                    </p>
                  </div>
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => handleFiles(Array.from(e.target.files))}
                  multiple
                />
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-x-auto w-full md:w-[60%] lg:w-[70%]">
                <div className="bg-white rounded-lg shadow-md p-6 h-72">
                  <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="relative mb-4 last:mb-0 bg-[#FCFAF6] p-4 rounded-lg w-[254px] h-[210px] flex flex-col items-center justify-center shrink-0"
                      >
                        <button
                          onClick={() => removeFile(index)}
                          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                          <X size={20} />
                        </button>
                        <FileIcon fileType={file.type} />
                        <div className="mt-4 text-center">
                          <p className="text-[14px] truncate w-48">
                            {file.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {file.size} MB
                          </p>
                        </div>
                      </div>
                    ))}

                    <div
                      className="w-[255px] h-[210px] bg-[#FCFAF6] border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center cursor-pointer shrink-0"
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      onClick={() =>
                        document.querySelector('input[type="file"]').click()
                      }
                    >
                      <div className="text-4xl text-[#898989]">
                        <img src={add} alt="add-icon" />
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) =>
                          handleFiles(Array.from(e.target.files))
                        }
                        multiple
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[35%] lg:w-96">
                {uploadStatus && (
                  <div className="bg-white rounded-lg p-6 shadow-md mb-4 md:h-72 h-80 flex flex-col">
                    <div className="flex-1 border border-[#D7D7D7] p-3 rounded-xl mb-12 relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {uploadStatus.progress === 100 ? (
                            <div className="rounded-full bg-white shadow-md flex items-center justify-center">
                              <div className="text-[#37B1DE] w-8 h-8 flex items-center justify-center">
                                <img src={uploaded} alt="uploaded" />
                              </div>
                            </div>
                          ) : (
                            <div className="w-8 h-6 rounded-full border-2 border-[#37B1DE] border-t-transparent animate-spin" />
                          )}
                          <div>
                            <p className="text-[14px]">
                              Uploaded "
                              <span
                                className="text-[#CC9F3A] break-words truncate block lg:max-w-[200px] w-[100px]"
                                title={uploadStatus.fileName}
                              >
                                {uploadStatus.fileName}
                              </span>
                              "
                            </p>
                            <p className="text-[13px] text-[#797979]">
                              {uploadStatus.progress === 100
                                ? "Successfully Uploaded!"
                                : "Uploading..."}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => setUploadStatus(null)}
                          className="text-[#797979] hover:text-gray-600"
                        >
                          <X size={20} />
                        </button>
                      </div>
                      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-[#37B1DE] h-full rounded-full transition-all duration-300"
                          style={{ width: `${uploadStatus.progress}%` }}
                        />
                      </div>
                      <p className="text-left text-[13px] text-[#797979] mt-2">
                        {uploadStatus.progress}% uploaded!
                      </p>
                    </div>

                    <button
                      className="w-full bg-black text-white lg:text-[16px] text-[12px] lg:px-8 md:px-4 px-3 lg:py-3 py-2 rounded-full mt-auto"
                      onClick={() => navigate("/ask-questions")}
                    >
                      Ask a Question
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {files.length > 0 && (
          <div className="bg-white p-6 mt-20">
            <h2 className="lg:text-[36px] md:text-[30px] text-[20px] font-bold mb-2">
              Recent Uploaded Files
            </h2>
            <p className="text-[#5E5E5E] text-[16px] mb-6">
              View and manage all your uploaded policy documents. Each file is
              listed with its name, upload date, and status.
            </p>

            <div className="overflow-x-auto lg:text-[16px] md:text-[14px] text-[12px]">
              <table className="w-full">
                <thead className="bg-[#FAF4E7] rounded-xl">
                  <tr>
                    <th className="py-3 px-4 text-left">Serial No.</th>
                    <th className="py-3 px-4 text-left">File Name</th>
                    <th className="py-3 px-4 text-left">File Type</th>
                    <th className="py-3 px-4 text-left">File Size</th>
                    <th className="py-3 px-4 text-left">Upload On</th>
                    <th className="py-3 px-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentFiles.map((file) => (
                    <tr key={file.id} className="border-b">
                      <td className="py-3 px-4">{generateSerialNumber()}</td>
                      <td className="py-3 px-4">{file.name}</td>
                      <td className="py-3 px-4">
                        <FileIconn fileType={file.type} />
                      </td>
                      <td className="py-3 px-4">
                        {formatFileSize(file.size)} KB
                      </td>
                      <td className="py-3 px-4">
                        {getCurrentDate(file.uploadDate)}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex justify-center gap-2">
                          <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={() => handleDownload(file)}
                          >
                            <Download size={18} />
                          </button>
                          <button
                            onClick={() => deletFile(file.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-end mt-4">
              <div className="flex items-center gap-4">
                <select
                  className="border-2 border-[#929292] text-[#929292] rounded-md px-2 py-1 focus:border-[#929292]"
                  value={itemsPerPage}
                  onChange={(e) => setCurrentPage(1)}
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
                <div className="text-sm text-gray-500">
                  {startIndex + 1}-{Math.min(endIndex, files.length)} of{" "}
                  {files.length}
                </div>
                <button
                  className="p-1 rounded hover:bg-gray-100"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  className="p-1 rounded hover:bg-gray-100"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default UploadDocument;
