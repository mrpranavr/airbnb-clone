import Footer from "@/components/Footer";
import Header from "@/components/header";
import InfoCard from "@/components/InfoCard";
import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";

const Search = ({ searchResults }) => {
    const router = useRouter();

    const { location, startDate, endDate, numberOfGuests } = router.query;

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <div className="h-screen">
            <Header
                placeholder={`${location} | ${range} | ${numberOfGuests}`}
            />

            <main className="flex">
                {/* Left section */}
                <section className="flex-grow pt-14 px-6 max-w-[1280px] mx-auto">
                    <p className="text-xs">
                        300+ stays - {range} - {numberOfGuests} guests
                    </p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">
                        Stays in {location}
                    </h1>

                    <div className="hidden md:inline-flex space-x-5 mb-5">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and beds</p>
                        <p className="button">More filters</p>
                    </div>

                    <div className="flex flex-col">
                        {searchResults.map((item) => (
                            <InfoCard key={item.img} {...item} />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Search;

export async function getServerSideProps(context) {
    // links.papareact.com/isz
    const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
        (res) => res.json()
    );

    return {
        props: {
            searchResults,
        },
    };
}
