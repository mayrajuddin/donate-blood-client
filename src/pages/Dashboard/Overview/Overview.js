import React from 'react';
import { useContext } from 'react';
import { authContext } from '../../../AuthContext/AuthProvider';

const Overview = () => {
    const { user } = useContext(authContext)
    return (
        <div>
            <h4 className="text-4xl font-bold capitalize">wellcome to dashboard {user?.displayName}</h4>
        </div>
    );
};

export default Overview;