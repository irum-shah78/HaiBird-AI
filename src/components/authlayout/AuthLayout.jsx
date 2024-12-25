import React from "react";
import authLogo from "../../assets/auth-logo.svg";
import lock from "../../assets/auth-lock.svg";

export const AuthLayout = ({ children }) => (
  <div className="flex flex-col lg:flex-row min-h-screen">
    <div className="relative w-full lg:w-1/2 p-6 lg:p-12 flex flex-col items-center justify-between overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#EFC056] to-[#C19229] z-0" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-full bg-white/5 -left-24 lg:-left-36 top-1/2" />
        <div className="absolute w-[300px] h-[300px] lg:w-[470px] lg:h-[470px] rounded-full bg-white/5 -right-32 lg:-right-52 top-1/2" />
        <div className="absolute w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-full bg-white/5 -bottom-10 lg:-bottom-20 -left-10 lg:-left-20" />
      </div>

      <div className="relative z-10 w-full max-w-sm lg:max-w-md text-center flex flex-col justify-center">
        <div className="mx-auto">
          <img
            src={authLogo}
            alt="Logo"
            className="mx-auto h-[170px] w-[170px]"
          />
        </div>
        <p className="text-white text-sm lg:text-lg">
          Please sign in to your account to access the latest updates. We
          sincerely hope you have the best experience on our platform.
        </p>
      </div>

      <div className="relative z-10 mt-auto hidden lg:block">
        <div className="absolute w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-white/5 -left-14 lg:-left-18 top-1/2 -translate-y-1/3 -rotate-12" />
        <div className="absolute w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-white/5 -right-6 lg:-right-8 top-1/2 -translate-y-1/3 rotate-12" />
        <div className="bg-white rounded-full flex items-center justify-center relative z-10 h-[70px] w-[70px] lg:h-[90px] lg:w-[90px]">
          <img src={lock} alt="Lock" className="w-[40px] h-[40px]" />
        </div>
      </div>
    </div>

    <div className="w-full lg:w-1/2 p-6 lg:p-12 flex items-center justify-center">
      {children}
    </div>
  </div>
);
