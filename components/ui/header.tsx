import { useState } from 'react';
import Link from 'next/link';
import menuData from './menuData'; // Ensure this path is correct for your project

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 bg-white sticky top-0 z-50 shadow-md">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <span className="font-semibold text-xl tracking-tight">Your Logo</span>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-400 hover:text-gray-600 hover:border-gray-600">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:flex-grow">
          {menuData.map((item) => item.submenu ? (
            <div onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)} key={item.id} className="relative">
            <a href={item.path} className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black mr-4">
                {item.title}
            </a>
              {dropdownOpen && (
                <div className="absolute bg-white shadow-lg">
                  {item.submenu.map((subItem) => (
                    <Link href={subItem.path} key={subItem.id}     target={subItem.newTab ? '_blank' : '_self'} className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black mr-4">
                  
                        {subItem.title}
           
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link href={item.path} key={item.id}   target={item.newTab ? '_blank' : '_self'} className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black mr-4">
       
                {item.title}
            
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
