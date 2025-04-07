import React from 'react';
import { FaGoogle, FaTimes, FaLinkedin } from 'react-icons/fa';
import { line } from './images';
import { Link } from 'react-router-dom';


const teamMembers = [
  {
    name: 'Tim R. Moyer',
    role: 'Lecturer',
    image: 'https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team1.jpg',
  },
  {
    name: 'John Mack',
    role: 'Lecturer',
    image: 'https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team2.jpg',
  },
  {
    name: 'Rsoy Rose',
    role: 'Lecturer',
    image: 'https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team3.jpg',
  },
];

const TeamSection = () => {
  return (
    <section className="px-10 py-14 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 items-start">
        {/* Left Section */}
        <div>
          <p className="font-bold bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent">Team Members</p>
          <h2 className="text-4xl font-bold mt-2">
            Our Expert <span className="font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">Lecturer </span>
            <div><img src={line} alt="" /></div>
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has
          </p>
       <Link to="/allteam">
       <button className="mt-6 flex items-center gap-3 border-2 border-black px-5 py-2 rounded-md bg-black text-white ">
            <span className="text-xl">→</span> Join Our Team
          </button>
       </Link>
        </div>

        {/* Team Cards */}
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="border border-dashed border-purple-500 p-5 rounded-lg text-center shadow-md hover:scale-95 transition-all duration-1000 "
          >
        <Link to="/allteam">
        <img
              src={member.image}
              alt={member.name}
              className="w-80 h-90 mx-auto object-cover rounded-md"
            />
        </Link>
            <h3 className="mt-4 font-semibold text-xl">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
            <div className="flex justify-center gap-4 mt-4 text-white ">
              <span className="bg-purple-600 p-2 rounded-full hover:bg-gradient-to-r from-blue-500 to-green-600 hover:scale-125  ">
                <FaGoogle />
              </span>
              <span className="bg-purple-600 p-2 rounded-full hover:bg-gradient-to-r from-blue-500 to-green-600 hover:scale-125">
                <FaTimes />
              </span>
              <span className="bg-purple-600 p-2 rounded-full hover:bg-gradient-to-r from-blue-500 to-green-600 hover:scale-125 ">
                <FaLinkedin />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
