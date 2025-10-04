import React from 'react';

const PricingCard = ({ plan, isPopular = false }) => {
  return (
    <div className={`relative bg-white rounded-xl shadow-sm border-2 p-8 ${
      isPopular ? 'border-primary-500 shadow-lg' : 'border-gray-200'
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      {/* Plan Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
        <p className="text-gray-600 mb-4">{plan.description}</p>
        <div className="text-4xl font-bold text-gray-900 mb-2">
          {plan.price}
        </div>
        <p className="text-gray-600">{plan.billing}</p>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button 
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
          isPopular 
            ? 'bg-primary-600 hover:bg-primary-700 text-white' 
            : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
        }`}
        onClick={() => {
          // TODO: Open contact modal with pre-filled plan selection
          console.log(`Selected plan: ${plan.name}`);
        }}
      >
        {plan.cta}
      </button>
    </div>
  );
};

export default PricingCard;
