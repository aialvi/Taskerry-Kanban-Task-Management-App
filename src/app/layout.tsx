import type { Metadata } from 'next';
import { Providers } from '@/components/redux/provider';
import Navbar from './components/Navbar';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const pjs = Plus_Jakarta_Sans({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Taskerry - Task Management App',
  description: 'Taskerry - Task Management App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={pjs.className}>
      <body className='pb-24 h-screen overflow-hidden'>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
