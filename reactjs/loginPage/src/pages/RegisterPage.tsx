import React from "react";
import { AuthForm } from "../components/AuthForm";
import { RegisterFormData } from "../types/AuthForm";
import { Link } from "react-router-dom";

export const RegisterPage: React.FC = () => {
  const handleRegister = (data: RegisterFormData) => {
    console.log("Register Data:", data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen">
      <div className="w-1/4 max-w-xl border-4 p-6 bg-white shadow-lg  rounded-lg">
      <AuthForm<RegisterFormData>
        title="Register"
        onSubmit={handleRegister}
        isRegister
      />
      <div className="mt-4 text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-indigo-600 hover:underline">
          Log in
        </Link>
      </div>
      </div>
    </div>
  );
};
