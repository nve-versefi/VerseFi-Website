import React, { useState, createContext, useContext } from 'react';
import Image from 'next/image';

interface SocialMedia {
  href: string;
  src: string;
  alt: string;
}

interface TeamMemberProps {
  imageSrc: string;
  name: string;
  experience: string;
  position: string;
  hover: boolean;
  socialMedia: SocialMedia[];
}

export const BlurContext = createContext({
  isBlurred: false,
  setGlobalBlur: (state: boolean) => {},
});

const teamMembers = [
  {
    imageSrc: '/images/member1.jpeg',
    name: 'Nicholas van Eerde',
    position: 'Tech Lead & Managing Director',
    experience: " - MSc in Innovation & Technology Management \n - BSc in Aerospace Engineering \n - IBM Certified Full Stack Developer \n - Enrolled on Google's Cybersecurity Certificate ",
    socialMedia: [
      { href: 'https://linkedin.com/in/nicholas-van-eerde-4674121a4/', src: '/images/linkedin.png', alt: 'LinkedIn' },
      { href: 'https://twitter.com/nickdelatierra', src: '/images/twitter.png', alt: 'Twitter' },
    ]
  },
  {
    imageSrc: '/images/member2.jpeg',
    name: 'Kai Mossop',
    position: 'Business Development Lead',
    experience: " - Bachelor of Laws \n - BSc in Business Management \n - Regulatory Compliance Specialist \n - Institutional Relations",
    socialMedia: [
      { href: 'https://linkedin.com/in/kaimossoprodríguez/', src: '/images/linkedin.png', alt: 'LinkedIn' },
      { href: 'https://twitter.com/KaiMossop', src: '/images/twitter.png', alt: 'Twitter' },
    ]
  },
  // Add more team members as needed...
];

const TeamMemberCard: React.FC<TeamMemberProps> = ({ imageSrc, name, position, experience, hover, socialMedia }) => {
  return (
    <div
      className={`team-card relative p-6 border rounded-lg ${hover ? 'bg-white scale-105 z-10 shadow-lg' : 'bg-gray-100'} w-full max-w-md`}
    >
      <div className={`relative w-60 h-60 rounded-full mx-auto overflow-hidden border-4 border-purple-500 ${hover ? 'grayscale' : ''}`}> {/* Added border for circular stroke */}
        <Image src={imageSrc} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="text-center mt-4">
        <h3 className={`text-2xl font-semibold ${hover ? 'text-indigo-600' : 'text-gray-700'}`}>{name}</h3>
        <div className="inline-block py-1 m-4 px-3 border-2 border-purple-500 rounded-full"> {/* Added frame around position text */}
          <span className="text-lg text-gray-500">{position}</span>
        </div>
      </div>
      {hover && (
        <div className="mt-4 text-md text-gray-600">
          <p style={{ whiteSpace: 'pre-wrap' }}>{experience}</p>
          <div className="flex justify-center mt-2">
            {socialMedia.map((media, index) => (
              <a
                key={index}
                href={media.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mx-2"
              >
                <Image src={media.src} alt={media.alt} width={28} height={28} />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


const Team: React.FC = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const { setGlobalBlur } = useContext(BlurContext);

  const handleMouseEnter = (index: number) => {
    setHoveredMember(index);
    setGlobalBlur(true);
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
    setGlobalBlur(false);
  };

  return (
    <section className="pt-20 pb-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8 pt-10">
          <h2 className="h2 text-blueribbon-500 align-center">Our Management Team</h2>
        </div>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div 
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              key={index}
              className="m-4"
            >
              <TeamMemberCard
                hover={hoveredMember === index}
                imageSrc={member.imageSrc}
                name={member.name}
                position={member.position}
                experience={member.experience}
                socialMedia={member.socialMedia}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
