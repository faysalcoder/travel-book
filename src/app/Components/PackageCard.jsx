"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

const packages = [
  {
    title: "Bali, Indonesia",
    duration: "3 Days 2 Night",
    image: "/bali.jpg",
  },
  {
    title: "Yogyakarta, Indonesia",
    duration: "4 Days 3 Night",
    image: "/yogyakarta.jpg",
  },
  {
    title: "Nusa Penida, Indonesia",
    duration: "3 Days 2 Night",
    image: "/nusa.jpg",
  },
  {
    title: "Rembang, Indonesia",
    duration: "4 Days 3 Night",
    image: "/rembang.jpg",
  },
];

export default function PackageCard() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi]);

  return (
    <section className="text-center py-12 bg-white container mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Popular Package</h2>
      <p className="text-gray-500 mt-2 mb-8">
        The most popular tour packages presented to you
      </p>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-8">
          {packages.map((item, index) => (
            <div
              key={index}
              className="min-w-[75%] sm:min-w-[45%] lg:min-w-[23%] relative rounded-2xl overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm">{item.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full text-sm shadow">
          Explore more
        </button>
      </div>
    </section>
  );
}
