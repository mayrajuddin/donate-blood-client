import React from 'react';

const Banner = () => {
    return (
        <section className={`bg-gray-800 text-gray-100`}>
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl capitalize"><span className="text-primary">donate blood</span> and save life</h1>
                <p className="px-8 mt-8 mb-4 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                <h3 className="text-xl capitalize font-semibold mb-6">search donar</h3>
                <div className="flex mb-4 ">
                    <select className="select text-black mr-5 capitalize">
                        <option disabled selected>city</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                    <select className="select text-black capitalize">
                        <option disabled selected>blood group</option>
                        <option>A + </option>
                        <option>A -</option>
                        <option>B + </option>
                        <option>Ab +</option>
                        <option>B-</option>
                        <option>O + </option>
                        <option>O - </option>
                    </select>
                </div>
                <div className="flex flex-wrap justify-center">
                    <button type='search' className="px-8 py-3 m-2 text-lg font-semibold rounded-xl btn-primary capitalize">search</button>
                </div>
            </div>
        </section >
    );
};

export default Banner;