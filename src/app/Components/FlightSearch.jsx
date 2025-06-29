"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  MapPinIcon,
  UserIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

export default function FlightSearch() {
  const router = useRouter();

  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  const [origin, setOrigin] = useState("DAC");
  const [destination, setDestination] = useState("DXB");
  const [departure, setDeparture] = useState(today);
  const [returnDate, setReturnDate] = useState(tomorrow);
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams({
      origin,
      destination,
      departureDate: departure,
      returnDate,
      adult: String(adult),
      children: String(children),
      infant: String(infant),
    });

    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="bg-white max-w-5xl mx-auto mt-10 p-8 rounded-2xl shadow-md">
      {/* Header */}
      <div className="mb-2 text-sm text-gray-500">Your location</div>
      <div className="text-2xl font-semibold text-gray-800 mb-6">
        Dhaka, Bangladesh
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-6 sm:grid-cols-12 gap-4 items-end"
      >
        {/* Origin */}
        <div className="col-span-3">
          <label className="text-sm text-gray-600 mb-1 block">From</label>
          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-full text-sm">
            <MapPinIcon className="h-5 w-5 mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="e.g. DAC"
              className="bg-transparent outline-none w-full"
              value={origin}
              onChange={(e) => setOrigin(e.target.value.toUpperCase())}
              required
            />
          </div>
        </div>

        {/* Destination */}
        <div className="col-span-3">
          <label className="text-sm text-gray-600 mb-1 block">To</label>
          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-full text-sm">
            <MapPinIcon className="h-5 w-5 mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="e.g. DXB"
              className="bg-transparent outline-none w-full"
              value={destination}
              onChange={(e) => setDestination(e.target.value.toUpperCase())}
              required
            />
          </div>
        </div>

        {/* Departure */}
        <div className="col-span-3">
          <label className="text-sm text-gray-600 mb-1 block">Check-In</label>
          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-full text-sm">
            <CalendarDaysIcon className="h-5 w-5 mr-2 text-gray-500" />
            <input
              type="date"
              className="bg-transparent outline-none w-full"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Return */}
        <div className="col-span-3">
          <label className="text-sm text-gray-600 mb-1 block">Check-Out</label>
          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-full text-sm">
            <CalendarDaysIcon className="h-5 w-5 mr-2 text-gray-500" />
            <input
              type="date"
              className="bg-transparent outline-none w-full"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
        </div>

        {/* Adults */}
        <div className="sm:col-span-3 col-span-2">
          <label className="text-sm text-gray-600 mb-1 block">Adults</label>
          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-full text-sm">
            <UserIcon className="h-5 w-5 mr-2 text-gray-500" />
            <input
              type="number"
              min="1"
              className="bg-transparent outline-none w-full"
              value={adult}
              onChange={(e) => setAdult(Number(e.target.value))}
              placeholder="Adults"
            />
          </div>
        </div>

        {/* Children */}
        <div className="sm:col-span-3 col-span-2">
          <label className="text-sm text-gray-600 mb-1 block">Children</label>
          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-full text-sm">
            <UserGroupIcon className="h-5 w-5 mr-2 text-gray-500" />
            <input
              type="number"
              min="0"
              className="bg-transparent outline-none w-full"
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
              placeholder="Children"
            />
          </div>
        </div>

        {/* Infants */}
        <div className="sm:col-span-3 col-span-2">
          <label className="text-sm text-gray-600 mb-1 block">Infants</label>
          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-full text-sm">
            <UserCircleIcon className="h-5 w-5 mr-2 text-gray-500" />
            <input
              type="number"
              min="0"
              className="bg-transparent outline-none w-full"
              value={infant}
              onChange={(e) => setInfant(Number(e.target.value))}
              placeholder="Infants"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="sm:col-span-3 col-span-6 mt-6">
          <button
            type="submit"
            className="bg-rose-500 hover:bg-rose-600 text-white text-sm py-3 rounded-full w-full transition"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
