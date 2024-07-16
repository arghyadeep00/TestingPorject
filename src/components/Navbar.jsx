import React from 'react'
import '../App.css'
import { FaAngleDown } from "react-icons/fa6";
function Navbar() {
    const handelMouseIn = () => {
        const dropdown = document.getElementById("dropdown");
        dropdown.classList.toggle("hidden")
    }
  
    
    return (
        <>


            <nav className="bg-[#5a5757] border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="../../public/images/logo.png" className="h-8" alt="Flowbite Logo" />

                    </a>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <a href="#" className="py-2 px-3 text-white" aria-current="page">Home</a>
                            </li>
                            <li className='relative' onMouseOver={handelMouseIn} >
                                <a href="#" className="py-2 px-3 text-white" aria-current="page">About Us</a>
                                <FaAngleDown className='inline fill-white' />

                                <ul className='absolute mx-2 my-4 bg-[#ff471a] rounded-md py-3 flex flex-col gap-3' onMouseOver={handelMouseIn} id='dropdown'>
                                    <li className='text-white px-5'>About_us</li>
                                    <li className='text-white px-5'>Gallery</li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="py-2 px-3 text-white" aria-current="page">Our Services</a>
                            </li>
                            <li>
                                <a href="#" className="py-2 px-3 text-white" aria-current="page">Our Gallery</a>
                            </li>
                            <li>
                                <a href="#" className="py-2 px-3 text-white" aria-current="page">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className='btn'>Get Quote</button>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar