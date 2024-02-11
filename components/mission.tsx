import React from 'react';

export const Vision: React.FC = () => {
    return (
      <section className="mt-28 p-5 border-4 border-blueribbon-500 rounded-2xl shadow-lg flex flex-row items-center bg-white p-6 rounded-lg shadow-lg my-6 mx-auto max-w-7xl">
        {/* Content Side */}
        <div className="flex-1 p-4">
          <h2 className="text-3xl font-bold text-blueribbon-500 mb-8 text-center">Our Mission Statement</h2>
          <p className="mx-12 text-center text-aztec-500 text-xl font-medium">Our mission is to break down the barriers to technology adoption, providing top-tier IT strategy consulting, software development, and cybersecurity services. We are committed to helping our clients—from startups to global enterprises—navigate the digital landscape with ease and security, leveraging the latest in blockchain, AI, and software innovations. By prioritizing swift, safe tech implementation and advocating for robust security practices, we aim to accelerate the pace of technological advancement and its adoption, ensuring our clients and the broader community can thrive in an era of exponential digital growth.</p>
        </div>

        {/* Image Side */}
        <div className="flex-1">
          <img src="/images/mission.png" alt="Vision" className="rounded-lg w-full h-auto" />
        </div>
    
      </section>
    );
};

export default Vision;
