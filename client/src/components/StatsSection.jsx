import React from "react";

const StatsSection = () => {
  const stats = [
    {
      value: "1.2k+",
      label: "Happy Clients",
    },
    {
      value: "25k+",
      label: "Website Visitors",
    },
    {
      value: "98%",
      label: "Satisfaction Rate",
    },
    {
      value: "350+",
      label: "Completed Projects",
    },
  ];

  return (
    <section className="w-full py-12 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100 hover:shadow-md transition"
          >
            <h2 className="text-3xl font-bold text-gray-900">{item.value}</h2>
            <p className="text-gray-600 mt-1 text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
