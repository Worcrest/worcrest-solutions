import React from 'react';
import { Star, Quote, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ReviewsPage() {
  const reviews = [
    {
      author: 'David Miller',
      company: 'Miller & Associates Law Firm',
      content: 'Worcrest Solutions transformed our IT infrastructure. Their 24/7 support and security expertise have been invaluable to our firm.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    },
    {
      author: 'Jennifer Chang',
      company: 'ChangMed Healthcare',
      content: 'The team at Worcrest went above and beyond to ensure our systems were HIPAA compliant. Their attention to detail is exceptional.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400',
    },
    {
      author: 'Robert Wilson',
      company: 'Wilson Financial Group',
      content: 'Outstanding service and technical expertise. They have helped us modernize our infrastructure while maintaining the highest security standards.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-secondary to-primary text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Client Success Stories
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover why businesses trust Worcrest Solutions for their IT needs.
          </p>
        </div>
      </div>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.author} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={review.image}
                    alt={review.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-montserrat font-bold text-secondary">
                      {review.author}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Building2 className="w-4 h-4" />
                      <span className="text-sm">{review.company}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="w-8 h-8 text-gray-200 absolute -top-4 -left-2" />
                  <p className="text-gray-600 italic pl-6">{review.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-montserrat font-bold mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-montserrat font-bold mb-2">500+</div>
              <div className="text-gray-300">Active Clients</div>
            </div>
            <div>
              <div className="text-4xl font-montserrat font-bold mb-2">24/7</div>
              <div className="text-gray-300">Support Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-secondary mb-6">
            Join Our Success Story
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the Worcrest difference with our enterprise-grade IT solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            Schedule a Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}