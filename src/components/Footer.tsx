import React from 'react';
import { Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Download className="w-6 h-6" />
            <span className="text-xl font-bold">TikSave</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} TikSave. All rights reserved.</p>
          <p className="mt-2 text-gray-400">
            This service is not affiliated with TikTok or ByteDance Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}