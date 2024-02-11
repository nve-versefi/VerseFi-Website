// About.tsx
import React, { useState, createContext } from 'react';
import Team from '@/components/team';
import Vision from '@/components/vision';
import Mission from '@/components/mission';
import Values from '@/components/values';
import Newsletter from '@/components/newsletter';
import DefaultLayout from '@/app/(default)/layout';
import RootLayout from '@/app/layout';
import { BlurContext } from '@/components/team';
import TechStack from '@/components/techstack'
import TechStack2 from '@/components/techstack2'
import TechStack3 from '@/components/techstack3'
import TechStack4 from '@/components/techstack4'
import TechStack5 from '@/components/techstack5'
import TechStack6 from '@/components/techstack6'
import CarouselCard from '@/components/carouselcard';
import { motion } from 'framer-motion';


export default function About() {
  const [isBlurred, setIsBlurred] = useState(false);

  // Adjusted animation variants for a slower slide-in effect
  const slideInRight = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2 } }, // Increased duration for a slower animation
  };

  const slideInLeft = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2 } }, // Similarly increased duration
  };

  const scaleIn = {
    hidden: { scale: 0.95, opacity: 0 }, // Less dramatic initial scale for better visibility
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  return (
    <BlurContext.Provider value={{ isBlurred, setGlobalBlur: setIsBlurred }}>
      <RootLayout>
        <DefaultLayout>
          <div className="page-content relative">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInRight}
            >
              <Team />
            </motion.div>
            {isBlurred && <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0"></div>}
            
            <Values />
         
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={slideInLeft}
            >
              <Mission />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={slideInRight}
            >
              <Vision />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }} // Lower amount for earlier trigger
              variants={scaleIn}
            >
              <CarouselCard>
                <TechStack />
                <TechStack2 />
                <TechStack3 />
                <TechStack4 />
                <TechStack5 />
                <TechStack6 />
              </CarouselCard>
            </motion.div>
            <Newsletter />
          </div>
        </DefaultLayout>
      </RootLayout>
    </BlurContext.Provider>
  );
}