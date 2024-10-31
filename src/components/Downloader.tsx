import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';

export default function Downloader() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert('This is a demo. In a real application, this would connect to a backend API to process the download.');
    }, 2000);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          Download TikTok Videos Without Watermark
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Fast, free, and easy to use. No registration required!
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Paste TikTok video URL here"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading || !url}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold
                       hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed
                       flex items-center justify-center gap-2"
            >
              {loading ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</>
              ) : (
                <><Download className="w-5 h-5" /> Download</>
              )}
            </button>
          </div>
        </form>

        <div className="mt-8 p-4 bg-purple-50 rounded-lg">
          <p className="text-sm text-purple-700">
            Simply paste the URL of any TikTok video and click Download. Your video will be ready in seconds!
          </p>
        </div>
      </div>
    </section>
  );
}