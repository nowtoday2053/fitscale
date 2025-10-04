import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Double Your MRR Within{' '}
            <span className="text-primary-600 whitespace-nowrap">60 Days.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get more qualified meetings, more clients, and more recurring revenue with cold emails
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-6">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Book a free consultation
            </Link>
          </div>


          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">15K+</div>
              <div className="text-sm text-gray-600">Leads Generated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">$1.2M</div>
              <div className="text-sm text-gray-600">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">450+</div>
              <div className="text-sm text-gray-600">Meetings Booked</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">97%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
