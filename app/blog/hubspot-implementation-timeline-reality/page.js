'use client';
import React from 'react';
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HubSpotImplementationArticle = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
          
          <div className="mb-6">
            <span className="text-sm text-cyan-400 font-semibold">Implementation</span>
            <div className="flex items-center space-x-4 text-sm text-gray-400 mt-2">
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>11 min read</span>
              </span>
              <span>January 15, 2025</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The Real Timeline for HubSpot Implementation: What 19 Marketing Teams Actually Experienced
          </h1>
        </div>
      </header>

      <article className="relative z-10 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 mb-8 italic">
              HubSpot says 30-60 days. Marketing ops leaders tell a different story. Not a single team achieved full implementation in under 90 days.
            </p>
            
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 rounded-xl p-6 my-8">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Get the Full Implementation Guide</h3>
              <p className="text-gray-300 mb-4">
                Complete timeline breakdown, hidden costs, and lessons learned from 19 marketing teams who've been through the process.
              </p>
              <Link 
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
              >
                Learn from Real Users ($249)
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default HubSpotImplementationArticle;