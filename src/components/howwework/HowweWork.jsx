import React from "react";
import upload from "../../assets/upload.svg";
import search from "../../assets/search.svg";
import askQuestion from "../../assets/ask-question.svg";

const HowWeWork = () => {
  const steps = [
    {
      icon: <img src={upload} alt="upload" />,
      title: "Step 1: Upload Your Policies",
      description: "Drag & drop your policy files, and let AI handle the rest!",
    },
    {
      icon: <img src={askQuestion} alt="askQuestion" />,
      title: "Step 2: Ask Questions",
      description: "Ask questions and get answers with document links.",
    },
    {
      icon: <img src={search} alt="search" />,
      title: "Step 3: Analyze and Act",
      description:
        "Get summaries, analytics, and benchmarks for easy decisions.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="lg:text-4xl text-3xl font-bold mb-4">
          How We{" "}
          <span className="text-[#CC9F3A] lg:text-[60px] md:text-[45px] text-[45px] font-normal font-arapix">
            WORK
          </span>{" "}
          to Simplify Policy Management
        </h2>
        <p className="text-[#5E5E5E] text-[16px]">
          Experience a smarter way to manage policies — quick, secure, and
          effortless.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center relative">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center w-[200px] mb-12 md:mb-0">
              <div className="w-24 h-24 bg-white rounded-full shadow-[0_0_15px_rgba(0,0,0,0.1)] flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 px-2">{step.title}</h3>
              <p className="text-[#797979] text-[14px]">{step.description}</p>
            </div>

            {index < steps.length - 1 && (
              <div className="hidden md:flex items-center w-32 relative">
                <div className="absolute top-[-70px] w-full border-t-2 border-dashed border-amber-500"></div>
                <div className="text-amber-500 text-xl absolute top-[-83px] right-[-10px]">
                  {">"}
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
