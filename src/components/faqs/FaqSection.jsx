import React, { useState } from "react";
import { Plus } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "1. What is Haibird AI?",
      answer:
        "Haibird AI is an advanced artificial intelligence system designed specifically for policy management. It helps organizations streamline their document processing and analysis workflows.",
    },
    {
      question: "2. How can I upload my policy documents?",
      answer:
        "You can upload your policy documents through our secure drag-and-drop interface or by clicking the upload button. The system accepts multiple files simultaneously.",
    },
    {
      question: "3. What types of documents can I upload?",
      answer:
        "We support a wide range of document formats including PDF, Word (DOC, DOCX), Excel (XLS, XLSX), PowerPoint (PPT, PPTX), and plain text files (TXT).",
    },
    {
      question: "4. How does the query system work?",
      answer:
        "Our query system uses natural language processing to understand your questions and search through your uploaded documents to find relevant answers. It provides direct responses with source references.",
    },
    {
      question: "5. What happens if I can't find the information I need?",
      answer:
        "If you can't find the specific information you're looking for, our system will suggest related topics and alternative search terms. You can also contact our support team for assistance.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="lg:text-4xl text-3xl font-bold mb-4">
          Your{" "}
          <span className="text-[#CC9F3A] lg:text-[60px] md:text-[50px] text-[45px] font-normal font-arapix">
            HAI
          </span>
          <span className="text-black lg:text-[60px] md:text-[50px] text-[45px] font-normal font-arapix">
            BIRD
          </span>{" "}
          AI Questions, Answered!
        </h2>
        <p className="text-[#5E5E5E] text-[16px] lg:w-[600px] md:w-[400px] w-[300px] mx-auto">
          Find quick answers to common questions about using Haibird AI for
          policy management, document uploads, and analytics.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]"
          >
            <button
              className="w-full px-6 py-4 flex justify-between items-center text-left"
              onClick={() => toggleQuestion(index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-medium text-[16px]">{faq.question}</span>
              <Plus
                className={`w-6 h-6 text-[#CC9F3A] shrink-0 transform transition-transform duration-200 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
                style={{ minWidth: "24px", minHeight: "24px" }}
              />
            </button>
            <div
              className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${
                openIndex === index ? "max-h-48 pb-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
