import React, { useState } from 'react';

const PricingTable = () => {
  const [expandedSections, setExpandedSections] = useState({
    coreFeatures: true,
    videoPlayer: false,
    videoMaker: false,
    vimeoAI: false,
    virtualEvents: false,
    videoManagement: false,
    analytics: false,
    marketing: false,
    privacySecurity: false,
    prioritySupport: false,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Updated plans data to match image
  const plans = [
    { 
      name: 'Starter', 
      price: '$1,200', 
      period: 'per month', 
      billing: 'billed monthly',
      buttonText: 'Get Starter',
      buttonColor: 'bg-[#17d5ff] hover:bg-blue-700',
      badge: '',
      bgColor: 'bg-white'
    },
    { 
      name: 'Standard', 
      price: '$2,500', 
      period: 'per month', 
      billing: 'billed monthly',
      buttonText: 'Get Standard',
      buttonColor: 'bg-[#17d5ff] hover:bg-green-700',
      badge: '',
      bgColor: 'bg-white'
    },
    { 
      name: 'Advanced', 
      price: '$7,523', 
      period: 'per month', 
      billing: 'billed monthly',
      buttonText: 'Get Advanced',
      buttonColor: 'bg-[#17d5ff] hover:bg-purple-700',
      badge: '',
      bgColor: 'bg-white'
    },
    { 
      name: 'Enterprise', 
      price: 'Talk to our team', 
      period: 'for pricing', 
      billing: '',
      buttonText: 'Contact Sales',
      buttonColor: 'bg-gray-800 hover:bg-gray-900',
      textColor: 'text-white',
      badge: '',
      bgColor: 'bg-white'
    },
  ];

  // Core features table data - ROWS (not columns)
  const coreFeatures = [
    { 
      feature: 'Users', 
      starter: '0', 
      standard: '1', 
      advanced: '5', 
      enterprise: '10',
      custom: 'Custom'
    },
    { 
      feature: 'Storage', 
      starter: '0', 
      standard: '2TB', 
      advanced: '4TB', 
      enterprise: '7TB',
      custom: 'Custom'
    },
    { 
      feature: 'Screen recording', 
      starter: '0', 
      standard: 'Unlimited', 
      advanced: 'Unlimited', 
      enterprise: 'Unlimited',
      custom: 'Unlimited'
    },
    { 
      feature: 'Virtual events & webinars', 
      starter: '0', 
      standard: '✅', 
      advanced: '✅', 
      enterprise: 'Unlimited',
      custom: 'Unlimited'
    },
    { 
      feature: 'Bandwidth', 
      starter: '0', 
      standard: '2TB bandwidth / month', 
      advanced: '2TB bandwidth / month', 
      enterprise: '2TB bandwidth / month',
      custom: 'Custom'
    },
  ];

  // Video player features
  const videoPlayerFeatures = [
    { feature: 'No task before, with or on your video', starter: '0', standard: '✓', advanced: '✓', enterprise: '✓', custom: '✓' },
    { feature: '#4.1 MPA support & Display Videos', starter: '0', standard: '✓', advanced: '✓', enterprise: '✓', custom: '✓' },
    { feature: 'Embed-related expenses', starter: '0', standard: '✓', advanced: '✓', enterprise: '✓', custom: '✓' },
    { feature: 'Payloads based service', starter: '0', standard: '✓', advanced: '✓', enterprise: '✓', custom: '✓' },
    { feature: 'Upcost or store total time/time', starter: '0', standard: '✓', advanced: '✓', enterprise: '✓', custom: '✓' },
    { feature: 'Automated Closed Capacitance', starter: '0', standard: '✓', advanced: '✓', enterprise: '✓', custom: '✓' },
    { feature: 'Through setting', starter: '0', standard: '✓', advanced: '✓', enterprise: '✓', custom: '✓' },
    { feature: 'Power authentication', starter: '0', standard: '✓', advanced: '✓', enterprise: '✓', custom: '✓' },
    { feature: 'Diagram', starter: '0', standard: '✓', advanced: '✓', enterprise: '✓', custom: '✓' },
    { feature: 'Power scanning', starter: '0', standard: 'X', advanced: '✓', enterprise: '✓', custom: '✓' },
    { feature: '% of party pages support', starter: '0', standard: 'X', advanced: '✓', enterprise: '✓', custom: '✓' },
    { feature: 'Interactive video', starter: '0', standard: 'X', advanced: 'X', enterprise: 'X', custom: '✓' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header - Left aligned as per image */}
        <h1 className="text-3xl font-bold text-left text-gray-900 mb-8">
          Compare plans
        </h1>

        {/* Pricing Cards - Horizontal layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 sm:ml-70 bg-[#fafcfd]">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`${plan.bgColor} rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col`}
            >
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-2xl font-bold text-gray-900 mb-1">{plan.price}</div>
                <p className="text-gray-600 text-sm">{plan.period}</p>
                {plan.billing && <p className="text-gray-500 text-xs mt-1">{plan.billing}</p>}
              </div>
              
              <div className="mt-auto">
                <button className={`w-full py-3 ${plan.buttonColor} text-black font-semibold rounded-lg transition-colors duration-300 ${plan.textColor} `}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Tables */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Core Features Section */}
          <div className="border-b border-gray-200">
            <button
                onClick={() => toggleSection('coreFeatures')}
                className="w-full flex items-center p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                {/* Toggle icon - Right when closed, Down when open */}
                <svg 
                    className={`w-5 h-5 text-gray-500 mr-4 transform transition-transform duration-300 ${expandedSections.coreFeatures ? 'rotate-90' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <h2 className="text-xl font-bold text-gray-900">Core features</h2>
            </button>
            
            {expandedSections.coreFeatures && (
              <div className="px-6 pb-6 overflow-x-auto">
                {/* Proper table with rows under each column */}
                <table className="w-full border-collapse min-w-full">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-4 px-4 font-semibold text-gray-700 w-1/5"></th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-700 w-1/5">Starter</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-700 w-1/5">Standard</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-700 w-1/5">Advanced</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-700 w-1/5">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coreFeatures.map((row, index) => (
                      <tr 
                        key={index} 
                        className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                      >
                        {/* Feature name cell */}
                        <td className="py-4 px-4 text-gray-800 font-medium">
                          {row.feature}
                        </td>
                        
                        {/* Starter column cell */}
                        <td className="py-4 px-4 text-center">
                          <div className="flex justify-center">
                            <span className={`px-3 py-1 rounded ${row.starter === '0' ? 'bg-gray-100 text-gray-800' : 'bg-blue-50 text-blue-700'}`}>
                              {row.starter}
                            </span>
                          </div>
                        </td>
                        
                        {/* Standard column cell */}
                        <td className="py-4 px-4 text-center">
                          <div className="flex justify-center">
                            <span className={`px-3 py-1 rounded ${row.standard === '0' ? 'bg-gray-100 text-gray-800' : row.standard === '✅' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'}`}>
                              {row.standard}
                            </span>
                          </div>
                        </td>
                        
                        {/* Advanced column cell */}
                        <td className="py-4 px-4 text-center">
                          <div className="flex justify-center">
                            <span className={`px-3 py-1 rounded ${row.advanced === '0' ? 'bg-gray-100 text-gray-800' : row.advanced === '✅' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'}`}>
                              {row.advanced}
                            </span>
                          </div>
                        </td>
                        
                        {/* Enterprise column cell */}
                        <td className="py-4 px-4 text-center">
                          <div className="flex justify-center">
                            <span className={`px-3 py-1 rounded ${row.enterprise === 'Custom' ? 'bg-purple-50 text-purple-700' : row.enterprise === '0' ? 'bg-gray-100 text-gray-800' : row.enterprise === 'Unlimited' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'}`}>
                              {row.enterprise}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Video Player Section */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection('videoPlayer')}
              className="w-full flex items-center p-6 text-left hover:bg-gray-50 transition-colors duration-200"
            >
              <svg 
                className={`w-5 h-5 text-gray-500 mr-4 transform transition-transform duration-300 ${expandedSections.videoPlayer ? 'rotate-90' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round"  strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <h2 className="text-xl font-bold text-gray-900">Video player</h2>
            </button>
            
            {expandedSections.videoPlayer && (
              <div className="px-6 pb-6 overflow-x-auto">
                <table className="w-full border-collapse min-w-full">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-4 px-4 font-semibold text-gray-700 w-1/5"></th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-700 w-1/5">Starter</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-700 w-1/5">Standard</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-700 w-1/5">Advanced</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-700 w-1/5">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {videoPlayerFeatures.map((row, index) => (
                      <tr 
                        key={index} 
                        className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                      >
                        <td className="py-4 px-4 text-gray-800 font-medium">{row.feature}</td>
                        <td className="py-4 px-4 text-center">
                          <div className="flex justify-center">
                            <span className={`px-3 py-1 rounded ${row.starter === '0' ? 'bg-gray-100 text-gray-800' : row.starter === '✓' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-800'}`}>
                              {row.starter}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="flex justify-center">
                            <span className={`px-3 py-1 rounded ${row.standard === '✓' ? 'bg-green-50 text-green-700' : row.standard === 'X' ? 'bg-red-50 text-red-700' : 'bg-gray-100 text-gray-800'}`}>
                              {row.standard}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="flex justify-center">
                            <span className={`px-3 py-1 rounded ${row.advanced === '✓' ? 'bg-green-50 text-green-700' : row.advanced === 'X' ? 'bg-red-50 text-red-700' : 'bg-gray-100 text-gray-800'}`}>
                              {row.advanced}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="flex justify-center">
                            <span className={`px-3 py-1 rounded ${row.enterprise === '✓' ? 'bg-green-50 text-green-700' : row.enterprise === 'X' ? 'bg-red-50 text-red-700' : 'bg-gray-100 text-gray-800'}`}>
                              {row.enterprise}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Other Sections (Collapsed by default) */}
          {[
            { id: 'videoMaker', title: 'Video maker and editing tools' },
            { id: 'vimeoAI', title: 'Vimeo AI' },
            { id: 'virtualEvents', title: 'Virtual events and webinars' },
            { id: 'videoManagement', title: 'Video management and collaboration' },
            { id: 'analytics', title: 'Analytics' },
            { id: 'marketing', title: 'Marketing and distribution' },
            { id: 'privacySecurity', title: 'Privacy, security, and admin controls' },
            { id: 'prioritySupport', title: 'Priority support' },
          ].map(section => (
            <div key={section.id} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <svg 
                  className={`w-5 h-5 text-gray-500 mr-4 transform transition-transform duration-300 ${expandedSections[section.id] ? 'rotate-90' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
              </button>
              
              {expandedSections[section.id] && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 text-center py-8">
                    Feature details for {section.title} will be displayed here when expanded.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;