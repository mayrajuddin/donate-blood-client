import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import DashboardNav from '../pages/Dashboard/DashboardNav/DashboardNav';

const Dashboard = () => {
    return (
        <div>
            <DashboardNav />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-5 bg-slate-100">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <div className='px-7 py-3 w-44 bg-slate-300'>
                        <div className="text-lg font-bold">
                            <h2>Dashboard</h2>
                        </div>
                        <ul className='pt-2 pb-4 space-y-1  capitalize'>
                            <li className='hover:text-primary font-semibold'> <Link to='/dashboard' className=''>overview</Link> </li>
                            <li className='hover:text-primary font-semibold'><Link to='/dashboard/addblood' className=''>add blood</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;