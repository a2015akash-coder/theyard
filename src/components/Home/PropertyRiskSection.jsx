import { AlertTriangle, TreePine, Home, Construction, Phone } from "lucide-react";

const risks = [
  {
    icon: TreePine,
    title: "Overgrown Trees",
    description:
      "Blocking light and damaging nearby structures.",
  },
  {
    icon: AlertTriangle,
    title: "Storm-Damaged Trees",
    description:
      "Weak branches that can fall unexpectedly.",
  },
  {
    icon: Home,
    title: "Trees Too Close To Your Home",
    description:
      "Roots and branches threatening your property.",
  },
  {
    icon: Construction,
    title: "Clearing For Renovation",
    description:
      "Removing trees safely before construction begins.",
  },
];

export default function PropertyRiskSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl lg:text-3xl font-extrabold text-gray-900">
            Is A Tree Putting Your Property <span className="text-green-700">At Risk?</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Overgrown, unstable or damaged trees can cause serious property
            damage, block sunlight, and create safety hazards — especially
            during storms.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-8">
          {risks.map((risk, index) => {
            const Icon = risk.icon;

            return (
              <div
                key={index}
                className="flex flex-col bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition overflow-hidden"
              >
                {/* Placeholder Image Area */}
                <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-sm text-gray-400 tracking-wide uppercase">
                    Image Placeholder
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                      <Icon className="text-green-700" size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {risk.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {risk.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14">
          <a
            href="tel:0450410800"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-md hover:shadow-lg transition"
          >
            <Phone size={20} />
            Call Now For Fast, Safe Removal
          </a>
        </div>

      </div>
    </section>
  );
}