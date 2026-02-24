import { ShieldCheck, Wrench, Brush, MapPin, Phone, Image } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Fully Licensed & Insured",
    description:
      "Complete coverage and full compliance for total peace of mind on every project.",
  },
  {
    icon: Wrench,
    title: "Professional-Grade Equipment",
    description:
      "Modern tools and advanced machinery for controlled, precise tree removal.",
  },
  {
    icon: Brush,
    title: "Complete Clean-Up Included",
    description:
      "We leave your property spotless after every job — no debris left behind.",
  },
  {
    icon: MapPin,
    title: "Local Melbourne Experts",
    description:
      "Deep knowledge of local trees, soil conditions and council regulations.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl lg:text-3xl font-extrabold text-gray-900">
            Why Melbourne Homeowners Choose{" "}
            <span className="text-green-700">The Yard</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            We combine experience, professional equipment, and strict safety
            standards to deliver reliable, damage-free tree removal every time.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden border border-gray-100"
              >
                {/* Placeholder Image Area */}
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="flex flex-col items-center text-gray-400">
                    <Image size={28} />
                    <span className="text-xs mt-2 tracking-wide uppercase">
                      Image Placeholder
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                      <Icon className="text-green-700" size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Card CTA */}
                  <a
                    href="tel:0450410800"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 transition"
                  >
                    <Phone size={16} />
                    Call Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}