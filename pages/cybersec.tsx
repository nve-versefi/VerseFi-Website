// cybersec.tsx

export const metadata = {
    title: 'VerseFi Partners',
    description: 'Cybersecurity Services',
  };
  import Card from '@/components/servicescomponents/cybcard';
  import RootLayout from '@/app/layout';
  import DefaultLayout from '@/app/(default)/layout';
 
  
  
  export default function cybersec() {
    return (
      <RootLayout>
        <DefaultLayout>
            <Card/>
        </DefaultLayout>
      </RootLayout>
      
    );
    
  }
  