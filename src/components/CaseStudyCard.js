import React from 'react';

const CaseStudyCard = ({ caseStudy }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
      {/* Company Header */}
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
          <span className="text-lg font-bold text-gray-600">
            {caseStudy.company.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{caseStudy.company}</h3>
          <p className="text-gray-600">{caseStudy.industry}</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-4 bg-primary-50 rounded-lg">
          <div className="text-2xl font-bold text-primary-600">{caseStudy.meetings}</div>
          <div className="text-sm text-gray-600">Meetings</div>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-600">{caseStudy.replyRate}</div>
          <div className="text-sm text-gray-600">Reply Rate</div>
        </div>
      </div>

      {/* Period */}
      <div className="text-center mb-6">
        <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
          {caseStudy.period}
        </span>
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 italic mb-6">
        "{caseStudy.quote}"
      </blockquote>

      {/* Detailed Metrics */}
      <div className="border-t border-gray-200 pt-6">
        <h4 className="font-semibold text-gray-900 mb-4">Campaign Performance</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Emails Sent:</span>
            <span className="font-semibold ml-2">{caseStudy.metrics.emailsSent.toLocaleString()}</span>
          </div>
          <div>
            <span className="text-gray-600">Open Rate:</span>
            <span className="font-semibold ml-2">{caseStudy.metrics.openRate}</span>
          </div>
          <div>
            <span className="text-gray-600">Reply Rate:</span>
            <span className="font-semibold ml-2">{caseStudy.metrics.replyRate}</span>
          </div>
          <div>
            <span className="text-gray-600">Conversion:</span>
            <span className="font-semibold ml-2">{caseStudy.metrics.conversionRate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
