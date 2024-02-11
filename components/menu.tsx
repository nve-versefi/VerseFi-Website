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
    <section className="bg-gray-100 min-h-screen pt-28 p-8"> {/* Added top padding */}
      <div className="max-w-full mx-auto">
        {/* ...Section header... */}

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {menuData.map((service: MenuType) => (
            <Link key={service.id} href={service.path} passHref>
              <div className="block transform transition duration-300 hover:scale-105 border-2 border-blueribbon-500 rounded-2xl overflow-hidden"> {/* Adjusted border and overflow */}
                <div className="flex flex-col h-full bg-white rounded-2xl shadow-lg justify-between">
                  {/* Placeholder for service image */}
                  <div className="relative w-full h-72 mb-4 overflow-hidden"> {/* Removed border from image container */}
                    <Image
                      src={service.image}
                      alt={`${service.title} image`}
                      layout="fill"
                      objectFit="cover"
                      unoptimized={true}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-blueribbon-500 text-center px-4 pb-4">
                    {service.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
