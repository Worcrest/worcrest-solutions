import React from 'react';
import { Briefcase, CheckCircle2, GraduationCap, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CareersPage() {
  const openings = [
    {
      title: 'Senior Cloud Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Security Analyst',
      department: 'Security',
      location: 'Boston, MA',
      type: 'Full-time',
    },
    {
      title: 'Technical Support Specialist',
      department: 'Support',
      location: 'Remote',
      type: 'Full-time',
    },
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-secondary-blue" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, wellness programs, and mental health support',
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-secondary-blue" />,
      title: 'Learning & Development',
      description: 'Professional certifications, training budgets, and career growth opportunities',
    },
    {
      icon: <Briefcase className="w-8 h-8 text-secondary-blue" />,
      title: 'Work-Life Balance',
      description: 'Flexible work hours, remote options, and generous PTO policy',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-secondary to-primary text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Build Your Career at Worcrest
            </h1>
            <p className="text-lg mb-8">
              Join our team of passionate professionals dedicated to transforming businesses through technology.
            </p>
            <a
              href="#openings"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Open Positions <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Culture Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-secondary mb-6">
                Our Culture
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Worcrest Solutions, we foster an environment of innovation, collaboration, and continuous learning. Our diverse team brings together the best talent from across the globe to solve complex challenges and deliver exceptional results.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary-blue" />
                  <span className="text-gray-600">Innovation-driven environment</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary-blue" />
                  <span className="text-gray-600">Inclusive and diverse workplace</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary-blue" />
                  <span className="text-gray-600">Focus on work-life balance</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12">
            Benefits & Perks
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-secondary text-center mb-12">
            Open Positions
          </h2>
          <div className="space-y-6">
            {openings.map((job) => (
              <div
                key={job.title}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-montserrat font-bold text-secondary mb-2">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-600">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Link
                    to={`/careers/${job.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-4 py-2 bg-secondary-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}