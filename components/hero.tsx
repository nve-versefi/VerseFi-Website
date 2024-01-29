"use client";
import React, { useState } from 'react';
import { PopupWidget } from 'react-calendly';

export default function Hero() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  // Function to handle opening the Calendly modal
  const openCalendlyModal = () => setIsCalendlyOpen(true);

  // Function to handle closing the Calendly modal
  const closeCalendlyModal = () => setIsCalendlyOpen(false);

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
                  onClick={openCalendlyModal}
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

          {/* Conditional rendering of the Calendly PopupWidget */}
          {isCalendlyOpen && (
            <PopupWidget
              url="https://calendly.com/versefi/30min"
              onClose={closeCalendlyModal}
            />
          )}
        </div>
      </div>
    </section>
  );
}
