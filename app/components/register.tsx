"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const router = useRouter();
  const [step, setStep] = useState<"register" | "otp">("register");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("otp");
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
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

        {step === "register" ? (
          <>
            <div className="mt-6">
              <h1 className="text-xl font-bold text-[#0B192C]">Create an account</h1>
            </div>
            <form onSubmit={handleRegister} className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 outline-none transition focus:border-[#0B192C] "
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 outline-none transition focus:border-[#0B192C] "
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  Password
                </label>
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
                Create Account
              </button>
            </form>

            <div className="mt-6 border-t border-slate-100 pt-4 text-center text-xs text-slate-500">
              <span>Already have an account? </span>
              <Link
                href="/login"
                className="font-semibold text-[#0B192C] hover:text-[#1E3A8A] hover:underline"
              >
                Sign in
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="mt-6">
              <h1 className="text-xl font-bold text-[#0B192C]">Verify OTP</h1>
              <p className="mt-1 text-xs text-slate-500">
                Enter the verification code sent to {email ? <span className="font-semibold text-slate-700">{email}</span> : "your email"}.
              </p>
            </div>

            <form onSubmit={handleVerifyOtp} className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  Verification Code
                </label>
                <input
                  type="number"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-center font-mono text-lg tracking-widest text-slate-800 outline-none transition focus:border-[#0B192C] "
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-lg bg-[#0B192C] px-4 py-2.5 text-xs font-semibold text-white shadow-xs transition hover:bg-[#1E3A8A] cursor-pointer"
              >
                Verify & Continue
              </button>
            </form>

            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
              
              <button
                type="button"
                onClick={() => alert("A new OTP code has been sent.")}
                className="text-slate-500 hover:text-[#0B192C] transition cursor-pointer"
              >
                Resend code
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
