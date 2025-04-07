import React from 'react'
import { line } from './images'
import { FaMicrophoneSlash, FaPhoneSlash, FaVideo } from "react-icons/fa";

const LiveClass = () => {
  return (
    <>
      <div className='2xl:container mx-auto'>
        <div className='w-[95%] mx-auto grid grid-cols-1'>
          <div > 
          <img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/shape10.svg"  alt="" />
            <div className='flex flex-col items-center gap-5 text-center'>
             <p className='bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent text-xl md:text-2xl font-semibold'>
                Live Classes
              </p>
              <p className='font-bold text-2xl md:text-4xl flex flex-wrap justify-center gap-3'>
                It’s Easy To Start  
                <span className='bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent'>
                  Learning
                  <img src={line} className='hidden md:block w-36' alt="" />
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
          
        </div>
      </div>
      
    </>
  )
}

export default LiveClass;
