export const metadata = {
  title: 'VerseFi Partners',
  description: 'Company Information',
}
import React, { useState } from 'react';
import Team from '@/components/team'
import Vision from '@/components/vision'
import Mission from '@/components/mission'
import Values from '@/components/values'
import Newsletter from '@/components/newsletter'
import DefaultLayout from '@/app/(default)/layout'
import RootLayout from '@/app/layout';

export default function about() {
  const [isBlurred, setIsBlurred] = useState(false);

  return (
    <RootLayout>
      <DefaultLayout>
        <div className={`page-content ${isBlurred ? 'global-blur' : ''}`}>
          <Team onHoverChange={setIsBlurred} />
          <Values />
          <Vision />
          <Mission />
          <Newsletter />
        </div>
      </DefaultLayout>
    </RootLayout>
  );
}