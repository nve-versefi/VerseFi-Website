// Web.tsx

export const metadata = {
    title: 'VerseFi Partners',
    description: 'Web Services',
  };
  import Card from '@/components/servicescomponents/webcard';
  import RootLayout from '@/app/layout';
  import DefaultLayout from '@/app/(default)/layout';
 
  
  
  export default function web() {
    return (
      <RootLayout>
        <DefaultLayout>
            <Card/>
        </DefaultLayout>
      </RootLayout>
      
    );
    
  }
  