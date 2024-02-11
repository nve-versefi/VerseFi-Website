// data.tsx

export const metadata = {
    title: 'VerseFi Partners',
    description: 'Blockchain Services',
  };
  import Card from '@/components/servicescomponents/blockcard';
  import RootLayout from '@/app/layout';
  import DefaultLayout from '@/app/(default)/layout';
  
  
  
  export default function Blockchain () {
    return (
      <RootLayout>
        <DefaultLayout>
            <Card/>
        </DefaultLayout>
      </RootLayout>
      
    );
    
  }