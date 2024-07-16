import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import '../App.css'
function Navbar() {
    const handelMouseIn = () => {
        const dropdown = document.getElementById("dropdown");
        dropdown.classList.toggle("hidden")
    }

    return (
        <>
            <nav className="bg-[white]  border-gray-200 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="../../public/images/logo.png" className="h-8" alt="Flowbite Logo" />
                    </a>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li className=''>
                                <NavLink to={"/"} className="">Home</NavLink>
                            </li>
                            <li className='relative px-5' onClick={handelMouseIn} >
                                <div className='flex justify-center items-center gap-2'>
                                    <p className="" aria-current="page">About Us</p>
                                    <FaAngleDown className='' />
                                </div>
                                <ul className='hidden absolute mx-2 my-4 bg-[#ff471a] rounded-md py-3 flex flex-col gap-3' id='dropdown'>
                                    <li className='px-5 '>
                                        <NavLink to={"/aboutus"}>About_Us</NavLink>
                                    </li>
                                    <li className='px-5 item'>
                                        <NavLink to={"/gallery"}>Gallery</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="" >
                                <NavLink to={"/ourservices"} >Our Services</NavLink>
                            </li>
                            <li className="">
                                <NavLink to={"/ourgallery"} >Our Gallery</NavLink>
                            </li>
                            <li className="">
                                <NavLink to={"/contactus"} >Contact Us</NavLink>
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