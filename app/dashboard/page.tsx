"use client";

import { useState } from "react";
import SideMenu from "../components/side-menu";
import Navbar from "../components/navbar";
import Dashboard from "../components/dashboard";

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white text-slate-800">
      <SideMenu activeNav={activeNav} onSelectNav={setActiveNav} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar activeNav={activeNav} />
        <Dashboard />
      </div>
    </div>
  );
}
