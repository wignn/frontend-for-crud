
import React from "react";

interface Feature {
  title: string;
  href: string;
  description: string;
  
}

interface FeatureListProps {
  className: string;
  features: Feature[];
}

const FeatureList: React.FC<FeatureListProps> = ({ className, features }) => {

  return (
    <div className={`w-full px-4 ${className}`}>
      <h2 className="md:text-3xl text-lg font-bold text-center mb-6 text-gray-200">
        Our Features
      </h2>

      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 justify-cente lg:grid-cols-4">
        {features.slice(0, 4).map((feature, idx) => (
          
          <a
            key={idx}
            href={feature.href}
            className="p-4 mb-4 bg-opacity-40 backdrop-blur-lg backdrop-filter bg-zinc-900 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="md:text-xl text-base font-semibold mb-2 text-gray-400">
              {feature.title}
            </h3>
            <p className="text-gray-600 md:text-base text-sm">
              {feature.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FeatureList;
