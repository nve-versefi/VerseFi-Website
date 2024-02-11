// CarouselCard.tsx
import React from 'react';

interface CarouselCardProps {
  children: React.ReactNode; // To accept any child components
}

const CarouselCard: React.FC<CarouselCardProps> = ({ children }) => {
  return (
    <div className="mx-auto my-8 p-5 border-4 border-blueribbon-500 rounded-2xl shadow-lg max-w-7xl">
    
      <h2 className="text-3xl font-bold text-center text-blueribbon-500 mt-8 mb-2">Our Methodologies</h2>
      <p className="mb-4 mx-16 text-xl text-center text-aztec-700 font-medium">
      At the intersection of innovation and technology, our company delivers cutting-edge software development and consulting services tailored to the modern business landscape. Leveraging a comprehensive tech stack and agile methodologies, we craft bespoke solutions that drive efficiency, security, and growth. Our approach prioritizes collaboration, adaptability, and technical excellence, ensuring that we meet the unique needs of our clients across various domains.

We are committed to embracing the latest technologies and DevOps practices to streamline development processes and enhance project outcomes. Below, we detail the essential technologies and methodologies that form the backbone of our service delivery, highlighting our capability to navigate the complexities of digital transformation and software innovation. 
      </p>
        {children}
    </div>
  );
};

export default CarouselCard;
