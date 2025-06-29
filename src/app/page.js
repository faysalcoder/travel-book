import Image from "next/image";
import Hero from "./Components/Hero";
import FlightSearch from "./Components/FlightSearch";
import PackageCard from "./Components/PackageCard";
import Footer from "./Components/Footer";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<p className="text-center py-10">Loading...</p>}>
        <div className="relative z-1 mt-[-150px]">
          <FlightSearch />
        </div>
      </Suspense>
      <PackageCard />
      <Footer />
    </>
  );
}
