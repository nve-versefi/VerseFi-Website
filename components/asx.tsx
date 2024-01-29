"use client";
import React, { useState } from 'react';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            src="/videos/AnimBackground.mp4"
            autoPlay
            loop
            muted
          />
        </div>

        <div className="z-10 text-center">
          <h1 className="h1 mb-4 text-blueribbon-500" data-aos="fade-up">
            Tech Strategy Consulting for Businesses of All Sizes
          </h1>
          <p className="text-2xl text-aztec-500 mb-8" data-aos="fade-up" data-aos-delay="200">
            We help sophisticated organizations increase efficiency via personalized software & automation while avoiding the misconceptions and technical barriers of the digital realm.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <button
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                onClick={() => setIsModalOpen(true)}
              >
                Free discovery call
              </button>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <button
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Calendly booking */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-xl">
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
              <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
