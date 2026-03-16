import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Code, Database, Layout, TrendingUp, ShieldCheck, UserPlus, Search, CheckCircle, ArrowRight, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0F0B1A] text-white font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column (Text) */}
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 border border-yellow-400/50 bg-yellow-400/10 text-yellow-400 rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                Connecting Talent with Opportunity
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                Build Your Future, <br />
                Find the <span className="text-yellow-400 inline-block relative">
                  Right Career
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 15 100 5 L 100 10 L 0 10 Z" fill="currentColor"/>
                  </svg>
                </span>
              </h1>
              
              <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
                CampusHire bridges the gap between top university talent and leading companies. Discover internships, entry-level roles, and launch your career today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/jobs"
                  className="bg-yellow-400 text-black font-bold px-8 py-3.5 rounded-lg hover:bg-yellow-300 transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] flex items-center justify-center gap-2 group"
                >
                  <Search size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                  Find Jobs
                </Link>
                <Link
                  to="/signup"
                  className="bg-purple-600 text-white font-bold px-8 py-3.5 rounded-lg hover:bg-purple-500 transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] flex items-center justify-center gap-2 group"
                >
                  <Briefcase size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                  Hire Talent
                </Link>
              </div>
            </div>

            {/* Right Column (Illustration Placeholder) */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-yellow-400/10 rounded-2xl blur-2xl transform rotate-3"></div>
              <div className="relative bg-[#1A1625] border border-purple-900 rounded-2xl p-6 shadow-2xl overflow-hidden aspect-[4/3] flex items-center justify-center group">
                {/* Decorative floating elements */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-purple-500/20 rounded-xl rotate-12 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-500">
                  <Code size={30} className="text-purple-400" />
                </div>
                <div className="absolute bottom-12 left-8 w-24 h-24 bg-yellow-500/10 rounded-full backdrop-blur-md border border-yellow-500/20 flex items-center justify-center group-hover:translate-y-2 transition-transform duration-500 delay-100">
                  <TrendingUp size={35} className="text-yellow-400" />
                </div>
                
                {/* Main Graphic */}
                <div className="text-center z-10 w-full max-w-sm">
                   <div className="bg-[#0F0B1A] border border-gray-800 p-4 rounded-xl shadow-lg mb-4 transform -rotate-2 group-hover:rotate-0 transition-transform duration-300">
                     <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <Layout size={20} className="text-blue-400" />
                        </div>
                        <div className="text-left flex-1">
                          <h4 className="font-bold text-white text-sm">Frontend Developer</h4>
                          <p className="text-gray-400 text-xs">TechCorp Inc. • Remote</p>
                        </div>
                     </div>
                     <div className="flex gap-2">
                       <span className="px-2 py-1 bg-gray-800 text-gray-300 text-[10px] rounded">React</span>
                       <span className="px-2 py-1 bg-gray-800 text-gray-300 text-[10px] rounded">Tailwind</span>
                     </div>
                   </div>

                   <div className="bg-[#0F0B1A] border border-purple-900 shadow-[0_0_20px_rgba(147,51,234,0.15)] p-4 rounded-xl translate-x-6 transform rotate-2 group-hover:rotate-0 transition-transform duration-300 delay-75">
                     <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                          <Database size={20} className="text-green-400" />
                        </div>
                        <div className="text-left flex-1">
                          <h4 className="font-bold text-white text-sm">Data Scientist</h4>
                          <p className="text-gray-400 text-xs">NextGen Labs • New York</p>
                        </div>
                     </div>
                     <div className="flex gap-2">
                       <span className="px-2 py-1 bg-gray-800 text-gray-300 text-[10px] rounded">Python</span>
                       <span className="px-2 py-1 bg-gray-800 text-gray-300 text-[10px] rounded">SQL</span>
                     </div>
                   </div>
                </div>
                {/* Subtle Grid overlay inside image box */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b11_1px,transparent_1px),linear-gradient(to_bottom,#1e293b11_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none -z-10"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Featured Job Categories */}
      <section className="py-20 bg-[#1A1625] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Popular Job Categories</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Explore thousands of job opportunities across top industries tailored for fresh graduates and early professionals.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Software Development", icon: <Code size={28} />, jobs: "1,240+", color: "text-blue-400", bg: "bg-blue-400/10" },
              { title: "Data Science", icon: <Database size={28} />, jobs: "850+", color: "text-green-400", bg: "bg-green-400/10" },
              { title: "UI/UX Design", icon: <Layout size={28} />, jobs: "620+", color: "text-pink-400", bg: "bg-pink-400/10" },
              { title: "Marketing", icon: <TrendingUp size={28} />, jobs: "930+", color: "text-yellow-400", bg: "bg-yellow-400/10" },
              { title: "Business Analytics", icon: <Briefcase size={28} />, jobs: "740+", color: "text-purple-400", bg: "bg-purple-400/10" },
              { title: "Cyber Security", icon: <ShieldCheck size={28} />, jobs: "410+", color: "text-red-400", bg: "bg-red-400/10" }
            ].map((cat, idx) => (
              <div key={idx} className="bg-[#0F0B1A] border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 cursor-pointer group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(147,51,234,0.1)]">
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${cat.bg} ${cat.color} group-hover:scale-110 transition-transform duration-300`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">{cat.title}</h3>
                    <p className="text-gray-400 text-sm">{cat.jobs} Open Positions</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/jobs" className="inline-flex items-center gap-2 text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
              Explore All Categories <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. How CampusHire Works */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How CampusHire Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Your journey to the perfect job is just three simple steps away.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-px bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900 border-dashed border-t border-purple-800 -z-10"></div>
            
            {[
              { step: "01", title: "Create Your Profile", desc: "Sign up and build your interactive resume highlighting your skills and education.", icon: <UserPlus size={32} /> },
              { step: "02", title: "Explore Jobs", desc: "Browse thousands of verified internships and entry-level jobs tailored to you.", icon: <Search size={32} /> },
              { step: "03", title: "Apply & Track", desc: "Apply with one click and track your applications directly from your dashboard.", icon: <CheckCircle size={32} /> }
            ].map((item, idx) => (
              <div key={idx} className="relative text-center">
                <div className="w-24 h-24 mx-auto bg-[#1A1625] border-2 border-purple-600 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(147,51,234,0.2)] relative top-0 hover:-translate-y-2 transition-transform duration-300 cursor-default">
                  <div className="text-yellow-400">{item.icon}</div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center text-sm shadow-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed max-w-sm mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Top Companies Section */}
      <section className="py-16 bg-[#1A1625] border-y border-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-10">Trusted by leading companies worldwide</p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder Logos */}
            <h2 className="text-2xl font-black text-white px-6 py-3 border-2 border-dashed border-gray-600 rounded-lg">TechCorp</h2>
            <h2 className="text-2xl font-black text-white px-6 py-3 border-2 border-dashed border-gray-600 rounded-lg">NextGen Labs</h2>
            <h2 className="text-2xl font-black text-white px-6 py-3 border-2 border-dashed border-gray-600 rounded-lg">Digital Solutions</h2>
            <h2 className="text-2xl font-black text-white px-6 py-3 border-2 border-dashed border-gray-600 rounded-lg">CloudNet</h2>
          </div>
        </div>
      </section>

      {/* 5. Platform Statistics */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "10K+", label: "Jobs Posted", icon: <Briefcase size={24} /> },
              { value: "5K+", label: "Students Registered", icon: <UserPlus size={24} /> },
              { value: "500+", label: "Companies Hiring", icon: <ShieldCheck size={24} /> },
              { value: "95%", label: "Hiring Success Rate", icon: <TrendingUp size={24} /> }
            ].map((stat, idx) => (
              <div key={idx} className="bg-[#1A1625] border border-gray-800 p-8 rounded-2xl text-center hover:border-purple-600 transition-colors duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 rounded-full blur-[40px] group-hover:bg-purple-600/20 transition-all"></div>
                <div className="w-12 h-12 bg-purple-900/40 text-purple-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-black text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call To Action Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-900/60 to-[#1A1625] border border-purple-700/50 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-[0_0_50px_rgba(147,51,234,0.2)]">
          {/* Decorative glowing orb inside CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-yellow-400/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Start Your Career Journey <br className="hidden md:block" /> with CampusHire
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Whether you're a student looking for your big break or a company searching for the next generation of talent, CampusHire is your platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Create Account <ArrowRight size={20} />
            </Link>
            <Link
              to="/jobs"
              className="bg-black/40 backdrop-blur-md border border-gray-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              Browse Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-[#15111E] pt-20 pb-10 border-t border-purple-900/60 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            
            <div className="lg:col-span-2">
              <Link to="/" className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2 mb-6">
                <span className="bg-yellow-400 text-black px-2 py-0.5 rounded-md text-xl">C</span>
                Campus<span className="text-gray-400">Hire</span>
              </Link>
              <p className="text-gray-400 mb-8 max-w-sm">
                Empowering the next generation of professionals by connecting university talent with world-class companies and startups.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-all"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-all"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-all"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-all"><Instagram size={18} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Platform</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">About Us</Link></li>
                <li><Link to="/how-it-works" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">How it Works</Link></li>
                <li><Link to="/pricing" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Students</h4>
              <ul className="space-y-3">
                <li><Link to="/jobs" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Browse Jobs</Link></li>
                <li><Link to="/companies" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Top Companies</Link></li>
                <li><Link to="/resume" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Resume Builder</Link></li>
                <li><Link to="/resources" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Career Advice</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Companies</h4>
              <ul className="space-y-3">
                <li><Link to="/post-job" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Post a Job</Link></li>
                <li><Link to="/search-talent" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Search Resumes</Link></li>
                <li><Link to="/pricing" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Hiring Plans</Link></li>
                <li><Link to="/support" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Employer Support</Link></li>
              </ul>
            </div>
            
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} CampusHire. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
};

export default Home;
