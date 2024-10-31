import React from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: 'Is it free to use?',
      answer: 'Yes, our service is completely free to use with no hidden charges.'
    },
    {
      question: 'Is it safe to download TikTok videos?',
      answer: 'Yes, our service is secure and doesn\'t store any personal information.'
    },
    {
      question: 'What is the maximum video length I can download?',
      answer: 'You can download videos of any length that are publicly available on TikTok.'
    },
    {
      question: 'Why should I remove the watermark?',
      answer: 'Removing the watermark gives your video a cleaner look and makes it more versatile for other uses.'
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}