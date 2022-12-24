import React from 'react';
import { Link } from 'react-router-dom';
import { HiBars3CenterLeft, } from "react-icons/hi2";

const DashboardNav = () => {
    return (
        <header>
            <div className="navbar bg-base-100 justify-between">
                <div className="navbar-start">
                    <Link to='/' className=" px-3 text-2xl font-bold text-primary">Donate Blood</Link>
                </div>
                <div className="navbar-end">
                    <label htmlFor="dashboard-drawer" className="btn focus:bg-transparent  drawer-button lg:hidden"> <HiBars3CenterLeft size={24} /> </label>
                </div>
            </div>
        </header>
    );
};

export default DashboardNav;