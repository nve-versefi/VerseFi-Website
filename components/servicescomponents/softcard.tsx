import Image from 'next/image';
import React, { useEffect } from 'react';
import serviceData from '../datafiles/softdata';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Make sure to import AOS styles

type ServiceType = {
  id: string;
  title: string;
  image: string;
  description: string;
  price: string;
};

const WebCard: React.FC = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      // AOS options
      duration: 1000, // Adjust the duration of the animation as needed
      once: true, // Animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="flex flex-col pt-26 mt-24 gap-12 px-12 relative z-100">
      {serviceData.map((service: ServiceType, index: number) => (
        <div
          key={service.id}
          className={`flex flex-col md:flex-row bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          data-aos-delay={`${index * 100}`} // Delays animation for each card
        >
          <div className="flex-shrink-0 flex-grow-0">
            <Image
              src={service.image}
              alt={`${service.title} image`}
              width={500}
              height={300}
              unoptimized={true}
            />
          </div>
          <div className="flex-grow p-6 flex flex-col">
            <h3 className="text-3xl text-center font-bold text-blueribbon-500">{service.title}</h3>
            <p className="text-aztec-900 text-2xl mx-8 mt-4">{service.description}</p>
            <div className="flex justify-center items-center mt-4">
              <div className="flex items-center space-x-4">
                <p className="text-2xl font-bold">From £{service.price}</p>
                <button className="bg-blueribbon-500 hover:bg-blueribbon-700 text-white font-bold py-2 px-4 rounded">
                  Email Us
                </button>
                <button className="bg-blueribbon-500 hover:bg-blueribbon-700 text-white font-bold py-2 px-4 rounded">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebCard;

