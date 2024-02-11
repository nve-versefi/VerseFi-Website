import React, { useState } from 'react';
import { motion } from 'framer-motion';
 
const values = [
  {
    id: 1,
    title: 'Collaborative Innovation',
    description: 'Promoting innovation through teamwork, we connect our team with clients for advanced, collaborative solutions. Our approach emphasizes shared vision and open dialogue.',
    frontImgUrl:'/images/collaborative.png',
    imageUrl: '/images/insight.png',
  },

  {
    id: 2,
    title: 'Strategic Adaptability',
    description: 'Merging innovation with adaptability, we stay agile in the digital realm, leading with strategic foresight and efficiency to maintain a competitive edge.',
    frontImgUrl:'/images/adaptability.png',
    imageUrl: '/images/multipurpose.png',
  },

  {
    id: 3,
    title: 'Cybersecurity Advocacy',
    description: 'Dedicated to cybersecurity and tech education, we champion AI and blockchain, tackle fraud, and use advanced recovery techniques to enhance digital security.',
    frontImgUrl:'/images/cybersecadv.png',
    imageUrl: 'images/security.png',
  },

  {
    id: 4,
    title: 'Cutting-Edge Development',
    description: 'Pioneering in software and cybersecurity, we strive for unique value and set benchmarks for industry excellence and professionalism in our solutions.',
    frontImgUrl:'/images/innovation.png',
    imageUrl: '/images/tech.png',
  },

  {
    id: 5,
    title: 'Client-Centricity',
    description: "Tailoring our expertise to meet client needs, we forge strong partnerships, offering strategic, customized advice and solutions to fulfill unique client requirements.",
    frontImgUrl:'/images/customer-center.png',
    imageUrl: '/images/caring.png',
  },

  {
    id: 6,
    title: 'Integrity and Excellence',
    description: "Anchored in integrity, we foster trust and credibility, driven by a commitment to excellence that ensures innovative outcomes and upholds professional standards.",
    frontImgUrl:'/images/excellence.png',
    imageUrl: '/images/handshake.png',
  },

];

export default function Values() {
  const [isHovered, setIsHovered] = useState<Record<number, boolean>>({});

  const handleMouseEnter = (id: number) => setIsHovered({ ...isHovered, [id]: true });
  const handleMouseLeave = (id: number) => setIsHovered({ ...isHovered, [id]: false });

  // Fade-in animation configuration
  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3},
    transition: { duration: 1.5, ease: "easeOut" },
  };

  return (
    <section className="mt-16 flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-3xl text-blueribbon-500 font-bold mb-12">
        Our Core Values
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {values.map((value) => (
          <motion.div
            key={value.id}
            initial={fadeIn.initial}
            whileInView={fadeIn.whileInView}
            viewport={fadeIn.viewport}
            transition={fadeIn.transition}
            className="relative" // Keep your original class here
            style={{ width: '360px', height: '480px' }} // Ensuring the size remains unchanged
            onMouseEnter={() => handleMouseEnter(value.id)}
            onMouseLeave={() => handleMouseLeave(value.id)}
          >
            <div className={`card ${isHovered[value.id] ? 'is-flipped' : ''}`}>
              <div className="card-face card-front flex flex-col justify-center items-center p-6">
                <h4 className="text-2xl text-blueribbon-500 font-bold mb-4">{value.title}</h4>
                <img src={value.frontImgUrl} alt={`${value.title} illustration`} className="w-28 h-28 mb-4" />
                <p className="text-xl font-medium mb-4">{value.description}</p>
              </div>
              <div className="card-face card-back absolute inset-0">
                <img src={value.imageUrl} alt={value.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}