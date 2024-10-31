import React from 'react';
import { Shield, Zap, Share2, Download } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Download className="w-6 h-6 text-purple-500" />,
      title: 'Watermark Free',
      description: 'Download TikTok videos without any watermarks in high quality'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: 'Fast Download',
      description: 'Quick processing and download speeds for your videos'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Safe & Secure',
      description: 'No registration required, completely secure downloads'
    },
    {
      icon: <Share2 className="w-6 h-6 text-purple-500" />,
      title: 'Easy Sharing',
      description: 'Share downloaded videos easily across platforms'
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose TikSave?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}