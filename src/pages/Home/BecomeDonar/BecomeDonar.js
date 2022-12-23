import React from 'react';
import { Link } from 'react-router-dom';

const BecomeDonar = () => {
    return (
        <section className='bg-primary text-white py-8 text-center'>
            <div className="container mx-auto">
                <h2 className="capitalize font-bold text-3xl mb-4">donate blood</h2>
                <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illum, distinctio reiciendis accusamus ratione quam doloribus quis quas praesentium ea, itaque mollitia dolore animi velit aperiam! Labore recusandae ut perspiciatis.</p>
                <Link to='/donoradd' className='btn bg-gray-100 border-0 font-bold text-lg text-primary capitalize my-4'> become a life saver</Link>
            </div>
        </section>
    );
};

export default BecomeDonar;