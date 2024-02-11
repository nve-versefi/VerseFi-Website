// techstack.tsx (or whatever the file name is)
import React, { useEffect, useRef, useState } from 'react';


// Define the array of logo URLs inside the component
const logoUrls4 = [
  '/images/aws.png',
  '/images/gcloud.png',
  '/images/azure.png',
  '/images/vercel.png',

  // Add more logo URLs here
];

const logoStyles4 = [
    { maxWidth: '440px', height: 'auto' }, // TypeScript logo style
    { maxWidth: '700px', height: 'auto' }, // JavaScript logo style
    { maxWidth: '470px', height: 'auto' }, // TypeScript logo style
    { maxWidth: '320px', height: 'auto' }, // JavaScript logo style
    { maxWidth: '290px', height: 'auto' }, // TypeScript logo style
    
];
const imageMargin = '150px';
const defaultStyle = { maxWidth: '170px', height: 'auto', marginRight: imageMargin, marginLeft: imageMargin };


const TechStack4: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragOffsetRef = useRef(0);
  const autoMoveRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate the total width with more repetitions
const calculateTotalWidth = () => logoStyles4.reduce((acc, style) => acc + parseInt(style.maxWidth, 10) + 2 * parseInt(imageMargin, 10), 0) * logoUrls4.length * 3; // Example: 3 times repetition

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
    <div className="text-center mb-5 px-4">
  <h2 className="text-3xl font-bold text-blueribbon-500 mb-2 underline mt-8">Our Hosting Stack</h2>
  <p className="mb-4 mt-4 text-xl mx-12 text-aztec-700 font-medium">
  Our hosting strategy utilizes a blend of cloud services, including AWS, Google Cloud, Azure, and Vercel, alongside self-hosted solutions for optimal flexibility and strength. We prioritize seamless performance and security, integrating redundancy across data paths to ensure maximum uptime and reliability. This approach safeguards against disruptions, maintaining continuous operation and data accessibility. By customizing our hosting solutions to match project needs, we guarantee our infrastructure is not just robust but also strategically prepared for high availability and scalable growth.
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
  {Array(5).fill(logoUrls4).flat().map((logoUrl, index) => {
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

export default TechStack4;
