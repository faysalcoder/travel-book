import Image from "next/image";
import Hero from "./Components/Hero";
import FlightSearch from "./Components/FlightSearch";
import PackageCard from "./Components/PackageCard";

export default function Home() {
  return (
    <>
      <Hero />
      <FlightSearch />
      <PackageCard />
    </>
  );
}
