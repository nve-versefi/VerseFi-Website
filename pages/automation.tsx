// data.tsx

export const metadata = {
    title: 'VerseFi Partners',
    description: 'Data Management & Analytics Services',
  };
  import Card from '@/components/servicescomponents/automcard';
  import RootLayout from '@/app/layout';
  import DefaultLayout from '@/app/(default)/layout';
  
  
  
  export default function Analytics () {
    return (
      <RootLayout>
        <DefaultLayout>
            <Card/>
        </DefaultLayout>
      </RootLayout>
      
    );
    
  }