"use client";
import { useAuth } from "../context/authContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const { login, signUp, loginWithGoogle } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const handleAuth = async () => {
    try {
      if (isCreating) {
        await signUp(email, pass);
      } else {
        await login(email, pass);
      }
      router.push("/booking");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      router.push("/booking");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 space-y-4">
      <h2 className="text-xl font-bold">
        {isCreating ? "Create Account" : "Login"}
      </h2>

      <input
        className="border p-2 w-full"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2 w-full"
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      <button
        onClick={handleAuth}
        className="bg-blue-600 text-white w-full py-2"
      >
        {isCreating ? "Sign Up" : "Login"}
      </button>

      <button
        onClick={handleGoogle}
        className="bg-red-500 text-white w-full py-2"
      >
        Continue with Google
      </button>

      <button
        className="text-sm underline text-center block w-full mt-2"
        onClick={() => setIsCreating(!isCreating)}
      >
        {isCreating ? "Already have an account? Login" : "Create a new account"}
      </button>
    </div>
  );
}
