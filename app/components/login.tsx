"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#F0F4F8] p-4">
      <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-center gap-2.5">
          <div className="text-2xl font-bold tracking-tight text-[#0B192C]">
            StringRoute
          </div>
        </div>

        <div className="mt-6">
          <h1 className="text-xl font-bold text-[#0B192C]">Sign In</h1>
        </div>

        <form onSubmit={handleLogin} className="mt-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enters your email"
              required
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 outline-none transition focus:border-[#0B192C] "
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-xs font-semibold text-slate-700">
                Password
              </label>
              <a href="#" className="text-[11px] text-slate-500 hover:text-[#0B192C] transition">
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 outline-none transition focus:border-[#0B192C] "
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-lg bg-[#0B192C] px-4 py-2.5 text-xs font-semibold text-white shadow-xs transition hover:bg-[#1E3A8A] cursor-pointer"
          >
            Sign In to Dashboard
          </button>
        </form>

        {/* Registration Link */}
        <div className="mt-6 border-t border-slate-100 pt-4 text-center text-xs text-slate-500">
          <span>Don&apos;t have an account? </span>
          <Link
            href="/register"
            className="font-semibold text-[#0B192C] hover:text-[#1E3A8A] hover:underline"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
