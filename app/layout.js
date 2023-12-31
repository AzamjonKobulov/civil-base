import Navbar from './components/layouts/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="lg:ml-64">
          <Navbar />
          <div className="p-4 lg:p-8 mt-14 lg:mt-16">{children}</div>
        </main>
      </body>
    </html>
  );
}
