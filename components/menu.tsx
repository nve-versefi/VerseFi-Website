import Link from 'next/link';
import Image from 'next/image';
import menuData from './categoryData';

type MenuType = {
  id: number;
  title: string;
  path: string;
  image: string;
  newTab: boolean; // This can be removed if not used elsewhere.
};

export default function Menu() {
  return (
    <section className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center pt-12 md:pt-20 pl-6 md:pl-12">
          <h2 className="text-3xl text-blueribbon-500 font-bold mb-8">Technology Consulting & Development Services</h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {menuData.map((service: MenuType) => (
            <Link key={service.id} href={service.path} passHref>
              <div className="block transform transition duration-300 hover:scale-105 border border-2 border-black rounded-2xl">
                <div className="flex flex-col h-full p-6 bg-white rounded-2xl shadow-lg justify-between">
                  {/* Placeholder for service image */}
                  <div className="relative w-full h-56 mb-4 bg-gray-300 rounded-lg overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} image`}
                      width={500}  // Specify width
                      height={300} // Specify height
                      unoptimized={true} 
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-blueribbon-500 text-center">{service.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
