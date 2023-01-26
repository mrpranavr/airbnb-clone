import Image from "next/image";
import React, { useState, useRef } from "react";
import {
    MagnifyingGlassIcon,
    GlobeAltIcon,
    Bars3Icon,
    UserCircleIcon,
    UsersIcon,
} from "@heroicons/react/24/solid";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = ({placeholder}) => {
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numberOfGuests, setNumberOfQuests] = useState(1);

    const router = useRouter()

    const selectionRange = {
        startDate,
        endDate,
        key: "selection",
    };

    const resetInput = () => {
        setSearchInput('')
    }

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numberOfGuests
            }
        })
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-lg p-5 md:px-10">
            {/* Left */}
            <div onClick={() => router.push('/')} className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    src="https://links.papareact.com/qd3"
                    alt="logo"
                    fill
                    style={{ objectFit: "contain", objectPosition: "left" }}
                />
            </div>

            {/* middle */}
            <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2 ">
                <input
                    value={searchInput}
                    onChange={(e) => {
                        setSearchInput(e.target.value);
                    }}
                    type="text"
                    placeholder={placeholder || 'Start your text'}
                    className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
                />
                <MagnifyingGlassIcon className="md:inline-flex hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
            </div>

            {/* right */}
            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="hidden md:inline-block cursor-pointer pl-5">
                    Become a host
                </p>
                <GlobeAltIcon className="h-6 cursor-pointer hidden sm:inline-block" />
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <Bars3Icon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 cursor-pointer " />
                </div>
            </div>

            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto mt-5">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#fd5861"]}
                        onChange={handleSelect}
                    />

                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl font-semibold flex-grow">
                            Number of guests
                        </h2>
                        <UsersIcon className="h-5" />
                        <input
                            type="number"
                            value={numberOfGuests}
                            min={1}
                            onChange={(e) => setNumberOfQuests(e.target.value)}
                            className="w-[55px] pl-2 text-lg outline-none text-red-400 text-center"
                        />
                    </div>

                    <div className="flex">
                        <button className="flex-grow text-gray-500" onClick={resetInput}>
                            Cancel
                        </button>
                        <button className="flex-grow text-red-500" onClick={search}>
                            Search
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
