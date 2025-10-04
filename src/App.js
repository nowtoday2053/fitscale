import React, { useState } from 'react';
import { ArrowRight, Mail, Target, TrendingUp, Check, Menu, X, ChevronDown } from 'lucide-react';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-black">
                Fitscale
              </span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8 justify-center flex-1 -ml-16">
              <a href="#services" className="text-black hover:text-gray-600 transition-colors">
                Services
              </a>
              <a href="#how-it-works" className="text-black hover:text-gray-600 transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-black hover:text-gray-600 transition-colors">
                Pricing
              </a>
            </nav>


            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-black transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-black transition-colors">
                  Services
                </a>
                <a href="#how-it-works" className="block px-3 py-2 text-gray-600 hover:text-black transition-colors">
                  How It Works
                </a>
                <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-black transition-colors">
                  Pricing
                </a>
                <a href="https://calendly.com/marion_designx/your-saas-startup-blueprint-call" target="_blank" rel="noopener noreferrer" className="w-full text-left bg-black hover:bg-gray-800 text-white px-3 py-2 rounded-lg transition-colors inline-block">
                  Book a call
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 border border-gray-300 text-gray-700 text-sm font-medium mb-8">
            For B2B SaaS Companies Making $5k+ MRR
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            <span className="text-black">Double Your MRR Within<br />60 Days.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We handle your entire cold email outreach so you can focus on building your product. We make sure to double your MRR without hiring a sales team.
          </p>

          {/* CTAs */}
          <div className="flex justify-center mb-12">
            <a href="https://calendly.com/marion_designx/your-saas-startup-blueprint-call" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 button-hover inline-block">
              Book a call
              <ArrowRight size={20} />
            </a>
          </div>

        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-16">
            What We Do For You:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 card-hover">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Find Your Customers</h3>
              <p className="text-gray-600">
                We research and build targeted prospect lists of your ideal customers. 
                No more guessing who to reach out to.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 card-hover">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Send Personalized Emails</h3>
              <p className="text-gray-600">
                We write and send personalized cold email campaigns that actually get responses. 
                No more generic templates.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 card-hover">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Deliver Qualified Leads</h3>
              <p className="text-gray-600">
                We handle all replies, qualify leads, and deliver warm prospects ready for your sales team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Smooth Transition */}
      <div className="flex justify-center py-8">
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-16">
            Simple 3-Step Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Tell Us About Your Ideal Customer</h3>
              <p className="text-gray-600">
                We schedule a 30-minute call to understand your target market, 
                ideal customer profile, and business goals.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">We Build & Launch Your Campaign</h3>
              <p className="text-gray-600">
                We research prospects, write personalized emails, and set up your campaign. 
                You approve everything before we launch.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Get Qualified Leads Delivered</h3>
              <p className="text-gray-600">
                Within 7-10 days, you'll start receiving qualified leads. 
                We handle all follow-ups and deliver warm prospects to your sales team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-16">
            Why Traditional Cold Email Agencies Fail
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Traditional Agencies - Problems */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl text-white">✕</span>
                </div>
                <h3 className="text-2xl font-bold text-black">Traditional Agencies:</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span className="text-gray-600">Generic templates that get ignored</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span className="text-gray-600">No personalization or research</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span className="text-gray-600">Poor deliverability and spam issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span className="text-gray-600">No follow-up or lead qualification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span className="text-gray-600">Waste your time and money</span>
                </li>
              </ul>
            </div>

            {/* Fitscale - Solutions */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl text-white">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-black">Fitscale's Approach:</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <span className="text-black">Hyper-personalized emails that get responses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <span className="text-black">Deep research on every prospect</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <span className="text-black">Premium deliverability with dedicated IPs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <span className="text-black">AI-powered targeting and lead scoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <span className="text-black">Full reply management and qualification</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-16">
            Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 card-hover flex flex-col">
              <h3 className="text-2xl font-bold text-black mb-4">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-black">$1,500</span>
                <span className="text-gray-600">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">10k Pre Qualified Prospects Every Month</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">Custom Campaigns</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">AI Powered Lead Scoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">Personalized Messaging & Copywriting</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">Weekly Performance Reports + Growth Insights</span>
                </li>
              </ul>
              <a href="https://calendly.com/marion_designx/your-saas-startup-blueprint-call" target="_blank" rel="noopener noreferrer" className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition-colors mt-auto inline-block text-center">
                Book a call
              </a>
            </div>

            {/* Growth Card - Featured */}
            <div className="bg-black rounded-xl p-8 card-hover relative flex flex-col">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Growth</h3>
              <p className="text-gray-300 text-sm mb-4">Everything in Starter Plus:</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$2,500</span>
                <span className="text-gray-300">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span className="text-white">20k Pre Qualified Prospects Every Month</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span className="text-white">Advanced A/B Testing</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span className="text-white">Reply management</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span className="text-white">24/7 support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span className="text-white">Weekly reporting</span>
                </li>
              </ul>
              <a href="https://calendly.com/marion_designx/your-saas-startup-blueprint-call" target="_blank" rel="noopener noreferrer" className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mt-auto inline-block text-center">
                Book a call
              </a>
            </div>

            {/* Scale Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 card-hover flex flex-col">
              <h3 className="text-2xl font-bold text-black mb-2">Scale</h3>
              <p className="text-gray-600 text-sm mb-4">Everything in Growth Plus:</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-black">$5,000</span>
                <span className="text-gray-600">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">50k Pre Qualified Prospects Every Month</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">Multi-channel</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">Dedicated manager</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">CRM integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">Custom dashboard</span>
                </li>
              </ul>
              <a href="https://calendly.com/marion_designx/your-saas-startup-blueprint-call" target="_blank" rel="noopener noreferrer" className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition-colors mt-auto inline-block text-center">
                Book a call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-16">
            Common Questions
          </h2>
          
          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(0)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-black">
                How quickly will I start seeing results?
              </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    openFAQ === 0 ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openFAQ === 0 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                Most clients see their first qualified leads within 7-10 days of campaign launch. 
                Full results typically take 2-3 weeks as we optimize based on initial response data.
              </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(1)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-black">
                How do you ensure email deliverability?
              </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    openFAQ === 1 ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openFAQ === 1 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                We use dedicated IP addresses, proper authentication (SPF, DKIM, DMARC), 
                and maintain high sender reputation. We also monitor bounce rates and adjust sending volume accordingly.
              </p>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(2)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-black">
                Who writes the emails?
              </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    openFAQ === 2 ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openFAQ === 2 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                Our team of experienced copywriters creates all email content. 
                We specialize in B2B SaaS outreach and continuously test and optimize our messaging.
              </p>
            </div>
              )}
            </div>

          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="text-2xl font-bold text-white">
                Fitscale
              </span>
              <p className="text-gray-400 mt-2">Cold email lead generation for B2B SaaS</p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
            
            <p className="text-gray-500 text-sm">
              © 2025 Fitscale. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
