'use client';
import React, { useState, useEffect } from 'react';
import { Search, Users, MessageCircle, Check, ArrowRight, Clock, Shield, Target } from 'lucide-react';

const ProoflineWebsite = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    software: '',
    role: '',
    companySize: '',
    learningGoals: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://hooks.zapier.com/hooks/catch/23354453/uyeseie/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          software: formData.software || searchQuery,
          role: formData.role,
          company_size: formData.companySize,
          learning_goals: formData.learningGoals,
          email: formData.email,
          timestamp: new Date().toISOString(),
          source: 'proofline_website'
        })
      });

      if (response.ok) {
        alert('Thanks! We\'ll match you with a user and get back to you within 24-48 hours.');
        setShowForm(false);
        setFormData({
          software: '',
          role: '',
          companySize: '',
          learningGoals: '',
          email: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSearch = () => {
    setShowForm(true);
  };

  const handleBecomeExpert = () => {
    alert('Thanks for your interest! We\'ll send you our expert application form.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className={`relative z-10 p-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Proofline
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#how-it-works" className="hover:text-cyan-400 transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
            <a href="#blog" className="hover:text-cyan-400 transition-colors">Blog</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative z-10 px-6 py-20 text-center transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Get honest feedback</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              from real users.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            You've seen the demo and read the marketing. Now talk to someone who actually uses the software daily at a company like yours.<br />
            <span className="text-cyan-400 font-semibold">Unbiased insights. Relatable experience. Smart decisions.</span>
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="relative group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What software are you evaluating? (Gong, Apollo, Clari, Outreach...)"
                  className="w-full px-6 py-4 pr-16 text-lg bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-gray-400 transition-all duration-300"
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 group-hover:scale-105"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Form Modal */}
          {showForm && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-slate-800 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <h3 className="text-2xl font-bold mb-6 text-center">Tell us about your evaluation</h3>
                
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">What software are you evaluating?</label>
                    <input 
                      type="text" 
                      value={formData.software || searchQuery}
                      onChange={(e) => handleInputChange('software', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                      placeholder="e.g., Gong, Apollo, Salesforce, Clari"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">What's your role?</label>
                    <select 
                      value={formData.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400"
                      required
                    >
                      <option value="">Select your role...</option>
                      <option value="ceo">CEO/Founder</option>
                      <option value="cto">CTO/VP Engineering</option>
                      <option value="coo">COO/VP Operations</option>
                      <option value="sales">VP Sales/Head of Sales</option>
                      <option value="marketing">VP Marketing/Head of Marketing</option>
                      <option value="revops">RevOps/Sales Ops</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Company size</label>
                    <select 
                      value={formData.companySize}
                      onChange={(e) => handleInputChange('companySize', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400"
                      required
                    >
                      <option value="">Select company size...</option>
                      <option value="startup">Startup (1-50 employees)</option>
                      <option value="small">Small (51-200 employees)</option>
                      <option value="mid">Mid-size (201-1000 employees)</option>
                      <option value="large">Large (1000+ employees)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">What do you want to learn?</label>
                    <textarea 
                      value={formData.learningGoals}
                      onChange={(e) => handleInputChange('learningGoals', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 h-24"
                      placeholder="e.g., Implementation challenges, hidden costs, daily workflow impact, comparison to alternatives..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Your email</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                      placeholder="you@company.com"
                      required
                    />
                  </div>

                  <div className="flex gap-4">
                    <button 
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Get My Interview ($249)'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* CTA Button */}
          <div className="flex justify-center mb-12">
            <button 
              onClick={handleSearch}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-semibold hover:from-cyan-400 hover:to-purple-400 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Get Your User Interview ($249)
            </button>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <Shield className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Anonymous & Safe</h3>
              <p className="text-gray-400 text-sm">Users share honest feedback without fear of vendor retaliation</p>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Perfectly Matched</h3>
              <p className="text-gray-400 text-sm">Talk to users at similar companies with similar use cases</p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-pink-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-gray-400 text-sm">Get your interview scheduled within 24-48 hours</p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-orange-500/20 border border-orange-500/50 rounded-xl px-6 py-3 max-w-2xl mx-auto">
            <p className="text-orange-300 font-semibold">💡 Don't make an expensive mistake that's painful to undo</p>
          </div>
        </div>
      </section>

      {/* Expert CTA - Moved to separate section */}
      <section className="relative z-10 px-6 py-12 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-300 mb-4">Know a tool inside and out? Share your expertise and get paid.</p>
          <button 
            onClick={handleBecomeExpert}
            className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white font-medium hover:bg-white/20 transition-all duration-300"
          >
            Earn $75 Per Interview → 
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 px-6 py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Tell us what you're evaluating",
                description: "Share the software you're considering, your company context, and what you want to learn from real users.",
                gradient: "from-cyan-500 to-blue-500"
              },
              {
                icon: Users,
                title: "We find the perfect match",
                description: "We identify users at similar companies who've implemented and used the software in ways relevant to you.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: MessageCircle,
                title: "Get honest insights",
                description: "30-minute anonymous call where you can ask about implementation, costs, workflow impact, and alternatives.",
                gradient: "from-pink-500 to-cyan-500"
              }
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Single Pricing */}
      <section id="pricing" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            One Simple Price
          </h2>
          <p className="text-xl text-gray-300 mb-12">Smart insurance before you sign that contract.</p>
          
          <div className="bg-white/10 backdrop-blur-lg border border-cyan-400 rounded-2xl p-8 max-w-lg mx-auto">
            <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              $249
            </div>
            <h3 className="text-2xl font-bold mb-4">User Interview</h3>
            <p className="text-gray-300 mb-6">One honest 30-minute conversation with a vetted user</p>
            
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Matched user from similar company & use case</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Anonymous call (they don't know who you are)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Written summary within 2 hours</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Follow-up questions welcome</span>
              </li>
            </ul>
            
            <button 
              onClick={handleSearch}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 text-lg"
            >
              Get My Interview
            </button>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
<section id="blog" className="relative z-10 px-6 py-20 bg-white/5 backdrop-blur-sm">
  <div className="max-w-6xl mx-auto">
    <div className="flex justify-between items-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Real User Insights
      </h2>
      <a href="/blog" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
        <span>View All</span>
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          
        title: "Gong vs Chorus vs Revenue.io: What 23 Sales Leaders Actually Said",
        excerpt: "After 23 anonymous calls with revenue leaders, here's what they wish they'd known before buying conversation intelligence platforms.",
        readTime: "12 min read",
        category: "RevOps",
        link: "/blog/gong-vs-chorus-revenue-io-sales-leaders"
        },
        {
          title: "Outreach vs Salesloft vs Apollo: Which SDRs Actually Prefer", 
          excerpt: "We asked 31 SDRs which sales engagement platform they'd choose with their own money. The answers surprised us.",
          readTime: "10 min read",
          category: "Sales Tools", 
          link: "/blog/outreach-vs-salesloft-apollo-sdrs"
        },
        {
          title: "The Real Timeline for HubSpot Implementation: What 19 Marketing Teams Actually Experienced",
          excerpt: "HubSpot says 30-60 days. Marketing ops leaders tell a different story. Not a single team achieved full implementation in under 90 days.",
          readTime: "11 min read",
          category: "Implementation",
          link: "/blog/hubspot-implementation-timeline-reality"
        }
      ].map((post, index) => (
        <article key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
          <a href={post.link} className="block">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-cyan-400 font-semibold">{post.category}</span>
              <span className="text-sm text-gray-400">{post.readTime}</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">{post.title}</h3>
            <p className="text-gray-300 leading-relaxed">{post.excerpt}</p>
          </a>
        </article>
      ))}
    </div>
  </div>
</section>

      {/* Footer CTA */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Make your next software decision</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              with confidence.
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the real story from someone who's already lived it.
          </p>
          <button 
            onClick={handleSearch}
            className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-semibold hover:from-cyan-400 hover:to-purple-400 transform hover:scale-105 transition-all duration-300 shadow-2xl text-lg"
          >
            Get My User Interview ($249)
          </button>
        </div>
      </section>

      {/* Expert CTA - Bottom of page */}
      <section className="relative z-10 px-6 py-8 bg-slate-800/50 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-3">Software expert? Share your experience and get paid.</p>
          <button 
            onClick={handleBecomeExpert}
            className="px-6 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white font-medium hover:bg-white/20 transition-all duration-300 text-sm"
          >
            Earn $75 Per Interview →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-12 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Proofline
              </div>
              <p className="text-gray-400">Real feedback from real users. Make smart software decisions.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For Experts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Proofline. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProoflineWebsite;