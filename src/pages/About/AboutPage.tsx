import React from 'react';
import { Shield, Bird, CheckCircle2, Award, Globe, ArrowRight, Medal, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutPage() {
  const teamMembers = [
    {
      name: "Michael Worcester",
      title: "Co-Founder & CEO",
      image: "/src/pages/Admin/Michael2.jpeg",
      description: `Michael Worcester's passion for technology began at the age of eight when his father brought home a computer to play Civilization. As a U.S. Army veteran with multiple tours in Iraq, he brings a mission-driven mindset to everything we do. With extensive experience in deploying network infrastructure in challenging environments and serving as a key IT strategist, Michael leads Worcrest Solutions with a commitment to clear communication and client empowerment.`,
      certifications: [
        "Cisco Certified Network Associate (CCNA)",
        "Red Hat Certified System Administrator (RHCSA)",
        "UniFi Wireless Admin (UWA)",
        "UniFi Foundational Security Professional (UFSP)"
      ],
      fullBio: `Michael's journey in IT began early, hosting LAN parties through LANParty.com and leading his gaming group, Wormick Gaming. At just 17, he secured his first Systems Administrator position at Charles D. Grass CPA & Associates, where he led a major IT infrastructure overhaul.

After serving in the U.S. Army as a 31B Military Police Officer and completing two tours in Iraq, Michael pursued higher education, earning a degree in Computer Network Information Systems and Casino Management. His career includes significant achievements in deploying network infrastructure in remote marine environments and serving as a key IT strategist for major companies.

Beyond his professional achievements, Michael is a devoted husband and father of four, passionate about mentoring future IT professionals and supporting local veteran communities.`
    },
    {
      name: "Michael Johnson",
      title: "Co-Founder & CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      description: "20+ years of enterprise IT experience. Former Security Director at Fortune 500 companies.",
      certifications: ["CISM", "Azure Solutions Expert", "ITIL Master"],
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-secondary to-primary text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center items-center gap-3 mb-6">
              <div className="relative">
                <Shield className="w-12 h-12 text-secondary-blue" />
                <Bird className="w-6 h-6 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              About Worcrest Solutions
            </h1>
            <p className="text-lg mb-8">
              Empowering businesses with next-level managed IT services, cybersecurity protection, and compliance solutions
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              At <strong>Worcrest Solutions</strong>, we were founded on the belief that IT support should be more than just fixing problems—it should empower businesses to thrive. Our journey began when two dedicated IT professionals, frustrated by the limitations of traditional service models, decided to build something better. We set out to create an <strong>IT and cybersecurity company that prioritizes real solutions, clear communication (no "geek speak"), and education</strong> to help businesses make informed technology decisions.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              One of our co-founders, a <strong>United States Army combat veteran with multiple tours in Iraq</strong>, brings a mission-driven mindset to everything we do—<strong>discipline, integrity, and an unwavering commitment to excellence</strong>. With a combined 30+ years of IT and cybersecurity experience, we are passionate about going <strong>above and beyond</strong> to provide <strong>next-level managed IT services, cybersecurity protection, and compliance solutions</strong> to businesses of all sizes.
            </p>

            <p className="text-lg text-gray-600 mb-12">
              Worcrest Solutions is proudly <strong>joint-based in Idaho and Colorado</strong>, serving clients locally and across the country. We believe in <strong>giving back to our communities</strong>, hosting events to support <strong>local veterans and small businesses</strong>, and fostering opportunities for the next generation of IT professionals.
            </p>

            <h2 className="text-3xl font-montserrat font-bold text-secondary mb-8">
              Milestones & Achievements
            </h2>

            <p className="text-lg text-gray-600 mb-12">
              Though founded in 2025, <strong>Worcrest Solutions is built on decades of expertise and a relentless drive for innovation</strong>. From deploying cutting-edge IT solutions to ensuring businesses stay protected from evolving cyber threats, we're committed to helping our clients succeed.
            </p>

            <h3 className="text-2xl font-montserrat font-bold text-secondary mb-6">
              Why Businesses Trust Worcrest Solutions:
            </h3>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary-blue flex-shrink-0" />
                  <span className="text-gray-700">Veteran-Led, Mission-Driven IT & Cybersecurity Provider</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary-blue flex-shrink-0" />
                  <span className="text-gray-700">No Geek Speak—We Teach & Empower Clients</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary-blue flex-shrink-0" />
                  <span className="text-gray-700">Proactive IT Solutions with Industry-Leading Security</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary-blue flex-shrink-0" />
                  <span className="text-gray-700">Proudly Supporting Local Communities & Veterans</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary-blue flex-shrink-0" />
                  <span className="text-gray-700">Focused on Compliance & Risk Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-secondary text-center mb-12">
            Meet Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-slate-50 rounded-lg shadow-lg overflow-hidden">
                <div className="relative pt-[100%]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-contain bg-gray-100"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-montserrat font-bold text-secondary mb-2">
                    {member.name}
                  </h3>
                  <div className="flex items-center gap-2 text-secondary-blue mb-4">
                    <Briefcase className="w-5 h-5" />
                    <span className="font-semibold">{member.title}</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {member.description}
                  </p>
                  {member.fullBio && (
                    <div className="mb-4">
                      <details className="text-gray-600">
                        <summary className="cursor-pointer text-secondary-blue hover:text-secondary transition-colors">
                          Read Full Bio
                        </summary>
                        <div className="mt-4 space-y-4">
                          {member.fullBio.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          ))}
                        </div>
                      </details>
                    </div>
                  )}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Medal className="w-5 h-5 text-secondary-blue" />
                      <span className="font-medium">Certifications:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="px-3 py-1 bg-secondary-blue bg-opacity-10 text-secondary-blue rounded-full text-sm"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-montserrat font-bold mb-6">
            Want to learn more?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's talk about how we can elevate your IT experience. 🚀
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-lg font-montserrat"
          >
            Schedule a Consultation <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}