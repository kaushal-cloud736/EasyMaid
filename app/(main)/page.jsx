

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { creditBenefits, features, testimonials } from "@/lib/data";
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
      <section className="py-28 relative overflow-hidden">
        {/* Soft glowing background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5ebe0] via-[#e6ccb2]/40 to-[#f5ebe0]"></div>

        <div className="relative container mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Why Choose EasyMaid
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Trusted, reliable, and professional maid services at your doorstep.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="
            group
            bg-white/80
            backdrop-blur-lg
            border border-white/60
            rounded-3xl
            p-8
            shadow-[0_20px_50px_rgba(0,0,0,0.08)]
            transition-all duration-400
            hover:-translate-y-1
            hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)]
          "
              >
                {/* Icon */}
                <div
                  className="
              w-14 h-14
              flex items-center justify-center
              rounded-xl
              bg-emerald-100
              mb-6
              shadow-sm
              transition-all duration-300
              group-hover:bg-emerald-500
            "
                >
                  <div className="text-emerald-500 group-hover:text-white">
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
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

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Customer Reviews
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>

            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Real experiences from families who trust EasyMaid every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="
            bg-[#fdf8f3]
            border border-[#e6ccb2]
            rounded-2xl
            p-8
            shadow-sm
            transition-all duration-300
            hover:-translate-y-2
            hover:shadow-xl
          "
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
                    <span className="text-emerald-600 font-bold">
                      {testimonial.initials}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  “{testimonial.quote}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>




    </main>
  );
}

