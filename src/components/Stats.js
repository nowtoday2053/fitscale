import React from 'react';

const Stats = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proven Results for B2B SaaS
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our cold email campaigns consistently turn prospects into millions in revenue for SaaS startups.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              15K+
            </div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Leads Generated</div>
            <div className="text-gray-600">Across all campaigns</div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              $1.2M
            </div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Revenue Generated</div>
            <div className="text-gray-600">Attributed to our campaigns</div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              450+
            </div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Meetings Booked</div>
            <div className="text-gray-600">Qualified demo calls</div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              97%
            </div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Client Satisfaction</div>
            <div className="text-gray-600">Based on client feedback</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
