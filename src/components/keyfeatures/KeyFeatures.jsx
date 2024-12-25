import React from 'react';
import upload from "../../assets/upload.svg";
import insights from "../../assets/insights-sparkle.svg";
import cloud from "../../assets/cloud-storage.svg";
import benchmark from "../../assets/benchmarking.svg";

const KeyFeatures = () => {
  const features = [
    {
      icon: (
        <img src={upload} alt='upload' />
      ),
      title: "Upload & Parse Documents",
      description: "Easily upload policy manuals in various formats and extract structured data."
    },
    {
      icon: (
        <img src={insights} alt='insights' />
      ),
      title: "AI-Powered Insights",
      description: "Get detailed answers and summaries with AI-driven intelligence."
    },
    {
      icon: (
        <img src={benchmark} alt='benchmark' />
      ),
      title: "Benchmarking & Analytics",
      description: "Compare internal data against industry standards to identify trends."
    },
    {
      icon: (
        <img src={cloud} alt='cloud' />
      ),
      title: "Secure Cloud Storage",
      description: "Your data is encrypted and accessible only by authorized personnel."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="lg:text-4xl text-3xl font-bold mb-4">
          Key <span className="text-[#CC9F3A] lg:text-[60px] md:text-[45px] text-[45px] font-normal font-arapix">FEATURES</span> at a Glance
        </h2>
        <p className="text-[#5E5E5E] text-[16px]">
          Explore the tools designed to simplify policy management and compliance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center px-4">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-[#797979] text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;