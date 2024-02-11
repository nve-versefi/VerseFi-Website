"use client";
import React, { useState } from 'react';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section>
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="h-full w-full object-cover md:object-cover"
            src="/videos/AnimBackground.mp4"
            autoPlay
            loop
            muted
          />
        </div>

        <div className="relative pt-32 pb-6 md:pt-40 md:pb-8">
          <div className="max-w-3xl justify-start pl-8 pb-12 md:pb-16">
            <h1 className="h1 mb-4 text-blueribbon-500" data-aos="fade-up">
              Tech Strategy Consulting for Businesses of All Sizes
            </h1>
            <p className="text-2xl text-aztec-500 mb-8" data-aos="fade-up" data-aos-delay="200">
              We help sophisticated organizations increase efficiency via personalized software & automation while avoiding the misconceptions and technical barriers of the digital realm.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mr-24">
              <div data-aos="fade-up" data-aos-delay="400">
                <button
                  className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                  onClick={() => setIsModalOpen(true)}
                >
                  Free discovery call
                </button>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Calendly booking */}
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
    </section>
  );
}
