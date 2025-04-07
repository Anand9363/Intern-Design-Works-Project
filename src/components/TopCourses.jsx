import React from 'react'
import { line } from './images'
import { Link } from 'react-router-dom'

const TopCourses = () => {
    return (
        <>

            <div className='2xl:container mx-auto'>
                <div className='w-[95%] mx-auto grid grid-cols-1'>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='font-bold bg-gradient-to-r from-blue-600 to-teal-400  bg-clip-text text-transparent py-5'>Most Featured Courses {" "}</p>
                        <p className=' sm:flex sm:flex-row sm:font-bold sm:text-center sm:text-[45px] md:flex md:flex-row md:text-[45px] md:font-bold  md:text-center  justify-center items-center'>Choose Our Top
                            <p className='sm:flex sm:flex-col items-center justify-center ml-5  font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent '>Courses <img src={line} className=' hidden md:block ' alt="" /></p></p>
                    </div>

                </div>

            </div>




            <div className='2xl:container mx-auto py-10'>
                <div className='w-[95%] mx-auto  grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-12'>



                    <div className=" rounded-lg overflow-hidden shadow-lg bg-white hover:scale-105 transition-all duration-700 ">
                        {/* Course Image Section */}
                        <div className="relative">
                            <img
                                src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses1.jpg" // Replace with actual course image
                                alt="Course"
                                className="w-full h-48 object-cover hover:scale-110 transition-all duration-700"
                            />
                            {/* Price Badge */}
                            <span className="absolute top-3 left-3 bg-purple-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                                $27.00
                            </span>
                        </div>

                        {/* Course Details */}
                        <div className="p-4">
                            {/* Beginner Label & Favorite Icon */}
                            <div className="flex items-center justify-between cursor-pointer ">
                            <Link to="/course/:id">
                                <span className=" text-gray-700  font-bold  bg-gray-200 px-3 py-4 rounded-lg hover:bg-purple-600 hover:text-white hover:scale-105">
                                    Beginner
                                </span>
                                </Link>
                                <button className="text-gray-400 hover:text-white-500 ">

                                    <svg className='bg-gray-200 px-3 py-3 rounded-lg hover:bg-purple-600  hover:scale-105'
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="3em"
                                        height="3em"

                                    >
                                        <path
                                            fill="white"
                                            d="M16.5 4.5c2.206 0 4 1.794 4 4c0 4.669-5.543 8.941-8.5 11.023C9.043 17.441 3.5 13.169 3.5 8.5c0-2.206 1.794-4 4-4a4.01 4.01 0 0 1 3.273 1.706L12 7.953l1.227-1.746A4.01 4.01 0 0 1 16.5 4.5m0-1.5A5.49 5.49 0 0 0 12 5.344A5.49 5.49 0 0 0 7.5 3A5.5 5.5 0 0 0 2 8.5c0 5.719 6.5 10.438 10 12.85c3.5-2.412 10-7.131 10-12.85A5.5 5.5 0 0 0 16.5 3"
                                        ></path>
                                    </svg>

                                </button>
                            </div>

                            {/* Course Title */}
                            <h3 className="mt-3 text-2xl font-bold text-gray-900">
                                Introduction to Digital Marketing
                            </h3>

                            {/* Ratings */}
                            <div className="flex items-center mt-2">
                                <span className="text-gray-500 text-1xl">(5.0 ratings)</span>
                                <div className="ml-2 flex text-blue-400">

                                    <div className='flex flex-row justify-center items-center'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>



                                    </div>







                                </div>
                            </div>

                            {/* Instructor */}
                            <div className="flex items-center mt-3 mb-7 ">
                                <img
                                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses-user1.jpg" // Replace with instructor's image
                                    alt="Instructor"
                                    className="w-10 h-10 rounded-full border"
                                />
                                <span className="ml-2  font-semibold text-gray-800 ">
                                    Prof. Donnie Ball
                                </span>
                            </div>
                        </div>
                        <hr />

                        {/* Footer Section */}
                        <div className="px-4 py-3 border-t flex items-center justify-between text-gray-600 text-sm ">
                            {/* <span>📚 70+ students</span>
         */}
                            <div className='flex flex-row  justify-center items-center gap-3 font-bold text-gray-500 text-sm'>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    width="2em"
                                    height="2em"

                                >
                                    <g fill="none">
                                        <path
                                            fill="url(#fluentColorPeople480)"
                                            d="M27.225 27a3.75 3.75 0 0 0-3.75 3.75V31s0 8 10.5 8h.024c10.5 0 10.5-8 10.5-8v-.25A3.75 3.75 0 0 0 40.75 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople485)"
                                            fillOpacity=".5"
                                            d="M27.225 27a3.75 3.75 0 0 0-3.75 3.75V31s0 8 10.5 8h.024c10.5 0 10.5-8 10.5-8v-.25A3.75 3.75 0 0 0 40.75 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople481)"
                                            d="M6.75 27A3.75 3.75 0 0 0 3 30.75V32s0 9 13 9s13-9 13-9v-1.25A3.75 3.75 0 0 0 25.25 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople482)"
                                            d="M6.75 27A3.75 3.75 0 0 0 3 30.75V32s0 9 13 9s13-9 13-9v-1.25A3.75 3.75 0 0 0 25.25 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople483)"
                                            d="M34 24a6 6 0 1 0 0-12a6 6 0 0 0 0 12"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople484)"
                                            d="M16 24a8 8 0 1 0 0-16a8 8 0 0 0 0 16"
                                        ></path>
                                        <defs>
                                            <linearGradient
                                                id="fluentColorPeople480"
                                                x1="28.474"
                                                x2="32.783"
                                                y1="28.595"
                                                y2="40.65"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#9C6CFE"></stop>
                                                <stop offset="1" stopColor="#7A41DC"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople481"
                                                x1="9.183"
                                                x2="13.986"
                                                y1="28.861"
                                                y2="43.103"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#BD96FF"></stop>
                                                <stop offset="1" stopColor="#9C6CFE"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople482"
                                                x1="16"
                                                x2="22.748"
                                                y1="25.333"
                                                y2="48.75"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#885EDB" stopOpacity="0"></stop>
                                                <stop offset="1" stopColor="#E362F8"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople483"
                                                x1="30.854"
                                                x2="36.969"
                                                y1="13.595"
                                                y2="23.36"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#9C6CFE"></stop>
                                                <stop offset="1" stopColor="#7A41DC"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople484"
                                                x1="11.805"
                                                x2="19.959"
                                                y1="10.127"
                                                y2="23.147"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#BD96FF"></stop>
                                                <stop offset="1" stopColor="#9C6CFE"></stop>
                                            </linearGradient>
                                            <radialGradient
                                                id="fluentColorPeople485"
                                                cx="0"
                                                cy="0"
                                                r="1"
                                                gradientTransform="matrix(13.83637 -1.75 1.7749 14.0332 20.808 33)"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".392" stopColor="#3B148A"></stop>
                                                <stop offset="1" stopColor="#3B148A" stopOpacity="0"></stop>
                                            </radialGradient>
                                        </defs>
                                    </g>
                                </svg>70+ students


                            </div>
                           <Link to="/course/:id">
                           <button className="text-black hover:text-purple-600 font-bold text-lg flex items-center ">
                                Enroll Now →
                            </button></Link>
                        </div>
                    </div>

                    <div className=" rounded-lg overflow-hidden shadow-lg bg-white hover:scale-105 transition-all duration-700">
                        {/* Course Image Section */}
                        <div className="relative">
                            <img
                                src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses2.jpg" // Replace with actual course image
                                alt="Course"
                                className="w-full h-48 object-cover  hover:scale-110 transition-all duration-700"
                            />
                            {/* Price Badge */}
                            <span className="absolute top-3 left-3 bg-purple-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                                $27.00
                            </span>
                        </div>

                        {/* Course Details */}
                        <div className="p-4">
                            {/* Beginner Label & Favorite Icon */}
                            <div className="flex items-center justify-between cursor-pointer ">
                            <Link to="/course/:id">
                                <span className=" text-gray-700  font-bold  bg-gray-200 px-3 py-4 rounded-lg hover:bg-purple-600 hover:text-white hover:scale-105">
                                    Beginner
                                </span>
                                </Link>
                                <button className="text-gray-400 hover:text-red-500 ">

                                    <svg className='bg-gray-200 px-3 py-3 rounded-lg hover:bg-purple-600 hover:scale-105'
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="3em"
                                        height="3em"

                                    >
                                        <path
                                            fill="white"
                                            d="M16.5 4.5c2.206 0 4 1.794 4 4c0 4.669-5.543 8.941-8.5 11.023C9.043 17.441 3.5 13.169 3.5 8.5c0-2.206 1.794-4 4-4a4.01 4.01 0 0 1 3.273 1.706L12 7.953l1.227-1.746A4.01 4.01 0 0 1 16.5 4.5m0-1.5A5.49 5.49 0 0 0 12 5.344A5.49 5.49 0 0 0 7.5 3A5.5 5.5 0 0 0 2 8.5c0 5.719 6.5 10.438 10 12.85c3.5-2.412 10-7.131 10-12.85A5.5 5.5 0 0 0 16.5 3"
                                        ></path>
                                    </svg>

                                </button>
                            </div>

                            {/* Course Title */}
                            <h3 className="mt-3 text-2xl font-bold text-gray-900">
                                Introduction to Digital Marketing
                            </h3>

                            {/* Ratings */}
                            <div className="flex items-center mt-2">
                                <span className="text-gray-500 text-1xl">(5.0 ratings)</span>
                                <div className="ml-2 flex text-blue-400">

                                    <div className='flex flex-row justify-center items-center'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>



                                    </div>







                                </div>
                            </div>

                            {/* Instructor */}
                            <div className="flex items-center mt-3 mb-7">
                                <img
                                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses3.jpg" // Replace with instructor's image
                                    alt="Instructor"
                                    className="w-10 h-10 rounded-full border"
                                />
                                <span className="ml-2  font-semibold text-gray-800 ">
                                    Prof. Donnie Ball
                                </span>
                            </div>
                        </div>
                        <hr />

                        {/* Footer Section */}
                        <div className="px-4 py-3 border-t flex items-center justify-between text-gray-600 text-sm ">
                            {/* <span>📚 70+ students</span>
         */}
                            <div className='flex flex-row  justify-center items-center gap-3 font-bold text-gray-500 text-sm'>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    width="2em"
                                    height="2em"

                                >
                                    <g fill="none">
                                        <path
                                            fill="url(#fluentColorPeople480)"
                                            d="M27.225 27a3.75 3.75 0 0 0-3.75 3.75V31s0 8 10.5 8h.024c10.5 0 10.5-8 10.5-8v-.25A3.75 3.75 0 0 0 40.75 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople485)"
                                            fillOpacity=".5"
                                            d="M27.225 27a3.75 3.75 0 0 0-3.75 3.75V31s0 8 10.5 8h.024c10.5 0 10.5-8 10.5-8v-.25A3.75 3.75 0 0 0 40.75 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople481)"
                                            d="M6.75 27A3.75 3.75 0 0 0 3 30.75V32s0 9 13 9s13-9 13-9v-1.25A3.75 3.75 0 0 0 25.25 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople482)"
                                            d="M6.75 27A3.75 3.75 0 0 0 3 30.75V32s0 9 13 9s13-9 13-9v-1.25A3.75 3.75 0 0 0 25.25 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople483)"
                                            d="M34 24a6 6 0 1 0 0-12a6 6 0 0 0 0 12"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople484)"
                                            d="M16 24a8 8 0 1 0 0-16a8 8 0 0 0 0 16"
                                        ></path>
                                        <defs>
                                            <linearGradient
                                                id="fluentColorPeople480"
                                                x1="28.474"
                                                x2="32.783"
                                                y1="28.595"
                                                y2="40.65"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#9C6CFE"></stop>
                                                <stop offset="1" stopColor="#7A41DC"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople481"
                                                x1="9.183"
                                                x2="13.986"
                                                y1="28.861"
                                                y2="43.103"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#BD96FF"></stop>
                                                <stop offset="1" stopColor="#9C6CFE"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople482"
                                                x1="16"
                                                x2="22.748"
                                                y1="25.333"
                                                y2="48.75"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#885EDB" stopOpacity="0"></stop>
                                                <stop offset="1" stopColor="#E362F8"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople483"
                                                x1="30.854"
                                                x2="36.969"
                                                y1="13.595"
                                                y2="23.36"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#9C6CFE"></stop>
                                                <stop offset="1" stopColor="#7A41DC"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople484"
                                                x1="11.805"
                                                x2="19.959"
                                                y1="10.127"
                                                y2="23.147"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#BD96FF"></stop>
                                                <stop offset="1" stopColor="#9C6CFE"></stop>
                                            </linearGradient>
                                            <radialGradient
                                                id="fluentColorPeople485"
                                                cx="0"
                                                cy="0"
                                                r="1"
                                                gradientTransform="matrix(13.83637 -1.75 1.7749 14.0332 20.808 33)"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".392" stopColor="#3B148A"></stop>
                                                <stop offset="1" stopColor="#3B148A" stopOpacity="0"></stop>
                                            </radialGradient>
                                        </defs>
                                    </g>
                                </svg>70+ students


                            </div>
                            <Link to="/course/:id">
                           <button className="text-black hover:text-purple-600 font-bold text-lg flex items-center ">
                                Enroll Now →
                            </button></Link>
                        </div>
                    </div>



                    <div className=" rounded-lg overflow-hidden shadow-lg bg-white hover:scale-105 transition-all duration-700">
                        {/* Course Image Section */}
                        <div className="relative">
                            <img
                                src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses3.jpg" // Replace with actual course image
                                alt="Course"
                                className="w-full h-48 object-cover  hover:scale-110 transition-all duration-700"
                            />
                            {/* Price Badge */}
                            <span className="absolute top-3 left-3 bg-purple-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                                $27.00
                            </span>
                        </div>

                        {/* Course Details */}
                        <div className="p-4">
                            {/* Beginner Label & Favorite Icon */}
                            <div className="flex items-center justify-between cursor-pointer ">
                            <Link to="/course/:id">
                                <span className=" text-gray-700  font-bold  bg-gray-200 px-3 py-4 rounded-lg hover:bg-purple-600 hover:text-white hover:scale-105">
                                    Beginner
                                </span>
                                </Link>
                                <button className="text-gray-400 hover:text-red-500 ">

                                    <svg className='bg-gray-200 px-3 py-3 rounded-lg hover:bg-purple-600 hover:scale-105'
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="3em"
                                        height="3em"

                                    >
                                        <path
                                            fill="white"
                                            d="M16.5 4.5c2.206 0 4 1.794 4 4c0 4.669-5.543 8.941-8.5 11.023C9.043 17.441 3.5 13.169 3.5 8.5c0-2.206 1.794-4 4-4a4.01 4.01 0 0 1 3.273 1.706L12 7.953l1.227-1.746A4.01 4.01 0 0 1 16.5 4.5m0-1.5A5.49 5.49 0 0 0 12 5.344A5.49 5.49 0 0 0 7.5 3A5.5 5.5 0 0 0 2 8.5c0 5.719 6.5 10.438 10 12.85c3.5-2.412 10-7.131 10-12.85A5.5 5.5 0 0 0 16.5 3"
                                        ></path>
                                    </svg>

                                </button>
                            </div>

                            {/* Course Title */}
                            <h3 className="mt-3 text-2xl font-bold text-gray-900">
                                Introduction to Digital Marketing
                            </h3>

                            {/* Ratings */}
                            <div className="flex items-center mt-2">
                                <span className="text-gray-500 text-1xl">(5.0 ratings)</span>
                                <div className="ml-2 flex text-blue-400">

                                    <div className='flex flex-row justify-center items-center'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>



                                    </div>







                                </div>
                            </div>

                            {/* Instructor */}
                            <div className="flex items-center mt-3 mb-7">
                                <img
                                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses-user1.jpg" // Replace with instructor's image
                                    alt="Instructor"
                                    className="w-10 h-10 rounded-full border"
                                />
                                <span className="ml-2  font-semibold text-gray-800 ">
                                    Prof. Donnie Ball
                                </span>
                            </div>
                        </div>
                        <hr />

                        {/* Footer Section */}
                        <div className="px-4 py-3 border-t flex items-center justify-between text-gray-600 text-sm ">
                            {/* <span>📚 70+ students</span>
         */}
                            <div className='flex flex-row  justify-center items-center gap-3 font-bold text-gray-500 text-sm'>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    width="2em"
                                    height="2em"

                                >
                                    <g fill="none">
                                        <path
                                            fill="url(#fluentColorPeople480)"
                                            d="M27.225 27a3.75 3.75 0 0 0-3.75 3.75V31s0 8 10.5 8h.024c10.5 0 10.5-8 10.5-8v-.25A3.75 3.75 0 0 0 40.75 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople485)"
                                            fillOpacity=".5"
                                            d="M27.225 27a3.75 3.75 0 0 0-3.75 3.75V31s0 8 10.5 8h.024c10.5 0 10.5-8 10.5-8v-.25A3.75 3.75 0 0 0 40.75 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople481)"
                                            d="M6.75 27A3.75 3.75 0 0 0 3 30.75V32s0 9 13 9s13-9 13-9v-1.25A3.75 3.75 0 0 0 25.25 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople482)"
                                            d="M6.75 27A3.75 3.75 0 0 0 3 30.75V32s0 9 13 9s13-9 13-9v-1.25A3.75 3.75 0 0 0 25.25 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople483)"
                                            d="M34 24a6 6 0 1 0 0-12a6 6 0 0 0 0 12"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople484)"
                                            d="M16 24a8 8 0 1 0 0-16a8 8 0 0 0 0 16"
                                        ></path>
                                        <defs>
                                            <linearGradient
                                                id="fluentColorPeople480"
                                                x1="28.474"
                                                x2="32.783"
                                                y1="28.595"
                                                y2="40.65"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#9C6CFE"></stop>
                                                <stop offset="1" stopColor="#7A41DC"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople481"
                                                x1="9.183"
                                                x2="13.986"
                                                y1="28.861"
                                                y2="43.103"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#BD96FF"></stop>
                                                <stop offset="1" stopColor="#9C6CFE"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople482"
                                                x1="16"
                                                x2="22.748"
                                                y1="25.333"
                                                y2="48.75"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#885EDB" stopOpacity="0"></stop>
                                                <stop offset="1" stopColor="#E362F8"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople483"
                                                x1="30.854"
                                                x2="36.969"
                                                y1="13.595"
                                                y2="23.36"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#9C6CFE"></stop>
                                                <stop offset="1" stopColor="#7A41DC"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople484"
                                                x1="11.805"
                                                x2="19.959"
                                                y1="10.127"
                                                y2="23.147"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#BD96FF"></stop>
                                                <stop offset="1" stopColor="#9C6CFE"></stop>
                                            </linearGradient>
                                            <radialGradient
                                                id="fluentColorPeople485"
                                                cx="0"
                                                cy="0"
                                                r="1"
                                                gradientTransform="matrix(13.83637 -1.75 1.7749 14.0332 20.808 33)"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".392" stopColor="#3B148A"></stop>
                                                <stop offset="1" stopColor="#3B148A" stopOpacity="0"></stop>
                                            </radialGradient>
                                        </defs>
                                    </g>
                                </svg>70+ students


                            </div>
                            <Link to="/course/:id">
                           <button className="text-black hover:text-purple-600 font-bold text-lg flex items-center ">
                                Enroll Now →
                            </button></Link>
                        </div>
                    </div>


                    <div className=" rounded-lg overflow-hidden shadow-lg bg-white hover:scale-105 transition-all duration-700">
                        {/* Course Image Section */}
                        <div className="relative">
                            <img
                                src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses4.jpg" // Replace with actual course image
                                alt="Course"
                                className="w-full h-48 object-cover  hover:scale-110 transition-all duration-700"
                            />
                            {/* Price Badge */}
                            <span className="absolute top-3 left-3 bg-purple-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                                $27.00
                            </span>
                        </div>

                        {/* Course Details */}
                        <div className="p-4">
                            {/* Beginner Label & Favorite Icon */}
                            <div className="flex items-center justify-between cursor-pointer ">
                            <Link to="/course/:id">
                                <span className=" text-gray-700  font-bold  bg-gray-200 px-3 py-4 rounded-lg hover:bg-purple-600 hover:text-white hover:scale-105">
                                    Beginner
                                </span>
                                </Link>
                                <button className="text-gray-400 hover:text-red-500 ">

                                    <svg className='bg-gray-200 px-3 py-3 rounded-lg hover:bg-purple-600 hover:scale-105'
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="3em"
                                        height="3em"

                                    >
                                        <path
                                            fill="white"
                                            d="M16.5 4.5c2.206 0 4 1.794 4 4c0 4.669-5.543 8.941-8.5 11.023C9.043 17.441 3.5 13.169 3.5 8.5c0-2.206 1.794-4 4-4a4.01 4.01 0 0 1 3.273 1.706L12 7.953l1.227-1.746A4.01 4.01 0 0 1 16.5 4.5m0-1.5A5.49 5.49 0 0 0 12 5.344A5.49 5.49 0 0 0 7.5 3A5.5 5.5 0 0 0 2 8.5c0 5.719 6.5 10.438 10 12.85c3.5-2.412 10-7.131 10-12.85A5.5 5.5 0 0 0 16.5 3"
                                        ></path>
                                    </svg>

                                </button>
                            </div>

                            {/* Course Title */}
                            <h3 className="mt-3 text-2xl font-bold text-gray-900">
                                Introduction to Digital Marketing
                            </h3>

                            {/* Ratings */}
                            <div className="flex items-center mt-2">
                                <span className="text-gray-500 text-1xl">(5.0 ratings)</span>
                                <div className="ml-2 flex text-blue-400">

                                    <div className='flex flex-row justify-center items-center'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>



                                    </div>







                                </div>
                            </div>

                            {/* Instructor */}
                            <div className="flex items-center mt-3 mb-7">
                                <img
                                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses-user1.jpg" // Replace with instructor's image
                                    alt="Instructor"
                                    className="w-10 h-10 rounded-full border"
                                />
                                <span className="ml-2  font-semibold text-gray-800 ">
                                    Prof. Donnie Ball
                                </span>
                            </div>
                        </div>
                        <hr />

                        {/* Footer Section */}
                        <div className="px-4 py-3 border-t flex items-center justify-between text-gray-600 text-sm ">
                            {/* <span>📚 70+ students</span>
         */}
                            <div className='flex flex-row  justify-center items-center gap-3 font-bold text-gray-500 text-sm'>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    width="2em"
                                    height="2em"

                                >
                                    <g fill="none">
                                        <path
                                            fill="url(#fluentColorPeople480)"
                                            d="M27.225 27a3.75 3.75 0 0 0-3.75 3.75V31s0 8 10.5 8h.024c10.5 0 10.5-8 10.5-8v-.25A3.75 3.75 0 0 0 40.75 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople485)"
                                            fillOpacity=".5"
                                            d="M27.225 27a3.75 3.75 0 0 0-3.75 3.75V31s0 8 10.5 8h.024c10.5 0 10.5-8 10.5-8v-.25A3.75 3.75 0 0 0 40.75 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople481)"
                                            d="M6.75 27A3.75 3.75 0 0 0 3 30.75V32s0 9 13 9s13-9 13-9v-1.25A3.75 3.75 0 0 0 25.25 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople482)"
                                            d="M6.75 27A3.75 3.75 0 0 0 3 30.75V32s0 9 13 9s13-9 13-9v-1.25A3.75 3.75 0 0 0 25.25 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople483)"
                                            d="M34 24a6 6 0 1 0 0-12a6 6 0 0 0 0 12"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople484)"
                                            d="M16 24a8 8 0 1 0 0-16a8 8 0 0 0 0 16"
                                        ></path>
                                        <defs>
                                            <linearGradient
                                                id="fluentColorPeople480"
                                                x1="28.474"
                                                x2="32.783"
                                                y1="28.595"
                                                y2="40.65"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#9C6CFE"></stop>
                                                <stop offset="1" stopColor="#7A41DC"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople481"
                                                x1="9.183"
                                                x2="13.986"
                                                y1="28.861"
                                                y2="43.103"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#BD96FF"></stop>
                                                <stop offset="1" stopColor="#9C6CFE"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople482"
                                                x1="16"
                                                x2="22.748"
                                                y1="25.333"
                                                y2="48.75"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#885EDB" stopOpacity="0"></stop>
                                                <stop offset="1" stopColor="#E362F8"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople483"
                                                x1="30.854"
                                                x2="36.969"
                                                y1="13.595"
                                                y2="23.36"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#9C6CFE"></stop>
                                                <stop offset="1" stopColor="#7A41DC"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople484"
                                                x1="11.805"
                                                x2="19.959"
                                                y1="10.127"
                                                y2="23.147"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#BD96FF"></stop>
                                                <stop offset="1" stopColor="#9C6CFE"></stop>
                                            </linearGradient>
                                            <radialGradient
                                                id="fluentColorPeople485"
                                                cx="0"
                                                cy="0"
                                                r="1"
                                                gradientTransform="matrix(13.83637 -1.75 1.7749 14.0332 20.808 33)"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".392" stopColor="#3B148A"></stop>
                                                <stop offset="1" stopColor="#3B148A" stopOpacity="0"></stop>
                                            </radialGradient>
                                        </defs>
                                    </g>
                                </svg>70+ students


                            </div>
                            <Link to="/course/:id">
                           <button className="text-black hover:text-purple-600 font-bold text-lg flex items-center ">
                                Enroll Now →
                            </button></Link>
                        </div>
                    </div>


                    <div className=" rounded-lg overflow-hidden shadow-lg bg-white hover:scale-105 transition-all duration-700">
                        {/* Course Image Section */}
                        <div className="relative">
                            <img
                                src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses5.jpg" // Replace with actual course image
                                alt="Course"
                                className="w-full h-48 object-cover  hover:scale-110 transition-all duration-700"
                            />
                            {/* Price Badge */}
                            <span className="absolute top-3 left-3 bg-purple-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                                $27.00
                            </span>
                        </div>

                        {/* Course Details */}
                        <div className="p-4">
                            {/* Beginner Label & Favorite Icon */}
                            <div className="flex items-center justify-between cursor-pointer ">
                            <Link to="/course/:id">
                                <span className=" text-gray-700  font-bold  bg-gray-200 px-3 py-4 rounded-lg hover:bg-purple-600 hover:text-white hover:scale-105">
                                    Beginner
                                </span>
                                </Link>
                                <button className="text-gray-400 hover:text-red-500 ">

                                    <svg className='bg-gray-200 px-3 py-3 rounded-lg hover:bg-purple-600 hover:scale-105'
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="3em"
                                        height="3em"

                                    >
                                        <path
                                            fill="white"
                                            d="M16.5 4.5c2.206 0 4 1.794 4 4c0 4.669-5.543 8.941-8.5 11.023C9.043 17.441 3.5 13.169 3.5 8.5c0-2.206 1.794-4 4-4a4.01 4.01 0 0 1 3.273 1.706L12 7.953l1.227-1.746A4.01 4.01 0 0 1 16.5 4.5m0-1.5A5.49 5.49 0 0 0 12 5.344A5.49 5.49 0 0 0 7.5 3A5.5 5.5 0 0 0 2 8.5c0 5.719 6.5 10.438 10 12.85c3.5-2.412 10-7.131 10-12.85A5.5 5.5 0 0 0 16.5 3"
                                        ></path>
                                    </svg>

                                </button>
                            </div>

                            {/* Course Title */}
                            <h3 className="mt-3 text-2xl font-bold text-gray-900">
                                Introduction to Digital Marketing
                            </h3>

                            {/* Ratings */}
                            <div className="flex items-center mt-2">
                                <span className="text-gray-500 text-1xl">(5.0 ratings)</span>
                                <div className="ml-2 flex text-blue-400">

                                    <div className='flex flex-row justify-center items-center'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>



                                    </div>







                                </div>
                            </div>

                            {/* Instructor */}
                            <div className="flex items-center mt-3 mb-7">
                                <img
                                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses-user1.jpg" // Replace with instructor's image
                                    alt="Instructor"
                                    className="w-10 h-10 rounded-full border"
                                />
                                <span className="ml-2  font-semibold text-gray-800 ">
                                    Prof. Donnie Ball
                                </span>
                            </div>
                        </div>
                        <hr />

                        {/* Footer Section */}
                        <div className="px-4 py-3 border-t flex items-center justify-between text-gray-600 text-sm ">
                            {/* <span>📚 70+ students</span>
         */}
                            <div className='flex flex-row  justify-center items-center gap-3 font-bold text-gray-500 text-sm'>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    width="2em"
                                    height="2em"

                                >
                                    <g fill="none">
                                        <path
                                            fill="url(#fluentColorPeople480)"
                                            d="M27.225 27a3.75 3.75 0 0 0-3.75 3.75V31s0 8 10.5 8h.024c10.5 0 10.5-8 10.5-8v-.25A3.75 3.75 0 0 0 40.75 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople485)"
                                            fillOpacity=".5"
                                            d="M27.225 27a3.75 3.75 0 0 0-3.75 3.75V31s0 8 10.5 8h.024c10.5 0 10.5-8 10.5-8v-.25A3.75 3.75 0 0 0 40.75 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople481)"
                                            d="M6.75 27A3.75 3.75 0 0 0 3 30.75V32s0 9 13 9s13-9 13-9v-1.25A3.75 3.75 0 0 0 25.25 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople482)"
                                            d="M6.75 27A3.75 3.75 0 0 0 3 30.75V32s0 9 13 9s13-9 13-9v-1.25A3.75 3.75 0 0 0 25.25 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople483)"
                                            d="M34 24a6 6 0 1 0 0-12a6 6 0 0 0 0 12"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople484)"
                                            d="M16 24a8 8 0 1 0 0-16a8 8 0 0 0 0 16"
                                        ></path>
                                        <defs>
                                            <linearGradient
                                                id="fluentColorPeople480"
                                                x1="28.474"
                                                x2="32.783"
                                                y1="28.595"
                                                y2="40.65"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#9C6CFE"></stop>
                                                <stop offset="1" stopColor="#7A41DC"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople481"
                                                x1="9.183"
                                                x2="13.986"
                                                y1="28.861"
                                                y2="43.103"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#BD96FF"></stop>
                                                <stop offset="1" stopColor="#9C6CFE"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople482"
                                                x1="16"
                                                x2="22.748"
                                                y1="25.333"
                                                y2="48.75"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#885EDB" stopOpacity="0"></stop>
                                                <stop offset="1" stopColor="#E362F8"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople483"
                                                x1="30.854"
                                                x2="36.969"
                                                y1="13.595"
                                                y2="23.36"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#9C6CFE"></stop>
                                                <stop offset="1" stopColor="#7A41DC"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople484"
                                                x1="11.805"
                                                x2="19.959"
                                                y1="10.127"
                                                y2="23.147"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#BD96FF"></stop>
                                                <stop offset="1" stopColor="#9C6CFE"></stop>
                                            </linearGradient>
                                            <radialGradient
                                                id="fluentColorPeople485"
                                                cx="0"
                                                cy="0"
                                                r="1"
                                                gradientTransform="matrix(13.83637 -1.75 1.7749 14.0332 20.808 33)"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".392" stopColor="#3B148A"></stop>
                                                <stop offset="1" stopColor="#3B148A" stopOpacity="0"></stop>
                                            </radialGradient>
                                        </defs>
                                    </g>
                                </svg>70+ students


                            </div>
                            <Link to="/course/:id">
                           <button className="text-black hover:text-purple-600 font-bold text-lg flex items-center ">
                                Enroll Now →
                            </button></Link>
                        </div>
                    </div>



                    <div className=" rounded-lg overflow-hidden shadow-lg bg-white hover:scale-105 transition-all duration-700">
                        {/* Course Image Section */}
                        <div className="relative">
                            <img
                                src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses6.jpg" // Replace with actual course image
                                alt="Course"
                                className="w-full h-48 object-cover  hover:scale-110 transition-all duration-700"
                            />
                            {/* Price Badge */}
                            <span className="absolute top-3 left-3 bg-purple-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                                $27.00
                            </span>
                        </div>

                        {/* Course Details */}
                        <div className="p-4">
                            {/* Beginner Label & Favorite Icon */}
                            <div className="flex items-center justify-between cursor-pointer ">
                                <Link to="/course/:id">
                                <span className=" text-gray-700  font-bold  bg-gray-200 px-3 py-4 rounded-lg hover:bg-purple-600 hover:text-white hover:scale-105">
                                    Beginner
                                </span>
                                </Link>
                                <button className="text-gray-400 hover:text-red-500 ">

                                    <svg className='bg-gray-200 px-3 py-3 rounded-lg hover:bg-purple-600 hover:scale-105'
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="3em"
                                        height="3em"

                                    >
                                        <path
                                            fill="white"
                                            d="M16.5 4.5c2.206 0 4 1.794 4 4c0 4.669-5.543 8.941-8.5 11.023C9.043 17.441 3.5 13.169 3.5 8.5c0-2.206 1.794-4 4-4a4.01 4.01 0 0 1 3.273 1.706L12 7.953l1.227-1.746A4.01 4.01 0 0 1 16.5 4.5m0-1.5A5.49 5.49 0 0 0 12 5.344A5.49 5.49 0 0 0 7.5 3A5.5 5.5 0 0 0 2 8.5c0 5.719 6.5 10.438 10 12.85c3.5-2.412 10-7.131 10-12.85A5.5 5.5 0 0 0 16.5 3"
                                        ></path>
                                    </svg>

                                </button>
                            </div>

                            {/* Course Title */}
                            <h3 className="mt-3 text-2xl font-bold text-gray-900">
                                Introduction to Digital Marketing
                            </h3>

                            {/* Ratings */}
                            <div className="flex items-center mt-2">
                                <span className="text-gray-500 text-1xl">(5.0 ratings)</span>
                                <div className="ml-2 flex text-blue-400">

                                    <div className='flex flex-row justify-center items-center'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 576"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"
                                            ></path>
                                        </svg>



                                    </div>







                                </div>
                            </div>

                            {/* Instructor */}
                            <div className="flex items-center mt-3 mb-7">
                                <img
                                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses-user1.jpg" // Replace with instructor's image
                                    alt="Instructor"
                                    className="w-10 h-10 rounded-full border"
                                />
                                <span className="ml-2  font-semibold text-gray-800 ">
                                    Prof. Donnie Ball
                                </span>
                            </div>
                        </div>
                        <hr />

                        {/* Footer Section */}
                        <div className="px-4 py-3 border-t flex items-center justify-between text-gray-600 text-sm ">
                            {/* <span>📚 70+ students</span>
         */}
                            <div className='flex flex-row  justify-center items-center gap-3 font-bold text-gray-500 text-sm'>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    width="2em"
                                    height="2em"

                                >
                                    <g fill="none">
                                        <path
                                            fill="url(#fluentColorPeople480)"
                                            d="M27.225 27a3.75 3.75 0 0 0-3.75 3.75V31s0 8 10.5 8h.024c10.5 0 10.5-8 10.5-8v-.25A3.75 3.75 0 0 0 40.75 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople485)"
                                            fillOpacity=".5"
                                            d="M27.225 27a3.75 3.75 0 0 0-3.75 3.75V31s0 8 10.5 8h.024c10.5 0 10.5-8 10.5-8v-.25A3.75 3.75 0 0 0 40.75 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople481)"
                                            d="M6.75 27A3.75 3.75 0 0 0 3 30.75V32s0 9 13 9s13-9 13-9v-1.25A3.75 3.75 0 0 0 25.25 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople482)"
                                            d="M6.75 27A3.75 3.75 0 0 0 3 30.75V32s0 9 13 9s13-9 13-9v-1.25A3.75 3.75 0 0 0 25.25 27z"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople483)"
                                            d="M34 24a6 6 0 1 0 0-12a6 6 0 0 0 0 12"
                                        ></path>
                                        <path
                                            fill="url(#fluentColorPeople484)"
                                            d="M16 24a8 8 0 1 0 0-16a8 8 0 0 0 0 16"
                                        ></path>
                                        <defs>
                                            <linearGradient
                                                id="fluentColorPeople480"
                                                x1="28.474"
                                                x2="32.783"
                                                y1="28.595"
                                                y2="40.65"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#9C6CFE"></stop>
                                                <stop offset="1" stopColor="#7A41DC"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople481"
                                                x1="9.183"
                                                x2="13.986"
                                                y1="28.861"
                                                y2="43.103"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#BD96FF"></stop>
                                                <stop offset="1" stopColor="#9C6CFE"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople482"
                                                x1="16"
                                                x2="22.748"
                                                y1="25.333"
                                                y2="48.75"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#885EDB" stopOpacity="0"></stop>
                                                <stop offset="1" stopColor="#E362F8"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople483"
                                                x1="30.854"
                                                x2="36.969"
                                                y1="13.595"
                                                y2="23.36"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#9C6CFE"></stop>
                                                <stop offset="1" stopColor="#7A41DC"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="fluentColorPeople484"
                                                x1="11.805"
                                                x2="19.959"
                                                y1="10.127"
                                                y2="23.147"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".125" stopColor="#BD96FF"></stop>
                                                <stop offset="1" stopColor="#9C6CFE"></stop>
                                            </linearGradient>
                                            <radialGradient
                                                id="fluentColorPeople485"
                                                cx="0"
                                                cy="0"
                                                r="1"
                                                gradientTransform="matrix(13.83637 -1.75 1.7749 14.0332 20.808 33)"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop offset=".392" stopColor="#3B148A"></stop>
                                                <stop offset="1" stopColor="#3B148A" stopOpacity="0"></stop>
                                            </radialGradient>
                                        </defs>
                                    </g>
                                </svg>70+ students


                            </div>
                            <Link to="/course/:id">
                           <button className="text-black hover:text-purple-600 font-bold text-lg flex items-center ">
                                Enroll Now →
                            </button></Link>
                        </div>

                    </div>
                </div>
            </div>

            <div className='2xL:container mx-auto'>
                <div className='w-[80%] mx-auto grid grid-cols-1'>
                    <div className='flex flex-row justify-center items-center'>
                       <Link to="/courseGrid">
                       <button className="bg-black text-white px-6 py-3 flex items-center  gap-2 rounded-md text-lg font-medium hover:bg-purple-600 transition">
                            View All Categories
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="2em"
                                height="2em"

                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M13.483 4.47a.75.75 0 0 1 1.06 0l6.988 7a.75.75 0 0 1 0 1.06l-6.988 7a.75.75 0 0 1-1.061-1.06l5.709-5.719L3 12.762a.75.75 0 0 1-.002-1.5l16.194-.01l-5.711-5.722a.75.75 0 0 1 0-1.06"
                                    clipRule="evenodd"
                                ></path>
                            </svg>


                        </button>
                        </Link>
                    </div>

                </div>

            </div>


        </>
    )
}



export default TopCourses




