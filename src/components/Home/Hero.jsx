import { memo } from "react";
import { CheckCircle, Star } from "lucide-react";

const Bullet = memo(({ children }) => (
  <div className="flex items-start gap-3">
    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
      <CheckCircle size={16} className="text-green-400" />
    </div>
    <p className="text-white/85 leading-relaxed">{children}</p>
  </div>
));

export default function Hero() {
  return (
    <section className="relative pt-24 lg:pt-28 pb-20 overflow-hidden min-h-[720px] flex items-center">
      
      {/* Optimized LCP Background Image */}
      <img
        src="https://res.cloudinary.com/dvtbbuxon/image/upload/f_auto,q_auto,w_1920/v1771866124/1_w4ik9h.jpg"
        srcSet="
          https://res.cloudinary.com/dvtbbuxon/image/upload/f_auto,q_auto,w_768/v1771866124/1_w4ik9h.jpg 768w,
          https://res.cloudinary.com/dvtbbuxon/image/upload/f_auto,q_auto,w_1280/v1771866124/1_w4ik9h.jpg 1280w,
          https://res.cloudinary.com/dvtbbuxon/image/upload/f_auto,q_auto,w_1920/v1771866124/1_w4ik9h.jpg 1920w
        "
        sizes="100vw"
        alt="Professional arborist performing safe tree removal service"
        fetchPriority="high"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Soft layered overlay (modern cinematic style) */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-white">
            
            {/* Modern Trust Badge */}
            <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <div className="flex items-center gap-1 text-yellow-400">
                <Star size={16} fill="currentColor" />
                <span className="font-semibold text-white">5.0</span>
              </div>

              <span className="text-sm text-white/80">
                320+ Google Reviews
              </span>

              <div className="w-px h-4 bg-white/30" />

              <span className="text-sm font-medium text-green-400">
                100% Licensed & Insured
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-4xl font-extrabold leading-tight mb-5 max-w-2xl">
              Safe, Professional{" "}
              <span className="text-green-400">
                Tree Removal
              </span>{" "}
              & Care in Australia
            </h1>

            {/* Subtext */}
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Backed by 20+ years of combined experience, we deliver reliable,
              damage-free tree services with safety and integrity at the core.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              <Bullet>Fast & Controlled Tree Removal</Bullet>
              <Bullet>Property Protection Guaranteed</Bullet>
              <Bullet>Complete Clean-Up. No Mess Left Behind</Bullet>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0450410800"
                className="bg-green-600 hover:bg-green-700 px-7 py-3.5 rounded-2xl font-semibold transition shadow-lg hover:shadow-xl"
              >
                Call Now for Fast Service
              </a>

              <a
                href="#quote"
                className="bg-white/10 hover:bg-white/20 border border-white/20 px-7 py-3.5 rounded-2xl font-semibold transition"
              >
                Get Free Quote
              </a>
            </div>
          </div>

          {/* RIGHT FORM CARD */}
          <div id="quote">
            <div className="bg-white rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-white/10 backdrop-blur-sm">
              
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
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Get My Free Quote
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-6 leading-relaxed">
                For onsite inspections, a $99 call-out fee applies — fully waived if you proceed on the day.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}