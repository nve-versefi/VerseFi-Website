import './css/style.css';
import { Inter, Architects_Daughter } from 'next/font/google';
import Head from 'next/head';
import Header from '@/components/ui/header';
import Banner from '@/components/banner';
import CookieBanner from '@/components/cookieconsent';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        {/* Metadata and other head elements go here */}
      </Head>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <div id="main-content">
          {children}
        </div>
        <CookieBanner />
        <Banner />
      </div>
    </>
  );
}