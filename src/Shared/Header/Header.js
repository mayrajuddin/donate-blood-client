import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';
import { FaTelegramPlane } from 'react-icons/fa';


const Header = () => {
    const { logOut, user, } = useContext(authContext)
    const menuItems = <>
        <li> <Link to='/' className='capitalize font-semibold'> Home </Link> </li>
        <li> <Link to='/' className='capitalize font-semibold'> donate </Link> </li>
        <li> <Link to='/donors' className='capitalize font-semibold'> donors </Link> </li>
        <li> <Link to='/' className='capitalize font-semibold'> about us </Link> </li>
    </>
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <header>
            <div className="navbar bg-base-100 justify-between">
                <div className="navbar-start">
                    <Link to='/' className=" px-3 text-2xl font-bold text-primary">Donate Blood</Link>
                </div>
                <div className="navbar-center">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-primary lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 text-primary">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    {!user?.uid &&
                        <div className="">
                            <ul className="menu menu-horizontal p-0 text-primary gap-2">
                                <li> <Link to='/signin' className='capitalize font-semibold border border-primary rounded-md'> sign in </Link> </li>
                                <li> <Link to='/signup' className='capitalize font-semibold bg-primary text-white rounded-md'> sign up </Link> </li>
                            </ul>
                        </div>
                    }
                    {user?.uid &&
                        <div className='dropdown dropdown-end'>
                            <label tabIndex={5} className="btn btn-ghost btn-circle pl-2 hover:bg-transparent">
                                <div className="w-10 rounded-full text-center">
                                    <FaTelegramPlane size={24} className="text-primary" />
                                </div>
                            </label>
                            <ul tabIndex={5} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li className=' '>
                                    <label htmlFor="chat-modal" className="btn btn-ghost hover:bg-primary hover:text-white">chat</label>
                                </li>
                                <li className='duration-500 ease-linear'>

                                    <label htmlFor="chat-modal" className="btn btn-ghost hover:bg-primary hover:text-white">online request</label>
                                </li>
                                <li className='hover:bg-primary hover:text-white duration-500 ease-linear'>
                                    <label htmlFor="chat-modal" className="btn btn-ghost hover:bg-primary hover:text-white">offline request</label>
                                </li>
                            </ul>
                        </div>
                    }

                    {user?.uid && <>
                        <div className=" dropdown dropdown-end ml-2">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {user?.photoURL ? <img src={user?.photoURL} alt="" /> : <img src="https://placeimg.com/80/80/people" alt='' />}
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/profile' className="justify-between">
                                    Profile
                                </Link></li>
                                <li><Link to='/dashboard' className="justify-between">
                                    dashboard
                                </Link></li>
                                <li><button type='button' onClick={handleLogOut}>LogOut</button></li>
                            </ul>
                        </div>
                    </>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;