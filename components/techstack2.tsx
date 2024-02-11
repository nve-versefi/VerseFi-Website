// techstack.tsx (or whatever the file name is)
import React, { useEffect, useRef, useState } from 'react';


// Define the array of logo URLs inside the component
const logoUrls2 = [
  '/images/nodejs.png',
  '/images/php.png',
  '/images/python.png',
  '/images/cplus.png',
  '/images/rust.png',
  '/images/golang.png',
  '/images/express.png',
  '/images/graphql.png',
  '/images/web3js.png',
  '/images/rest.png',
  '/images/websocket.png',
  '/images/soap.png',

  // Add more logo URLs here
];

const logoStyles2 = [
    { maxWidth: '240px', height: 'auto' }, // TypeScript logo style
    { maxWidth: '210px', height: 'auto' }, // JavaScript logo style
    { maxWidth: '350px', height: 'auto' }, // TypeScript logo style
    { maxWidth: '320px', height: 'auto' }, // JavaScript logo style
    { maxWidth: '290px', height: 'auto' }, // TypeScript logo style
    { maxWidth: '3400px', height: 'auto' }, // TypeScript logo style
    { maxWidth: '350px', height: 'auto' }, // TypeScript logo style
    { maxWidth: '320px', height: 'auto' }, // JavaScript logo style
    { maxWidth: '350px', height: 'auto' }, // TypeScript logo style
    { maxWidth: '290px', height: 'auto' }, // TypeScript logo style
    
]
const imageMargin = '150px';
const defaultStyle = { maxWidth: '170px', height: 'auto', marginRight: imageMargin, marginLeft: imageMargin };


const TechStack2: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragOffsetRef = useRef(0);
  const autoMoveRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate the total width with more repetitions
const calculateTotalWidth = () => logoStyles2.reduce((acc, style) => acc + parseInt(style.maxWidth, 10) + 2 * parseInt(imageMargin, 10), 0) * logoUrls2.length * 3; // Example: 3 times repetition

const startAutoMove = () => {
  if (autoMoveRef.current) clearInterval(autoMoveRef.current);
  autoMoveRef.current = setInterval(() => {
    setOffset((prevOffset) => {
      let newOffset = prevOffset - 1;
      // Adjust the reset condition based on the new total width
      if (Math.abs(newOffset) >= calculateTotalWidth() / 3) newOffset = 0; // Reset based on 3 times repetition
      return newOffset;
    });
  }, 10);
};

  const stopAutoMove = () => {
    if (autoMoveRef.current) {
      clearInterval(autoMoveRef.current);
      autoMoveRef.current = null;
    }
  };

  const handleDragStart = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    stopAutoMove(); // Stop auto movement when dragging starts
    setIsDragging(true);
    const clientX = event.type.includes('mouse') ? (event as React.MouseEvent).clientX : (event as React.TouchEvent).touches[0].clientX;
    setDragStartX(clientX);
    dragOffsetRef.current = offset; // Store the current offset at drag start
    event.preventDefault();
  };

  const handleDragging = (clientX: number) => {
    if (!isDragging) return;
    const dragOffset = clientX - dragStartX;
    setOffset(dragOffsetRef.current + dragOffset); // Corrected direction
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => handleDragging(event.clientX);
    const handleTouchMove = (event: TouchEvent) => handleDragging(event.touches[0].clientX);

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging, dragStartX]);

  useEffect(() => {
    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        setTimeout(startAutoMove, 5000); // Resume auto movement after 5 seconds
      }
    };
    const handleTouchEnd = () => {
      if (isDragging) {
        setIsDragging(false);
        setTimeout(startAutoMove, 5000); // Resume auto movement after 5 seconds
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  useEffect(() => {
    startAutoMove(); // Start auto movement on mount

    return () => stopAutoMove(); // Cleanup on unmount
  }, []);

  return (
    <div className="text-center mb-5 px-4 ">
  <h2 className="text-3xl mt-8 font-bold text-blueribbon-500 mb-2 underline">Our Back End Stack</h2>
  <p className="mb-4 text-xl mt-4 mx-12 text-aztec-700 font-medium">
  Our backend stack is built with a focus on functionality, security, and scalability. We use a range of server-side technologies to ensure our applications can handle the demands of modern web usage, including data processing and real-time interactions. Our goal is to create reliable and efficient systems that support the needs of businesses and their users without overcomplicating things. We emphasize practical, effective solutions that get the job done and prepare our projects for future growth and challenges.
  </p>
  <div
    className="carousel-container relative mt-8"
    style={{ overflow: 'hidden', width: '100%', height: '150px', cursor: isDragging ? 'grabbing' : 'grab' }}
    onMouseDown={handleDragStart as any}
    onTouchStart={handleDragStart as any}
  >
    <div
  ref={carouselRef}
  className="flex"
  style={{
    width: `${calculateTotalWidth()}px`,
    transform: `translateX(${offset}px)`,
    transition: isDragging ? 'none' : 'transform 0.2s ease-out',
    height: '150px',
  }}
>
  {/* Repeat the logos more times to extend the loop duration */}
  {Array(5).fill(logoUrls2).flat().map((logoUrl, index) => {
    const itemStyle = { 
      maxWidth: '100%', // Adjust based on your requirement
      height: 'auto',
      marginRight: '120px', // Increased separation
      marginLeft: '120px',
    };
    return <img key={index} src={logoUrl} alt={`Logo ${index}`} style={itemStyle} />;
  })}
</div>

    <div style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: '300px',
      background: 'linear-gradient(to right, #ffffff, transparent)',
      zIndex: 2,
      pointerEvents: 'none',
    }}></div>
    <div style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      width: '300px',
      background: 'linear-gradient(to left, #ffffff, transparent)',
      zIndex: 2,
      pointerEvents: 'none',
    }}></div>
  </div>
</div>



  );
};

export default TechStack2;
