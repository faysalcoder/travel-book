import Image from "next/image";
import Hero from "./Components/Hero";
import FlightSearch from "./Components/FlightSearch";
import PackageCard from "./Components/PackageCard";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="relative z-1 mt-[-150px]">
        <FlightSearch />
      </div>

      <PackageCard />
      <Footer />
    </>
  );
}
