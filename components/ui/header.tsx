'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import menuData from './menuData'; // Verify this path matches your project structure

interface MenuItem {
  id: number;
  title: string;
  path?: string;
  submenu?: MenuItem[];
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [sticky, setSticky] = useState(false); // State to track sticky navbar
  const router = useRouter();

  // Handle sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigate to function
  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <nav className={`flex items-center justify-between w-full shadow-md ${sticky ? 'bg-white fixed top-0 z-50' : 'bg-transparent'} transition-all duration-300 ease-in-out`} style={{zIndex: 1000}}>
      <div className="flex items-center text-black mr-6">
        <Image src="/images/logo.svg" alt="Logo" width={130} height={80} />
      </div>
      <div className="block lg:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row lg:items-center w-full lg:w-auto`}>
        {menuData.map((item: MenuItem, index: number) => (
          <div key={item.id} className="relative mx-8 lg:inline-block">
            <button
              onMouseEnter={() => setOpenIndex(index)}
              onFocus={() => setOpenIndex(index)}
              onClick={() => item.path && navigateTo(item.path)}
              className="text-blue-600 text-xl font-bold hover:text-blue-800 px-8 py-2 rounded lg:mt-0 mr-4"
            >
              {item.title}
            </button>
            {item.submenu && (
              <div 
                className={`absolute z-20 ${openIndex === index ? 'block' : 'hidden'} bg-white shadow-lg rounded-md mt-1`}
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                {item.submenu.map((subItem: MenuItem, subIndex: number) => (
                  <button
                    key={subIndex}
                    onClick={() => navigateTo(subItem.path || '')}
                    className="block w-full px-4 py-2 text-sm text-blue-700 hover:bg-gray-100"
                  >
                    {subItem.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
