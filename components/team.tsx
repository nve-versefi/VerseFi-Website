import React, { useState } from 'react';

interface TeamMemberProps {
  imageSrc: string;
  name: string;
  experience: string;
  position: string;
  hover: boolean; 
  onHoverChange: (isHovered: boolean) => void;
}

const teamMembers = [
  {
    imageSrc: '/images/member1.png',
    name: 'Nicholas van Eerde',
    position: 'Software Development Lead',
    experience: 'MSc in Innovation & Technology Management, BSc in Aerospace Engineering'
  },
  {
    imageSrc: '/images/member2.png',
    name: 'Kai Mossop',
    position: 'Business Development Lead',
    experience: 'Consultant, Double Bachelor in Law & Business Management'
  },
  // ... add more team members as needed ...
];

const TeamMemberCard: React.FC<TeamMemberProps> = ({ imageSrc, name, position, experience, hover }) => {
  return (
    <div 
      className={`team-card ${hover ? 'hovered-card scale-125' : ''}`}>
      <img src={imageSrc} alt={name} className={`rounded-full ${hover ? 'custom-img-style-on-hover' : ''}`} />
      <span className="text-md font-semibold text-gray-700 border border-indigo-600 bg-transparent py-1 px-3 lg:px-4 rounded-lg mt-4">{position}</span>
      <h3 className={`text-lg ${hover ? 'text-xl' : 'text-lg'} text-indigo-600 text-center`}>{name}</h3>
      <p className="text-gray-600 text-center">{experience}</p>
    </div>
  );
};

const Team: React.FC<{ onHoverChange: (isHovered: boolean) => void }> = ({ onHoverChange }) => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);



  return (
    <section className="pt-20 pb-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 pt-10">
          <h2 className="h2 mb-4 text-blueribbon-500 align-center">Our Team</h2>
        </div>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div 
              onMouseEnter={() => onHoverChange(true)}
              onMouseLeave={() => onHoverChange(false)}
              key={index}
            >
              <TeamMemberCard
                hover={hoveredMember === index}
                imageSrc={member.imageSrc}
                name={member.name}
                position={member.position}
                experience={member.experience}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Team