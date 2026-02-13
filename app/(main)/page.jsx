

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="relative h-screen flex items-center">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/maid-hero4.jpg"
          alt="Maid"
          fill
          className="object-cover object-[right_25%]"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-xl text-white">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Trusted Female <br />
            Maid Services <br />
            for Your Home
          </h1>

          <div className="mt-6 inline-block bg-white/20 backdrop-blur px-5 py-2 rounded-full">
            Cooking • Cleaning • Washing • Babysitting
          </div>

          <p className="mt-6 text-white/90">
            Book verified female maids for cooking, cleaning,
            washing, and babysitting. Safe, reliable, and
            friendly services at your doorstep.
          </p>
          

          <div className="mt-8 flex gap-4">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl cursor-pointer">
              Book a Maid
            </Button>

            <Button
              className="px-6 py-3 rounded-xl bg-white/90 text-gray-800 
             hover:bg-white shadow-md backdrop-blur 
             border border-white/40 cursor-pointer"
            >
              View Services
            </Button>

          </div>

        </div>
      </div>
    </section>
  );
}

