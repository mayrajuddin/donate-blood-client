import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className="text-gray-100 bg-[url('https://www.shutterstock.com/image-photo/woman-getting-transfusion-while-sitting-260nw-114582253.jpg')] bg-center bg-cover bg-slate-500">
            <div className="backdrop-opacity-10  container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl capitalize"><span className="text-primary">donate blood</span> and save life</h1>
                <p className="px-8 mt-8 mb-4 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                <div className="flex flex-wrap justify-center">
                    <Link to='/donors' className="px-8 py-3 m-2 text-lg font-semibold rounded-xl btn-primary capitalize">Donars</Link>
                </div>
            </div>
        </section >
    );
};

export default Banner;