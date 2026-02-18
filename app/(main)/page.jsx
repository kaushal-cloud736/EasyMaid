

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { creditBenefits, features } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, Check, Stethoscope } from "lucide-react";

export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/maid-hero2 .jpg"
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
                <Link href={"/maids"}>Book a Maid</Link>
              </Button>

              <Button
                className="px-6 py-3 rounded-xl bg-white/90 text-gray-800 
             hover:bg-white shadow-md backdrop-blur 
             border border-white/40 cursor-pointer"
              >
                <Link href={"/services"}>View Services</Link>
              </Button>

            </div>

          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Popular Cities
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {/* now yaha par js ka code likhna hai so use {...} */}
            {[
              { name: "Jaipur", img: "/cities/jaipur.avif" },
              { name: "Mumbai", img: "/cities/mumbai.avif" },
              { name: "Delhi", img: "/cities/delhi.avif" },
              { name: "Pune", img: "/cities/pune.avif" },
              { name: "Ahmedabad", img: "/cities/ahmedabad.avif" },
              { name: "Bangalore", img: "/cities/bangalore.avif" },
              { name: "Hyderabad", img: "/cities/hyderabad.avif" },
              { name: "Lucknow", img: "/cities/lucknow.avif" },
              { name: "Indore", img: "/cities/indore.avif" },
              { name: "Chandigarh", img: "/cities/chandigarh.avif" },
            ].map((city) => {
              return (
                <div
                  key={city.name}
                  className="
               bg-white rounded-xl overflow-hidden
                shadow-md
                transition-shadow duration-300
                hover:shadow-[-10px_15px_30px_rgba(0,0,0,0.2)]
                cursor-pointer"
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={city.img}
                      alt={city.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>

                  <div className="p-4 text-center font-medium">
                    Maid in {city.name}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose EasyMaid Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose EasyMaid
          </h2>
          <p className="text-center text-gray-700 mb-12">
            Trusted, reliable, and professional maid services at your doorstep.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              return (
                <Card
                  key={index}
                  className="
              bg-[#fdf8f3]
              border border-[#e6ccb2]
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all duration-300
            "
                >
                  <CardHeader className="pb-2">
                    <div className="bg-emerald-100 p-3 rounded-lg w-fit mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>


      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Home Service Credits
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Buy credits once and use them anytime for cleaning, cooking, or babysitting services.
            </p>
          </div>

          {/* Credit Info Card */}
          <div className="max-w-4xl mx-auto">
            <div
              className="
          bg-[#fdf8f3]
          border border-[#e6ccb2]
          rounded-2xl
          p-8
          shadow-sm
          hover:shadow-lg
          transition-all duration-300
        "
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="bg-emerald-100 p-2 rounded-lg mr-3">
                  <Check className="h-5 w-5 text-emerald-500" />
                </span>
                How EasyMaid Credits Work
              </h3>

              <ul className="space-y-4">
                {creditBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 bg-emerald-100 p-1 rounded-full">
                      <Check className="h-4 w-4 text-emerald-500" />
                    </div>
                    <p
                      className="text-gray-700"
                      dangerouslySetInnerHTML={{ __html: benefit }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>



    </main>
  );
}

