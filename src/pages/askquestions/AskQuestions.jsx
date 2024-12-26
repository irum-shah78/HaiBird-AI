import React, { useState, useEffect, useRef } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/NavBar";
import haibird from "../../assets/chat-logo.svg";
import user from "../../assets/user.svg";
import send from "../../assets/send-chat.svg";

const AskQuestions = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Hello Chris! Do you need any help today?",
    },
    {
      type: "user",
      content:
        'Actually, yes! Can you tell me what the main theme of "The Great Gatsby" is?',
    },
    {
      type: "bot",
      content:
        'Sure! The main theme of "The Great Gatsby" is the American Dream and its disillusionment. The novel explores how the pursuit of wealth and social status can lead to moral decay and personal downfall.',
    },
  ]);

  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessages = [...messages, { type: "user", content: message }];
      const botReply = { type: "bot", content: "This is a bot reply." };
      setMessages([...newMessages, botReply]);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        <div className="text-center mb-8 mt-14">
          <h1 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <span className="text-black lg:text-[60px] md:text-[50px] text-[45px] font-normal font-arapix">
              ASK A{" "}
            </span>
            {"   "}
            <span className="text-[#CC9F3A] lg:text-[60px] md:text-[50px] text-[45px] font-normal font-arapix">
              QUESTION
            </span>
          </h1>
          <p className="text-[#5E5E5E] text-[16px] flex items-center justify-center mx-auto max-w-4xl">
            Submit your queries easily and get quick assistance on any topic or
            issue.
          </p>
        </div>

        <div className="bg-white border border-[#898989] rounded-2xl shadow-sm bg-[#CC9F3A05] h-[500px] flex flex-col overflow-y-auto">
          <div className="p-6 flex-1 flex flex-col">
            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto space-y-4 mb-4"
              style={{ minHeight: "0" }}
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex gap-3 md:max-w-[60%] w-[80%] ${
                      msg.type === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-8 h-8 flex-shrink-0">
                      {msg.type === "bot" ? (
                        <div className="w-full h-full bg-white rounded-full shadow-lg p-1 flex items-center justify-center">
                          <img src={haibird} alt="hai-bird" />
                        </div>
                      ) : (
                        <div className="w-full h-full bg-white rounded-full shadow-lg p-1 flex items-center justify-center">
                          <img src={user} alt="user" />
                        </div>
                      )}
                    </div>
                    <div
                      className={`p-5 rounded-lg ${
                        msg.type === "user"
                          ? "bg-[#F4D48D] text-gray-800 border border-[#E1E1E1]"
                          : "bg-white text-gray-800 border border-[#E1E1E1]"
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Start writing from here..."
                className="w-full p-3 pr-12 border border-[#E1E1E1] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button
                onClick={handleSendMessage}
                className="px-3 py-1 bg-[#101010] rounded-lg"
              >
                <img src={send} alt="send" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AskQuestions;
