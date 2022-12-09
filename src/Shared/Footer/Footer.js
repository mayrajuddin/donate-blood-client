import React from 'react';
import { FaFacebookF, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className='bg-[#243346] text-white text-center py-4'>
            <div className="container mx-auto">
                <div className="">
                    <h2 className="capitalize font-bold text-3xl mb-4">contact us</h2>
                    <div className='flex justify-center pb-3'>
                        <a href='https://www.facebook.com/' target='blank' className='mr-3 text-white text-lg hover:text-primary '><FaFacebookF /></a>
                        <a href='https://www.facebook.com/' target='blank' className='text-white text-lg hover:text-primary '><FaTwitter /></a>
                    </div>
                </div>
            </div>
            <h3 className="text-xl text-center font-semibold border-t pt-4 border-gray-600"> &copy; copyright by donate blood</h3>
        </footer>
    );
};

export default Footer;