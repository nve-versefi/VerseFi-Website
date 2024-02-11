import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import serviceData from '../datafiles/blockdata';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

type ServiceType = {
  id: string;
  title: string;
  image: string;
  description: string;
  price: string;
};

//Function to animate the cards, odd cards slide from left, even cards slide from right

const BlockCard: React.FC = () => {

  // State for the Calendly modal
  const [isModalOpen, setIsModalOpen] = useState(false);


  // Initialize AOS
  useEffect(() => {
    AOS.init({
      // AOS options
      duration: 1000, // Adjust the duration of the animation as needed
      once: true, // Animation should happen only once - while scrolling down
    });
  }, []);

  // Function to handle email button click
const handleEmailButtonClick = (serviceTitle: string) => {
    const subject = encodeURIComponent(serviceTitle);
    const emailBody = encodeURIComponent(`Hello,\n\nI am interested in your ${serviceTitle} service. Please provide me with more information.\n\nBest regards,\n[Your Name]`);
    window.location.href = `mailto:consulting@versefi.co.uk?subject=${subject}&body=${emailBody}`;
  };

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
                <button className="bg-blueribbon-500 hover:bg-blueribbon-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleEmailButtonClick(service.title)}>
                  Email Us
                </button>
                <button className="bg-blueribbon-500 hover:bg-blueribbon-700 text-white font-bold py-2 px-4 rounded" onClick={() => setIsModalOpen(true)}>
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Calendly modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
          <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg shadow-lg">
            <iframe
              src="https://calendly.com/versefi/30min"
              width="100%"
              height="600"
              frameBorder="0"
            ></iframe>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-0 right-0 mt-4 mr-4"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlockCard;
