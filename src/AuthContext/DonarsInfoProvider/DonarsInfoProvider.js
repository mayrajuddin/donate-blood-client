import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { createContext } from "react";

export const DonarsContext = createContext()
const DonarsInfoProvider = ({ children }) => {


    const url = `${process.env.REACT_APP_API_URI}/donars`;

    const { data: donars, isLoading } = useQuery(
        ['Donars'],
        async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data

        })
    const donarsInfo = { donars, isLoading }
    console.log(donars);
    return (
        <DonarsContext.Provider value={donarsInfo}>
            {children}
        </DonarsContext.Provider>
    )
};

export default DonarsInfoProvider;

