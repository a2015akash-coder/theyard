import { memo } from "react";
import { CheckCircle, Star } from "lucide-react";

const Bullet = memo(({ children }) => (
  <div className="flex items-start gap-3">
    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
      <CheckCircle size={16} className="text-green-700" />
    </div>
    <p className="text-gray-600 leading-relaxed">{children}</p>
  </div>
));

export default function Hero() {
  return (
    <section className="relative pt-24 lg:pt-28 pb-20 bg-gradient-to-b from-gray-50 via-white to-white overflow-hidden">
      
      {/* Decorative background blur */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-green-200 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT SIDE */}
          <div>

            {/* Modern Trust Badge */}
            <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-gray-200 shadow-sm mb-10">
              
              <div className="flex items-center gap-1 text-yellow-500">
                <Star size={16} fill="currentColor" />
                <span className="font-semibold text-gray-900">5.0</span>
              </div>

              <span className="text-gray-500 text-sm">
                320+ Google Reviews
              </span>

              <div className="w-px h-4 bg-gray-300" />

              <span className="text-sm font-medium text-green-700">
                100% Licensed & Insured
              </span>
            </div>

            {/* Improved Headline */}
            <h1 className="text-4xl lg:text-4xl font-extrabold tracking-tight leading-[1.1] text-gray-900 mb-6 max-w-2xl">
              Safe, Professional{" "}
              <span className="bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">
                Tree Removal
              </span>{" "}
              & Care in Australia
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl">
              Backed by 20+ years of combined experience, we deliver reliable,
              damage-free tree services with safety and integrity at the core.
            </p>

            {/* Benefits */}
            <div className="space-y-5 mb-10">
              <Bullet>Fast & Controlled Tree Removal</Bullet>
              <Bullet>Property Protection Guaranteed</Bullet>
              <Bullet>Complete Clean-Up. No Mess Left Behind</Bullet>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0450410800"
                className="inline-flex items-center justify-center bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white px-7 py-3.5 rounded-2xl font-semibold shadow-md hover:shadow-xl transition-all duration-200"
              >
                Call Now for Fast Service
              </a>

              <a
                href="#quote"
                className="inline-flex items-center justify-center bg-white border border-gray-200 hover:border-green-600 hover:text-green-700 px-7 py-3.5 rounded-2xl font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Get Free Quote
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div id="quote" className="relative">
            <div className="bg-white rounded-3xl p-10 shadow-[0_15px_50px_rgba(0,0,0,0.08)] border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Free Online Quote
              </h3>
              <p className="text-gray-500 text-sm mb-8">
                Get a fast estimate with no obligation.
              </p>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-green-600 focus:bg-white transition"
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-green-600 focus:bg-white transition"
                />

                <input
                  type="text"
                  placeholder="Suburb"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-green-600 focus:bg-white transition"
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white py-4 rounded-2xl font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Get My Free Quote
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-6 leading-relaxed">
                For onsite inspections, a $99 call-out fee applies — fully
                waived if you proceed on the day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}