import React from 'react';
import { FaGoogle, FaTimes, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { line } from '../components/images';
import { FaMicrophoneSlash, FaPhoneSlash, FaVideo } from "react-icons/fa";




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
  {
    name: 'Cheryl J. Solomon',
    role: 'Lecturer',
    image: 'https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team3.jpg',
  },
  {
    name: 'Julia B. Corbin',
    role: 'Lecturer',
    image: 'https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team13.jpg',
  },
  {
    name: 'Adrian V. Ginsberg',
    role: 'Lecturer',
    image: 'https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team14.jpg',
  },
  {
    name: 'Daniel C. Almonte',
    role: 'Lecturer',
    image: 'https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team15.jpg',
  },
];

const AllTeamMembers = () => {
  return (
    <section className="px-10  bg-white py-32">
          <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Team</h2>
        <p className="mt-2 text-gray-500">
          <span className="font-semibold">Home</span> -{" "}
          <span className="text-purple-600 font-medium">Team</span>
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 items-start">
        
        {/* Left Section */}
        <div>
          <p className="font-bold bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent">Team Members</p>
          <h2 className="text-4xl font-bold mt-2">
            Our Expert <span className="font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">Lecturer </span>
            <div><img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/title-shape.svg" alt="" /></div>
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has
          </p>
        <Link to="/courseGrid">
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
            <img
              src={member.image}
              alt={member.name}
              className="w-80 h-90 mx-auto object-cover rounded-md"
            />
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
           <div className='py-24 '> 
                <img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/shape10.svg"  alt="" />
                  <div className='flex flex-col items-center gap-5 text-center'>
                   <p className='bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent text-xl md:text-2xl font-semibold'>
                      Live Classes
                    </p>
                    <p className='font-bold text-2xl md:text-4xl flex flex-wrap justify-center gap-3'>
                      It’s Easy To Start  
                      <span className='bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent'>
                        Learning
                        <img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/title-shape.svg" className='hidden md:block w-36' alt="" />
                      </span>
                    </p>
                   
                    
                    {/* Video Call Section */}
                    <div className="flex justify-center items-center min-h-[40vh] w-full">
                      <div className="relative w-full max-w-[95%] h-[400px] sm:h-[500px] md:h-[600px] bg-gray-300 rounded-xl shadow-lg overflow-hidden">
                        {/* Large Video Background */}
                        <div className="absolute inset-0 bg-cover bg-center"
                          style={{backgroundImage:"url('https://demo.themeies.com/edugen/wp-content/uploads/2024/09/learning1.jpg')"}}   >                
                        </div>
                       
      
                        {/* Live Indicator */}
                        <div className="absolute top-4 right-4 bg-white px-5 py-4 rounded-md shadow-md  flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          <span className="text-sm font-bold text-black">LIVE</span>
                          <span className="text-sm text-gray-600">01:30:08</span>
                        </div>
      
                        {/* Small Video (Picture-in-Picture) */}
                        <div className="absolute bottom-6 left-6 w-[90px] h-[75px] sm:w-[150px] sm:h-[130px] bg-gray-300 rounded-lg overflow-hidden shadow-lg border-2  border-white">
                          <div className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: "url('https://demo.themeies.com/edugen/wp-content/uploads/2024/09/learning2.jpg')" }}>
                              
                          </div>
                          
                        </div>
      
                        {/* Call Controls */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 sm:gap-6">
                          <button className="bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-200 transition">
                            <FaMicrophoneSlash className="text-gray-600 text-sm sm:text-lg" />
                          </button>
                          <button className="bg-red-500 p-2 sm:p-3 rounded-full shadow-md hover:bg-red-600 transition">
                            <FaPhoneSlash className="text-white text-sm sm:text-lg" />
                          </button>
                          <button className="bg-green-500 p-2 sm:p-3 rounded-full shadow-md hover:bg-green-600 transition">
                            <FaVideo className="text-white text-sm sm:text-lg" />
                          </button>
                        </div>
      
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
    </section>
  );
};

export default AllTeamMembers;
