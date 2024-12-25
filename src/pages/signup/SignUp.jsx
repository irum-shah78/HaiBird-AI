import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { AuthLayout } from "../../components/authlayout/AuthLayout";

const Input = ({ label, type = "text", ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const inputType = type === "password" && isPasswordVisible ? "text" : type;

  return (
    <div className="mb-4">
      <label className="block text-[#3F3F3F] mb-2 font-semibold text-sm md:text-base">
        {label}
      </label>
      <div className="relative">
        <input
          type={inputType}
          className="w-full px-4 py-3 rounded-lg border border-[#D3D3D3] focus:outline-none focus:border-[#EFC056] placeholder:text-[#656565] text-sm"
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {isPasswordVisible ? (
              <Eye className="w-5 h-5 text-[#8A8A8A]" />
            ) : (
              <EyeOff className="w-5 h-5 text-[#8A8A8A]" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

const SignUp = () => (
  <AuthLayout>
    <div className="w-full max-w-md flex flex-col gap-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-[#343434] text-center">
          CREATE ACCOUNT
        </h2>
        <p className="text-[#616161] text-sm sm:text-base text-center mb-4">
          Please enter details to create your account
        </p>
        <form>
          <Input label="User Name" placeholder="Enter your username" />
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email address"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="Enter your password"
          />
          <button className="mt-4 w-full bg-[#101010] text-white py-3 rounded-lg hover:bg-gray-800">
            SIGN UP
          </button>
        </form>
      </div>
      <div>
        <p className="text-center mt-6 text-gray-600 text-sm sm:text-base">
          Already have an account?
          <Link
            to="/signin"
            className="text-[#CC9F3A] font-semibold ml-1 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  </AuthLayout>
);

export default SignUp;
