import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Shield, Bird, CheckCircle2, Server, Lock, ArrowRight, MessageSquare, Ticket, ChevronDown } from 'lucide-react';
import { ForumPage } from './pages/Forum/ForumPage';
import { AboutPage } from './pages/About/AboutPage';
import { ReviewsPage } from './pages/About/ReviewsPage';
import { CareersPage } from './pages/About/CareersPage';
import { TicketModal } from './components/Support/TicketModal';
import { useAuth } from './hooks/useAuth';
import { AuthModal } from './components/Auth/AuthModal';
import { TeamMemberEdit } from './pages/Admin/TeamMemberEdit';

function HomePage() {
  const { user } = useAuth();
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const handleTicketClick = () => {
    if (user) {
      setIsTicketModalOpen(true);
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-opensans">
      {/* Hero Section */}
      <header className="bg-gradient-to-b from-secondary to-primary text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <nav className="flex items-center justify-between mb-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative">
                <Shield className="w-8 h-8 text-secondary-blue" />
                <Bird className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <span className="text-xl font-montserrat font-bold">Worcrest Solutions</span>
            </Link>
            <div className="hidden md:flex items-center gap-8 font-montserrat">
              <a href="#services" className="hover:text-secondary-blue transition-colors">Services</a>
              <a href="#solutions" className="hover:text-secondary-blue transition-colors">Solutions</a>
              <Link to="/forum" className="hover:text-secondary-blue transition-colors flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Forum
              </Link>
              <div 
                className="relative group"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <button 
                  className="flex items-center gap-1 hover:text-secondary-blue transition-colors focus:outline-none"
                >
                  About
                  <ChevronDown className={`w-4 h-4 transform transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {/* Add a transparent bridge to prevent gap between button and menu */}
                <div className="absolute top-full left-0 w-full h-2" />
                <div 
                  className={`absolute top-[calc(100%+8px)] left-0 w-48 bg-white rounded-lg shadow-lg py-2 text-secondary transform transition-all duration-200 ${
                    isAboutDropdownOpen 
                      ? 'opacity-100 translate-y-0 visible' 
                      : 'opacity-0 -translate-y-2 invisible'
                  }`}
                >
                  <Link 
                    to="/about" 
                    className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsAboutDropdownOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/reviews" 
                    className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsAboutDropdownOpen(false)}
                  >
                    Reviews
                  </Link>
                  <Link 
                    to="/careers" 
                    className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsAboutDropdownOpen(false)}
                  >
                    Careers
                  </Link>
                </div>
              </div>
              <button 
                onClick={handleTicketClick}
                className="px-4 py-2 bg-secondary-blue rounded-lg hover:bg-blue-700 transition-colors uppercase font-medium flex items-center gap-2"
              >
                <Ticket className="w-5 h-5" />
                Submit Ticket
              </button>
            </div>
          </nav>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 uppercase">
                Secure. Streamline. Succeed.
              </h1>
              <p className="text-lg mb-8">
                Worcrest Solutions provides cutting-edge managed IT services tailored for accounting firms, law firms, medical businesses, and small-to-medium enterprises.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-primary rounded-lg hover:bg-primary-dark transition-colors flex items-center gap-2 uppercase font-montserrat font-medium">
                  Get a Free Consultation <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-3 bg-white text-secondary rounded-lg hover:bg-gray-100 transition-colors uppercase font-montserrat font-medium">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
                alt="Professional IT solutions"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-secondary text-center mb-12 uppercase">
            Enterprise-grade IT for SMBs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Server className="w-12 h-12 text-secondary-blue mb-4" />
              <h3 className="text-xl font-montserrat font-bold text-secondary mb-3">
                Cloud Solutions
              </h3>
              <p className="text-secondary">
                Secure cloud infrastructure optimized for professional service firms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Lock className="w-12 h-12 text-secondary-blue mb-4" />
              <h3 className="text-xl font-montserrat font-bold text-secondary mb-3">
                Cybersecurity
              </h3>
              <p className="text-secondary">
                Advanced protection for sensitive client data and business information.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle2 className="w-12 h-12 text-secondary-blue mb-4" />
              <h3 className="text-xl font-montserrat font-bold text-secondary mb-3">
                Compliance
              </h3>
              <p className="text-secondary">
                Stay compliant with industry regulations and data protection standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-secondary text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12 uppercase">
            Tech Solutions that Empower Professional Firms
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-montserrat font-bold mb-6">
                Why Choose Worcrest Solutions?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary-blue" />
                  <span>Specialized in professional service firm IT support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary-blue" />
                  <span>24/7 proactive monitoring & support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary-blue" />
                  <span>Industry-leading security measures</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary-blue" />
                  <span>Compliance expertise across multiple industries</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800"
                alt="Modern IT solutions"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Shield className="w-8 h-8 text-secondary-blue" />
                <Bird className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <span className="text-xl font-montserrat font-bold">Worcrest Solutions</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2025 Worcrest Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      <TicketModal isOpen={isTicketModalOpen} onClose={() => setIsTicketModalOpen(false)} />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forum/*" element={<ForumPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/admin/team-member/edit" element={<TeamMemberEdit />} />
      </Routes>
    </Router>
  );
}

export default App;