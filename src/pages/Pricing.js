import React from 'react';
import PricingCard from '../components/PricingCard';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Growth",
      description: "Perfect for startups ready to scale",
      price: "$2,500",
      billing: "per month",
      features: [
        "Pay-per-meeting option available",
        "Inbox setup & domain warm-up",
        "1 personalized sequence",
        "Targeted list building",
        "Weekly performance reports",
        "Basic CRM integration",
        "Email support"
      ],
      cta: "Get Started"
    },
    {
      name: "Scale",
      description: "For growing SaaS companies",
      price: "$5,000",
      billing: "per month",
      features: [
        "Higher monthly capacity",
        "Multi-sequence campaigns",
        "Dedicated account manager",
        "A/B testing & optimization",
        "LinkedIn outreach add-on",
        "Advanced CRM integration",
        "Priority support"
      ],
      cta: "Get Started",
      isPopular: true
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large teams",
      price: "Custom",
      billing: "contact us",
      features: [
        "Custom volume & pricing",
        "Deliverability consulting",
        "Phone + LinkedIn omnichannel",
        "White-label reporting",
        "Custom integrations",
        "Dedicated success manager",
        "24/7 priority support"
      ],
      cta: "Get Quote"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your growth stage. All plans include our proven 
            deliverability setup and personalization technology.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} isPopular={plan.isPopular} />
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Pricing FAQ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What's included in the setup?
              </h3>
              <p className="text-gray-600">
                Domain setup, SPF/DKIM configuration, inbox rotation, and gradual warm-up 
                to ensure maximum deliverability.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I switch plans anytime?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take 
                effect on your next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What's the pay-per-meeting option?
              </h3>
              <p className="text-gray-600">
                You only pay for qualified meetings that actually happen. Perfect for 
                testing our service with minimal risk.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-gray-600">
                We offer a 30-day money-back guarantee if you're not satisfied with 
                our service within the first month.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a free consultation to discuss which plan is right for your company.
          </p>
          <a href="/contact" className="btn-primary">
            Book Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
