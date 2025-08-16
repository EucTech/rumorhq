"use client";
import React from "react";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import Footer from "@/components/Footer";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout: React.FC<ProtectedLayoutProps> = ({ children }) => {


  return (
    <>
      <DashboardNavbar />
      <div className={`w-full relative mx-auto h-screen flex-1 flex flex-col px-4 pt-[5em] }`}>
        <div className="flex flex-col gap-3 w-full max-w-[700px]">
          {children}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProtectedLayout;
