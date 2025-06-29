"use client";
import { Suspense } from "react";

import SearchResult from "../Components/SearchResult";

export default function SearchPage() {
  return (
    <Suspense
      fallback={<div className="text-center py-10">Loading Search...</div>}
    >
      <SearchResult />
    </Suspense>
  );
}
