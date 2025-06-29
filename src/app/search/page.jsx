"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PlaneTakeoff, Clock, PlaneLanding, MapPin } from "lucide-react";
import { useAuth } from "../context/authContext";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter(); // Initialize router here

  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(flights);
  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");
  const departureDate = searchParams.get("departureDate");
  const returnDate = searchParams.get("returnDate");
  const adult = searchParams.get("adult");
  const children = searchParams.get("children");
  const infant = searchParams.get("infant");
  const { user } = useAuth();

  const handleBook = () => {
    if (!user) {
      router.push("/login");
      return;
    }

    router.push(
      `/booking?adult=${adult}&children=${children}&infant=${infant}`
    );
  };

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        setLoading(true);
        const payload = {
          origin,
          destination,
          departureDate,
          returnDate,
          passenger: {
            adult: parseInt(adult || "1"),
            children: parseInt(children || "0"),
            infant: parseInt(infant || "0"),
          },
        };

        const response = await fetch("https://api.tbp.travel/flights", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        setFlights(data?.data || []);
      } catch (err) {
        console.error("Error fetching flights:", err);
        setFlights([]);
      } finally {
        setLoading(false);
      }
    };

    if (origin && destination && departureDate) {
      fetchFlights();
    }
  }, [origin, destination, departureDate, returnDate, adult, children, infant]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 font-sans text-gray-900">
      <h1 className="text-3xl font-bold mb-12 text-blue-700">
        Flight Results from {origin} to {destination}
      </h1>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : flights.length === 0 ? (
        <p className="text-center text-gray-500 text-lg font-medium">
          No flights found.
        </p>
      ) : (
        <div className="space-y-8">
          {flights.map((flight, index) => {
            const leg = flight.itin_details[0]?.flight_data[0];

            const airlineName = leg?.airline_name || "Unknown Airline";
            const stops = leg?.stop_count || 0;
            const duration = leg?.duration || 0;
            const travelType = flight.travel_type;
            const price = flight?.price_info?.total || "N/A";
            const currency = flight?.salecurrencycode || "";
            const airLogo = flight?.air_logo;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-6 border border-blue-100"
              >
                {/* Airline Info */}
                <div className="flex items-center gap-4 flex-1 min-w-[160px]">
                  <div className="bg-blue-50 rounded-lg p-2 shadow w-16 h-16 flex items-center justify-center">
                    <img
                      src={airLogo}
                      alt={airlineName}
                      className="object-contain w-full h-full rounded"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-blue-700">
                      {airlineName}
                    </h2>
                    <p className="text-sm text-blue-400 uppercase tracking-wider">
                      {travelType} flight
                    </p>
                  </div>
                </div>

                {/* Flight Details */}
                {/* Flight Details (Updated with Line, Duration, Stops) */}
                <div className="flex flex-2 justify-center items-center w-full">
                  <div className="flex items-center justify-between w-full text-center text-gray-800 relative">
                    {/* Departure Info */}
                    <div className="text-left w-1/3">
                      <p className="text-xl font-semibold">
                        {new Date(leg?.arrivaldate).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: false,
                        })}
                      </p>
                      <p className="text-sm text-gray-500 leading-tight">
                        {origin}
                      </p>
                    </div>

                    {/* Middle Line with Duration & Stops */}
                    <PlaneTakeoff className="w-5 h-5 text-blue-600 bg-white z-10 mr-3" />
                    <div className="relative w-1/3 flex flex-col items-center justify-center">
                      {/* Line */}

                      {/* Plane Icon */}

                      {/* Duration & Stops */}
                      <div className="flex flex-col items-center text-xs text-gray-500 mt-1 z-10 bg-white px-2">
                        <span className="text-sm font-medium mb-3">
                          {Math.floor(duration / 60)}h {duration % 60}m
                        </span>
                        <div className="border-t border-dashed border-gray-400 w-full absolute top-1/2 transform -translate-y-1/2 z-0"></div>
                        <span>
                          {stops === 0
                            ? "Non Stop"
                            : `${stops} Stop${stops > 1 ? "s" : ""}`}
                        </span>
                      </div>
                    </div>
                    <PlaneLanding className="w-5 h-5 text-blue-600 bg-white z-10 ml-3" />

                    {/* Arrival Info */}
                    <div className="text-right w-1/3">
                      <p className="text-xl font-semibold">
                        {new Date(leg?.departuredate).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: false,
                        })}
                      </p>
                      <p className="text-sm text-gray-500 leading-tight">
                        {destination}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Price & Book */}
                <div className="flex flex-col items-center sm:items-end gap-3 flex-1 min-w-[140px]">
                  <p className="text-2xl font-semibold text-blue-700">
                    {currency} {price}
                  </p>
                  <button
                    onClick={handleBook}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-2 rounded-full shadow-sm transition"
                    aria-label={`Book flight with ${airlineName}`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
