import React from "react";

const CTASection = () => {
  return (
    <div className="bg-black text-white py-16 px-4 rounded-3xl xl:w-[1200px] lg:w-[900px] md:w-[600px] w-[300px] mx-auto mb-6 mt-6">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get Started with{" "}
          <span className="font-arapix lg:text-[60px] text-5xl font-normal">
            HAIBIRD
          </span>
          AI Today!
        </h2>

        <p className="text-[16px] text-gray-300 mb-10 max-w-2xl mx-auto">
          Upload your documents, ask questions, and access powerful analytics
          with ease. Start managing your policies smarter, not harder.
        </p>

        <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100">
          Get Started with Your First Document
        </button>
      </div>
    </div>
  );
};

export default CTASection;
