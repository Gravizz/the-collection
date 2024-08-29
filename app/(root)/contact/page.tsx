import Link from 'next/link';
import React from 'react';

export default function Contact() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">
        Contact Information
      </h1>

      <div className="space-y-8">
        {/* Contact Details */}
        <div className="border border-blue-300 rounded-lg p-8 shadow-lg bg-white">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            Get in Touch
          </h2>
          <p className="font-bold text-blue-600">Call</p>
          <p className="text-gray-700">+66 95-616-3515</p>
          <hr className="my-4 border-blue-200" />
          <p className="font-bold text-blue-600">Email</p>
          <p className="text-gray-700">peeke0rr@gmail.com</p>
        </div>

        {/* Social Media Links */}
        <div className="border border-blue-300 rounded-lg p-8 shadow-lg bg-white">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            Follow Me
          </h2>
          <div className="flex flex-col space-y-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold hover:underline hover:text-blue-600"
            >
              Facebook
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold hover:underline hover:text-blue-600"
            >
              LinkedIn
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold hover:underline hover:text-blue-600"
            >
              Instagram
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold hover:underline hover:text-blue-600"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
