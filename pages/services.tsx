// Services.tsx

export const metadata = {
  title: 'VerseFi Partners',
  description: 'Services Information',
};
import Menu from '@/components/menu';
import RootLayout from '@/app/layout';
import DefaultLayout from '@/app/(default)/layout';


export default function services() {
  return (
    <RootLayout>
      <DefaultLayout>
        <div>
          <Menu/>
        </div>
      </DefaultLayout>
    </RootLayout>
    
  );
  
}
