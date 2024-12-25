import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
      <label className="block text-[#3F3F3F] mb-2 font-semibold">{label}</label>
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

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-[#343434]">
          SIGN IN ACCOUNT
        </h2>
        <p className="text-[#616161] text-sm sm:text-base text-center mb-4">
          Please enter details to sign in your account
        </p>
        <form onSubmit={handleSignIn}>
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
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
            <label className="flex items-center mb-2 sm:mb-0">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-600">Remember password</span>
            </label>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-[#CC9F3A]"
            >
              Forget Password?
            </Link>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-[#101010] text-white py-3 rounded-lg hover:bg-gray-800"
          >
            SIGN IN
          </button>
          <p className="text-center mt-6 text-gray-600">
            Didn't have an account?
            <Link
              to="/signup"
              className="text-[#CC9F3A] font-semibold ml-1 hover:underline"
            >
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
