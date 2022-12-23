import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { createContext } from "react";

export const donarsContext = createContext()
const DonarsInfoProvider = ({ children }) => {
    const url = `${process.env.REACT_APP_API_URI}/donars`;

    const { data: donars, isLoading } = useQuery({
        queryKey: ['Products'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <div>loading........</div>
    }

    const donarsInfo = { donars }
    return (
        <donarsContext.Provider value={donarsInfo}>
            {children}
        </donarsContext.Provider>
    )
};

export default DonarsInfoProvider;

