import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white py-6 px-4 text-center w-full">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Side */}
        <p className="mb-4 md:mb-0">
          © {new Date().getFullYear()} by Preechapong Khanmajan.
        </p>

        {/* Right Side */}
        <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-center space-y-1">
            <span className="font-bold">Call</span>
            <span>+66 95-616-3515</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <span className="font-bold">Write</span>
            <span>peeke0rr@gmail.com</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <span className="font-bold">Follow</span>
            <div className="flex space-x-3">
              <Link href="https://facebook.com">Facebook</Link>
              <Link href="https://linkedin.com">LinkedIn</Link>
              <Link href="https://instagram.com">Instagram</Link>
              <Link href="https://github.com">GitHub</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
