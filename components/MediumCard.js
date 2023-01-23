import Image from "next/image";
import React from "react";

const MediumCard = ({ img, title }) => {
    return (
        <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
            {/* image */}
            <div className="relative h-80 w-80">
                <Image src={img} fill style={{objectFit:'contain'}} className='rounded-xl' />
            </div>

            {/* text */}
            <h3 className="text-xl mt-3 font-normal">{title}</h3>
        </div>
    );
};

export default MediumCard;
