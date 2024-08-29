import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full md:w-64 bg-blue-700 text-white p-5">
      <div className="h-full pt-10 flex flex-col items-center space-y-10">
        <Link href="/" passHref>
          About me
        </Link>

        <Link href="/resume" passHref>
          Resume
        </Link>

        <Link href="/projects" passHref>
          Project
        </Link>

        <Link href="/contact" passHref>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
