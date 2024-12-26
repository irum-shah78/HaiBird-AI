import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/signin/Signin.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import HomePage from "./pages/homepage/HomePage.jsx";
import UploadDocument from "./pages/uploaddocument/UploadDocument.jsx";
import AskQuestions from "./pages/askquestions/AskQuestions.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/upload-documents" element={<UploadDocument />} />
        <Route path="/ask-questions" element={<AskQuestions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
