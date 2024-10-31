import React from 'react';
import { Download, TrendingUp, Shield, Share2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Download className="w-8 h-8" />
            <h1 className="text-2xl font-bold">TikSave</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="hover:text-purple-200 transition">Features</a>
            <a href="#how-to" className="hover:text-purple-200 transition">How to Use</a>
            <a href="#faq" className="hover:text-purple-200 transition">FAQ</a>
          </nav>
        </div>
      </div>
    </header>
  );
}