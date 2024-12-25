import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/NavBar";
import React, { useState, useCallback } from "react";
import { Upload } from "lucide-react";
import CTASection from "../../components/ctasection/CtaSection";
import KeyFeatures from "../../components/keyfeatures/KeyFeatures";
import HowWeWork from "../../components/howwework/HowweWork";
import FAQSection from "../../components/faqs/FaqSection";

const HomePage = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);
  return (
    <>
      <Navbar />
      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center rounded-3xl p-2 shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-shadow duration-300">
            <span className="bg-[#CC9F3A] text-white text-sm px-3 py-1 rounded-full mr-2">
              New
            </span>
            <span>From Questions to Compliance, Instantly.</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-8">
          <span>Effortless </span>
          <span className="text-[#CC9F3A]">Policy </span>
          <span>Management,</span>
          <br />
          <span className="mt-2 block">
            Powered by AI with <span className="text-[#CC9F3A]">H</span>
            <span className="text-[#CC9F3A] lg:text-[100px] md:text-[80px] text-[60px] font-normal font-arapix">
              AI
            </span>
            <span className="text-black lg:text-[100px] md:text-[80px] text-[60px] font-normal font-arapix">
              BIRD
            </span>
          </span>
        </h1>
        <p className="text-gray-600 max-w-5xl mx-auto mb-12 text-lg">
          Transform the way you handle policies. Upload, query, and gain
          insights instantly with our secure, intelligent platform designed for
          healthcare professionals.
        </p>
        <div
          className={`border-2 border-dashed rounded-lg py-8 max-w-[620px] mx-auto text-center ${
            isDragging ? "border-[#CC9F3A] bg-orange-50" : "border-gray-300"
          }`}
          style={{
            borderStyle: "dashed",
            borderWidth: "2px",
            borderSpacing: "40px",
          }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <button className="bg-black text-white lg:w-[436px] w-[200px] py-4 px-6 rounded-full flex items-center justify-center gap-2 mx-auto hover:bg-gray-800 transition duration-300">
            <Upload size={20} />
            Upload Your Document
          </button>

          <p className="text-gray-500 mt-6 text-sm">or drop a file here</p>
          <p className="text-gray-400 text-sm mt-2">
            You can upload a PDF, Word, or plain text file
          </p>
        </div>
      </div>

      {/* FEATURES */}
      <KeyFeatures />

      {/* WORK */}
      <HowWeWork />

      {/* FAQs */}
      <FAQSection />

      <CTASection />
      <Footer />
    </>
  );
};

export default HomePage;
