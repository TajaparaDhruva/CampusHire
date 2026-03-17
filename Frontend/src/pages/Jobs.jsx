import React, { useState } from 'react';

const mockJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova Inc.",
    logo: "T",
    location: "Remote",
    type: "Full-time",
    salary: "$60k - $80k",
    description: "We are looking for a skilled Frontend Developer with expertise in React and Tailwind CSS to build cutting-edge web applications."
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataSync Corp",
    logo: "D",
    location: "On-site",
    type: "Full-time",
    salary: "$90k - $120k",
    description: "Join our core team to scale our Node.js and MongoDB infrastructure. Experience with distributed systems preferred."
  },
  {
    id: 3,
    title: "UI/UX Designer Intern",
    company: "Creative Studio",
    logo: "C",
    location: "Hybrid",
    type: "Internship",
    salary: "$30k - $40k",
    description: "Help design the next generation of our product interfaces. Looking for strong visual design skills and Figma expertise."
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "Metrics Cloud",
    logo: "M",
    location: "Remote",
    type: "Part-time",
    salary: "$40k - $50k",
    description: "Part-time data analyst responsible for building automated dashboards and writing complex SQL queries."
  }
];

const Jobs = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F0B1A] pt-24 pb-12 px-4 sm:px-6 lg:px-8 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-10 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">Find Your Next <span className="text-purple-400">Opportunity</span></h1>
          <p className="text-gray-400 text-lg md:text-xl">Explore internships and jobs posted by companies on CampusHire.</p>
        </div>

        {/* Search Bar */}
        <div className="mb-10">
          <div className="relative max-w-4xl mx-auto lg:mx-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="w-full bg-[#1A1625] border border-purple-900 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              placeholder="Search jobs by title, company, or skills"
            />
          </div>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6 flex justify-end">
          <button 
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="flex items-center space-x-2 bg-[#1A1625] border border-purple-900 px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-colors"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <span>Filters</span>
          </button>
        </div>

        {/* Main Content Layout */}
        <div className="lg:grid lg:grid-cols-4 gap-8">
          
          {/* Filters Panel */}
          <div className={`lg:block ${isFiltersOpen ? 'block' : 'hidden'} lg:col-span-1 space-y-6`}>
            <div className="bg-[#1A1625] border border-purple-900 rounded-xl p-6 sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Filters</h3>
                {isFiltersOpen && (
                  <button onClick={() => setIsFiltersOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
                    ✕
                  </button>
                )}
              </div>

              {/* Job Type */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-300 mb-3">Job Type</h4>
                <div className="space-y-2">
                  {['Full Time', 'Part Time', 'Internship'].map((type) => (
                    <label key={type} className="flex items-center space-x-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-5 h-5">
                        <input type="checkbox" className="peer appearance-none w-5 h-5 border border-purple-900 rounded bg-[#0F0B1A] checked:bg-purple-600 checked:border-purple-600 transition-colors cursor-pointer" />
                        <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-400 group-hover:text-white transition-colors">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-300 mb-3">Location</h4>
                <div className="space-y-2">
                  {['Remote', 'On-site', 'Hybrid'].map((loc) => (
                    <label key={loc} className="flex items-center space-x-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-5 h-5">
                        <input type="checkbox" className="peer appearance-none w-5 h-5 border border-purple-900 rounded bg-[#0F0B1A] checked:bg-purple-600 checked:border-purple-600 transition-colors cursor-pointer" />
                        <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-400 group-hover:text-white transition-colors">{loc}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience Level */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-300 mb-3">Experience Level</h4>
                <div className="space-y-2">
                  {['Entry Level', 'Intermediate', 'Advanced'].map((level) => (
                    <label key={level} className="flex items-center space-x-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-5 h-5">
                        <input type="checkbox" className="peer appearance-none w-5 h-5 border border-purple-900 rounded bg-[#0F0B1A] checked:bg-purple-600 checked:border-purple-600 transition-colors cursor-pointer" />
                        <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-400 group-hover:text-white transition-colors">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Salary Range */}
              <div>
                <h4 className="font-semibold text-gray-300 mb-3">Salary Range</h4>
                <input 
                  type="range" 
                  min="0" 
                  max="200" 
                  className="w-full h-2 bg-purple-900 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>$0</span>
                  <span>$200k+</span>
                </div>
              </div>
              
            </div>
          </div>

          {/* Job Listings */}
          <div className="lg:col-span-3 space-y-6">
            {mockJobs.map((job) => (
              <div key={job.id} className="bg-[#1A1625] border border-purple-900 hover:border-purple-600 transition-colors rounded-xl p-6 shadow-lg shadow-black/20 group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  
                  {/* Job Header & Info */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-[#0F0B1A] border border-purple-800 rounded-lg flex items-center justify-center text-xl font-bold text-yellow-400 flex-shrink-0">
                      {job.logo}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{job.title}</h2>
                      <div className="text-lg text-gray-300 mt-1">{job.company}</div>
                      
                      <div className="flex flex-wrap gap-3 mt-3">
                        <span className="flex items-center text-sm text-gray-400 bg-[#0F0B1A] px-3 py-1 rounded-full border border-purple-900/50">
                          <svg className="w-4 h-4 mr-1.5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center text-sm text-gray-400 bg-[#0F0B1A] px-3 py-1 rounded-full border border-purple-900/50">
                          <svg className="w-4 h-4 mr-1.5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {job.type}
                        </span>
                        <span className="flex items-center text-sm text-gray-400 bg-[#0F0B1A] px-3 py-1 rounded-full border border-purple-900/50">
                          <svg className="w-4 h-4 mr-1.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.salary}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex md:flex-col gap-3 ml-18 md:ml-0 md:min-w-[140px]">
                    <button className="flex-1 md:flex-none bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-2.5 rounded-lg transition-colors text-center shadow-lg shadow-yellow-400/20">
                      Apply Now
                    </button>
                    <button className="flex-1 md:flex-none border border-purple-700 hover:bg-purple-900/40 text-white px-4 py-2.5 rounded-lg transition-colors text-center">
                      View Details
                    </button>
                  </div>
                  
                </div>

                <div className="mt-5 ml-0 md:ml-18">
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center items-center mt-12 space-x-2">
              <button className="px-4 py-2 border border-purple-900 rounded-lg text-gray-400 hover:text-white hover:bg-[#1A1625] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-600 text-white font-medium shadow-lg shadow-purple-600/30">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-purple-900 text-gray-400 hover:text-white hover:border-purple-600 hover:bg-[#1A1625] transition-colors">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-purple-900 text-gray-400 hover:text-white hover:border-purple-600 hover:bg-[#1A1625] transition-colors">
                3
              </button>
              <span className="text-gray-500 px-2">...</span>
              <button className="px-4 py-2 border border-purple-900 rounded-lg text-gray-400 hover:text-white hover:bg-[#1A1625] transition-colors">
                Next
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Jobs;
