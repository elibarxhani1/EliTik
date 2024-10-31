import React from 'react';
import { ClipboardCopy, MousePointer, Download } from 'lucide-react';

export default function HowTo() {
  const steps = [
    {
      icon: <ClipboardCopy className="w-6 h-6 text-purple-500" />,
      title: 'Copy Link',
      description: 'Copy the video link from TikTok app or website'
    },
    {
      icon: <MousePointer className="w-6 h-6 text-purple-500" />,
      title: 'Paste URL',
      description: 'Paste the link in the input field above'
    },
    {
      icon: <Download className="w-6 h-6 text-purple-500" />,
      title: 'Download',
      description: 'Click download and save your video'
    }
  ];

  return (
    <section id="how-to" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How to Download</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}