import type { Metadata } from 'next';
import { Inter, Prompt } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });
const prompt = Prompt({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'The Collection',
  description: 'A collection of all my projects in one place.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={prompt.className}>
        <div className="flex flex-col min-h-screen">
          <div className="flex flex-col md:flex-row flex-1">
            <Navbar />
            <main className="flex flex-col flex-1 items-center justify-center h-auto">
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
