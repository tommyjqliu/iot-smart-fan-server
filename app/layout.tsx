import './globals.css';

import Link from 'next/link';
import { AirVent } from 'lucide-react';

export const metadata = {
  title: 'Next.js App Router + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, and Prettier.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body>
        <div className="h-screen w-full relative bg-gradient-to-r from-cyan-500 to-blue-500">
          <header className='absolute p-4 z-3'>
            <Link
              className="flex items-center gap-2 font-semibold text-white"
              href="/"
            >
              <AirVent />
              <span className="">Smart Fan</span>
            </Link>
          </header>
          <div className='flex justify-center h-full overflow-auto'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
