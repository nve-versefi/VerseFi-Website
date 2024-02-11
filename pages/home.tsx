export const metadata = {
    title: 'VerseFi Partners',
    description: 'Page description',
  }
  
  import Hero from '@/components/hero'
  import Features from '@/components/features'
  import Newsletter from '@/components/newsletter'
  import Zigzag from '@/components/zigzag'
  import Testimonials from '@/components/testimonials'
  import RootLayout from '@/app/layout';
    import DefaultLayout from '@/app/(default)/layout';
  
  
  export default function Home() {
    return (
        <RootLayout>
          <DefaultLayout>
            <Hero />
            <Features />
            <Zigzag />
            <Testimonials />
            <Newsletter />
          </DefaultLayout>
        </RootLayout>
      );
  }
  