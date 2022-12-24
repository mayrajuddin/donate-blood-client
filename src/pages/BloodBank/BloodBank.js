import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../Component/Spinner/Spinner';

const BloodBank = () => {
    const bloodUrl = `${process.env.REACT_APP_API_URI}/bloodSample`;
    const { data: bloodCollections, isLoading } = useQuery(
        ['Donars'],
        async () => {
            const res = await fetch(bloodUrl)
            const data = await res.json()
            return data

        })
    if (isLoading) {
        return <Spinner />
    }
    return (
        <div className='py-8'>
            <div className="container mx-auto">
                <h3 className="text-3xl capitalize font-bold py-4">blood bank</h3>
                <div className="grid grid:cols-1 lg:grid-cols-4 gap-5">
                    {
                        bloodCollections.map(blood => <div className="border rounded-md bg-[#243346] p-4 capitalize text-white shadow-md">
                            <p className='text-center font-bold text-xl text-primary'> {blood.group} </p>
                            <p>collection date: {blood.collectDate}</p>
                            <p>expriry date: {blood.expiryDate} </p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BloodBank;