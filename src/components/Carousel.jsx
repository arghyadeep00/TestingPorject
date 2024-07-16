import React, { useState } from 'react'
import image from "../../public/API/imageApi.js";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
function Carousel() {
    const totalImage = image.length;
    const [count, setCount] = useState(0);

    let counter = 0;

    const btnOnClickInc = () => {
        if (counter == totalImage) {
            counter = 0;
            setCount(counter)
        }
        counter++;
        setCount(counter);
    }
    const btnOnClickDec = () => {
        if (counter == 0) {
            counter = totalImage;
        }
        counter--;
        setCount(counter);
    }
    return (
        <>
            <div className='max-w-full bg-blue-600 relative flex justify-center py-9'>
                <div className="arrow absolute flex justify-between w-full px-7 items-center mt-[20%]">

                    <span onClick={btnOnClickDec} className='hover:cursor-pointer'> <FaChevronLeft size={30} fill='white' /> </span>
                    <span onClick={btnOnClickInc} className='hover:cursor-pointer'> <FaChevronRight size={30} fill='white' /> </span>

                </div>
                <img src={`${image[count].image}`} className='rounded-md' width="90%" alt="" />
                <span></span>
            </div>
        </>
    )
}

export default Carousel