import React from 'react';

export const Vision: React.FC = () => {
    return (
      <section className="p-5 mt-16 border-4 border-blueribbon-500 rounded-2xl shadow-lg flex flex-row items-center bg-white p-6 rounded-lg shadow-lg my-6 mx-auto max-w-7xl">
        {/* Image Side */}
        <div className="flex-1">
          <img src="/images/vision.png" alt="Vision" className="rounded-lg w-full h-auto" />
        </div>
        
        {/* Content Side */}
        <div className="flex-1 p-4">
          <h2 className="text-3xl font-bold text-blueribbon-500 mb-8 text-center">Our Elevated Vision</h2>
          <p className="mx-12 text-center text-aztec-500 text-xl font-medium">In a world rapidly transformed by technology, our vision is to be the catalyst for universal empowerment and growth. We dream of a future where every individual and organization can swiftly and safely access the full potential of technological advances. Our goal is to redefine the landscape of tech consulting and cybersecurity, making the benefits of blockchain, AI, and software innovations universally accessible. By championing innovation, security, and inclusivity, we aim to spark exponential growth across industries and communities, ensuring technology serves as a bridge to a future where everyone can thrive in harmony with the digital revolution.</p>
        </div>
      </section>
    );
};

export default Vision;
