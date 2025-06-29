"use client";

import { useSearchParams, useRouter } from "next/navigation";

import { useState, useEffect } from "react";

export default function BookingForm() {
  const searchParams = useSearchParams();

  const adult = parseInt(searchParams.get("adult") || "1");
  const children = parseInt(searchParams.get("children") || "0");
  const infant = parseInt(searchParams.get("infant") || "0");
  const router = useRouter();

  const [passengerData, setPassengerData] = useState([]);

  useEffect(() => {
    const all = [];

    for (let i = 0; i < adult; i++) {
      all.push({ type: "Adult", name: "", age: "", passport: "" });
    }
    for (let i = 0; i < children; i++) {
      all.push({ type: "Child", name: "", age: "", passport: "" });
    }
    for (let i = 0; i < infant; i++) {
      all.push({ type: "Infant", name: "", age: "", passport: "" });
    }

    setPassengerData(all);
  }, [adult, children, infant]);

  const handleChange = (index, field, value) => {
    const updated = [...passengerData];
    updated[index][field] = value;
    setPassengerData(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted passenger data:", passengerData);

    alert("Booking confirmed!");

    setTimeout(() => {
      router.push("/");
    }, 0);
  };
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6 text-indigo-700">
        Passenger Information
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {passengerData.map((p, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-6 border border-gray-200"
          >
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              {p.type} {index + 1}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Full Name
                </label>
                <input
                  type="text"
                  value={p.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                  className="w-full border px-3 py-2 rounded-md text-sm"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">Age</label>
                <input
                  type="number"
                  min="0"
                  value={p.age}
                  onChange={(e) => handleChange(index, "age", e.target.value)}
                  className="w-full border px-3 py-2 rounded-md text-sm"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Passport No.
                </label>
                <input
                  type="text"
                  value={p.passport}
                  onChange={(e) =>
                    handleChange(index, "passport", e.target.value)
                  }
                  className="w-full border px-3 py-2 rounded-md text-sm"
                  required={p.type === "Adult"}
                  placeholder={
                    p.type === "Child" || p.type === "Infant"
                      ? "Optional"
                      : "Required"
                  }
                />
              </div>
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
