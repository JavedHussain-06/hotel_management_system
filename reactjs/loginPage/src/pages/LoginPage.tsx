import React from "react";
import { AuthForm } from "../components/AuthForm";
import { LoginFormData } from "../types/AuthForm";
import { Link } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const handleLogin = (data: LoginFormData) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen">
      <div className="w-1/4 max-w-xl  p-6 bg-white shadow-lg  rounded-lg">
        <AuthForm<LoginFormData>
          title="Login"
          onSubmit={handleLogin}
        />
      </div>

      <div className="mt-6 text-sm text-gray-600">
        <span>Don't have an account? </span>
        <Link to="/register" className="text-blue-500 hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  );
};
