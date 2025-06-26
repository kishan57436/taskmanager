import React from "react";
import UI_IMG from "../../assets/images/auth-img.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Left side - Form Section */}
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12 relative">
        
        {/* Top-left logo and title */}
        <div className="absolute top-6 left-6 flex items-center gap-2">
          <img src="/favicon-32x32.png" alt="Logo" width="40" />
          <h2 className="text-lg font-medium text-black">Taskify</h2>
        </div>

        {/* Original form and content placement */}
        <div className="mt-24">{children}</div>
      </div>

      {/* Right side - UI Image */}
      <div className="hidden md:flex w-[40vw] h-screen items-center justify-center bg-blue-50 bg-[url('/bg-img.png')] bg-cover bg-no-repeat bg-center overflow-hidden p-8">
        <img src={UI_IMG} className="w-64 lg:w-[90%]" />
      </div>
    </div>
  );
};

export default AuthLayout;
