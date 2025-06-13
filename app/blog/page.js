'use client';
import React from 'react';
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const BlogPage = () => {
  const articles = [
    {
      slug: 'gong-vs-chorus-revenue-io-sales-leaders',
      title: 'Gong vs Chorus vs Revenue.io: What 23 Sales Leaders Actually Said',
      excerpt: 'After 23 anonymous calls with revenue leaders, here\'s what they wish they\'d known before buying conversation intelligence platforms.',
      readTime: '12 min read',
      category: 'RevOps',
      date: 'January 15, 2025',
      featured: true
    },
    {
      slug: 'outreach-vs-salesloft-apollo-sdrs',
      title: 'Outreach vs Salesloft vs Apollo: Which SDRs Actually Prefer',
      excerpt: 'We asked 31 SDRs which sales engagement platform they\'d choose with their own money. The answers surprised us.',
      readTime: '10 min read',
      category: 'Sales Tools',
      date: 'January 15, 2025',
      featured: false
    },
    {
      slug: 'hubspot-implementation-timeline-reality',
      title: 'The Real Timeline for HubSpot Implementation: What 19 Marketing Teams Actually Experienced',
      excerpt: 'HubSpot says 30-60 days. Marketing ops leaders tell a different story. Not a single team achieved full implementation in under 90 days.',
      readTime: '11 min read',
      category: 'Implementation',
      date: 'January 15, 2025',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Proofline</span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Real User Insights
            </span>
          </h1>
          <p className="text-xl text-gray-300">Honest feedback from actual software users. No marketing fluff.</p>
        </div>
      </header>

      {/* Articles Grid */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-cyan-400 font-semibold">{article.category}</span>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </span>
                    <span>{article.date}</span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-4 hover:text-cyan-400 transition-colors">
                  <Link href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{article.excerpt}</p>
                
                <Link 
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;