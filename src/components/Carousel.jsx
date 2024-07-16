import React, { useState, useEffect } from 'react';
import image from "../../public/API/imageApi.js";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Carousel() {
    const totalImage = image.length;
    const [count, setCount] = useState(0);

    const btnOnClickInc = () => {
        setCount((prevCount) => (prevCount + 1) % totalImage);
     
    };

    const btnOnClickDec = () => {
        setCount((prevCount) => (prevCount - 1 + totalImage) % totalImage);
     
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => (prevCount + 1) % totalImage);
        }, 5000);
        return () => clearInterval(interval);
    }, [totalImage]);

    return (
        <div className='max-w-full bg-blue-600 relative flex justify-center py-9'>
            <div className="arrow absolute flex justify-between w-full px-7 items-center mt-[20%]">
                <span onClick={btnOnClickDec} className='hover:cursor-pointer'>
                    <FaChevronLeft size={30} fill='white' />
                </span>
                <span onClick={btnOnClickInc} className='hover:cursor-pointer'>
                    <FaChevronRight size={30} fill='white' />
                </span>
            </div>
            <img src={image[count].image} className='rounded-md duration-75' width="90%" alt="" />
        </div>
    );
}

export default Carousel;
