"use client";
import { Suspense } from "react";

import LoginPage from "../Components/Login";

export default function SearchPage() {
  return (
    <Suspense
      fallback={<div className="text-center py-10">Loading Search...</div>}
    >
      <LoginPage />
    </Suspense>
  );
}
