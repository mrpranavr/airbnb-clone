import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserCircleIcon, UsersIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-lg p-5 md:px-10">
            {/* Left */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src='https://links.papareact.com/qd3' layout="fill" style={{objectFit: 'contain', objectPosition: 'left'}} />
            </div>

            {/* middle */}
            <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2 " >
                <input type='text' placeholder="Start your search" className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"/>
                <MagnifyingGlassIcon className="md:inline-flex hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"  />
            </div>

            {/* right */}
            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="hidden md:inline-block cursor-pointer" >Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <Bars3Icon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 cursor-pointer "/>
                </div>
            </div>
        </header>
    );
};

export default Header;
