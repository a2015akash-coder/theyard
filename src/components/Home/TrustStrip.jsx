import { memo } from "react";

const StatItem = memo(({ value, label }) => (
  <div className="text-center px-4 py-5 sm:py-0">
    <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-green-700">
      {value}
    </div>
    <div className="mt-1 text-[11px] sm:text-xs tracking-widest uppercase text-gray-500 font-medium">
      {label}
    </div>
  </div>
));

export default function TrustStrip() {
  return (
   <section className="bg-white border-t border-gray-100">
  <div className="max-w-6xl mx-auto px-6 lg:px-8">
    <div className="
      py-5 lg:py-6
      grid grid-cols-1 sm:grid-cols-3
      divide-y sm:divide-y-0 sm:divide-x
      divide-gray-200
    ">
          <StatItem
            value="20+"
            label="Years in Tree Services"
          />

          <StatItem
            value="12,800+"
            label="Tree Jobs Completed"
          />

          <StatItem
            value="320+"
            label="5-Star Google Reviews"
          />
        </div>
      </div>
    </section>
  );
}