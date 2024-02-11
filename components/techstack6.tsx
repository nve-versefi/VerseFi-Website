import React, { useEffect, useRef, useState } from 'react';

// Define your logos and styles as before
const logoUrls6 = [
  '/images/docker.png',
  '/images/ghub.png',
  '/images/kubernetes.png',
  '/images/jira.png',
  '/images/jenkins.png',
  '/images/vscode.png',
  '/images/git.png',
  '/images/ganache.png',
  '/images/remix.jpg',
  // Add more logo URLs here
];

const logoStyles6 = [
  { maxWidth: '240px', height: 'auto' },
  { maxWidth: '290px', height: 'auto' },
  { maxWidth: '350px', height: 'auto' },
  { maxWidth: '390px', height: 'auto' },
  { maxWidth: '410px', height: 'auto' },
  { maxWidth: '320px', height: 'auto' },
  { maxWidth: '390px', height: 'auto' },
  { maxWidth: '390px', height: 'auto' },    
];

const imageMargin = '150px';
const defaultStyle = { maxWidth: '170px', height: 'auto', marginRight: imageMargin, marginLeft: imageMargin };


const TechStack6: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragOffsetRef = useRef(0);
  const autoMoveRef = useRef<NodeJS.Timeout | null>(null);

  const calculateTotalWidth = () => logoStyles6.reduce((acc, style) => acc + parseInt(style.maxWidth, 10) + 2 * parseInt(imageMargin, 10), 0) * 2;

  const startAutoMove = () => {
    if (autoMoveRef.current) clearInterval(autoMoveRef.current);
    autoMoveRef.current = setInterval(() => {
      setOffset((prevOffset) => {
        let newOffset = prevOffset - 1; // Adjust the speed as necessary
        if (Math.abs(newOffset) >= calculateTotalWidth() / 2) newOffset = 0; // Reset for looping
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
  <h2 className="text-3xl font-bold text-blueribbon-500 mb-2 mt-8 underline">Our Development Operations Stack</h2>
  <p className="mb-4 mt-4 text-xl mx-12 text-gray-700 font-medium">
  Our DevOps strategy integrates state-of-the-art tools for efficient development and deployment. We focus on containerization, orchestration, version control, continuous integration, and project management to ensure scalable, seamless workflows. Our toolkit also includes specialized resources for blockchain development, enhancing our capability to prototype and test innovative decentralized applications. By leveraging these technologies, we maintain a dynamic, collaborative development environment that accelerates delivery without compromising on quality.
  </p>
  <div
    className="carousel-container relative mt-8 mb-12"
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
      {logoUrls6.concat(logoUrls6).map((logoUrl, index) => {
        // Adjust margins here to increase separation between logos
        const itemStyle = { 
          maxWidth: '100%', // Keeps the image scalable within its container
          height: 'auto', // Maintains aspect ratio
          marginRight: '90px', // Increased marginRight for images
          marginLeft: '90px', // Increased marginLeft for images
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

export default TechStack6;
