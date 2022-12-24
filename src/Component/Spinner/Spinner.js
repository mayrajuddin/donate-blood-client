import React from 'react';
import { PuffLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className='h-screen flex items-center justify-center bg-sky-50'>
            <PuffLoader
                color="#DD5236"
                size={70}
            />
        </div>
    );
};

export default Spinner;