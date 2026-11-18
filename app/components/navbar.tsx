"use client";

import { useRouter } from "next/navigation";

interface NavbarProps {
  activeNav?: string;
}

export default function Navbar({ activeNav = "Dashboard" }: NavbarProps) {
  const router = useRouter();

  return (
    <header className="flex h-[54px] shrink-0 items-center justify-end border-b border-slate-200 bg-white px-5">
     

      <div className="flex items-center gap-4">
        <button
          onClick={() => router.push("/login")}
          className="rounded-lg border border-[#0B192C] bg-white px-3 py-1.5 text-xs font-semibold text-[#0B192C] hover:bg-[#0B192C] hover:text-white transition cursor-pointer shadow-2xs"
        >
          Sign Out
        </button>
      </div>
    </header>
  );
}
