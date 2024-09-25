import React from "react";
import Navbar from "../components/dashboard/Navbar";
import { Outlet } from "react-router-dom";

function ParentLayout() {
  return (
    <div className="flex flex-col justify-center mt-6 w-screen px-12">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default ParentLayout;
