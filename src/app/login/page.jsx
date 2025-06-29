"use client";
import { useAuth } from "../context/authContext";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const { login, signUp, loginWithGoogle } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/";

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const handleAuth = async () => {
    try {
      if (isCreating) {
        if (!name) {
          alert("Please enter your name.");
          return;
        }

        if (pass !== confirmPass) {
          alert("Passwords do not match.");
          return;
        }

        await signUp(email, pass, name); // Assumes your signUp supports name
      } else {
        await login(email, pass);
      }

      router.push(from);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      router.push(from);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 relative">
      {/* Back to Home Button */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-6 left-6 flex items-center text-blue-600 hover:underline text-sm font-medium"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Home
      </button>

      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          {isCreating ? "Create Account" : "Login to Your Account"}
        </h2>

        <div className="space-y-4">
          {isCreating && (
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />

          {isCreating && (
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              type="password"
              placeholder="Confirm Password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          )}

          <button
            onClick={handleAuth}
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {isCreating ? "Sign Up" : "Login"}
          </button>

          <div className="relative text-center text-gray-500 text-sm">
            <span className="bg-white px-2 z-10 relative">OR</span>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 -z-10 transform -translate-y-1/2" />
          </div>

          <button
            onClick={handleGoogle}
            className="w-full bg-white border border-gray-300 py-2 rounded-lg text-gray-700 font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <p className="text-sm text-center mt-4">
            {isCreating ? (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setIsCreating(false)}
                  className="text-blue-600 hover:underline"
                >
                  Login
                </button>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <button
                  onClick={() => setIsCreating(true)}
                  className="text-blue-600 hover:underline"
                >
                  Sign Up
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
