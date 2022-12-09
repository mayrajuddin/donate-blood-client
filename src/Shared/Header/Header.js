import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthContext/AuthProvider';

const Header = () => {
    const { logOut, user, } = useContext(authContext)
    const menuItems = <>
        <li> <Link to='/' className='capitalize font-semibold'> Home </Link> </li>
        <li> <Link to='/' className='capitalize font-semibold'> donate </Link> </li>
        <li> <Link to='/' className='capitalize font-semibold'> donors </Link> </li>
        <li> <Link to='/' className='capitalize font-semibold'> about us </Link> </li>
        {!user?.uid && <li> <Link to='/signin' className='capitalize font-semibold'> sign in </Link> </li>}
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
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/' className=" px-3 text-2xl font-bold text-primary">Donate Blood</Link>
                </div>
                <div className="flex-none">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-primary lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 text-primary">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {user?.photoURL ? <img src={user?.photoURL} alt="" /> : <img src="https://placeimg.com/80/80/people" alt='' />}
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {user?.uid && <li><p>{user?.displayName}</p></li>}
                            <li>
                                <Link className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link>Settings</Link></li>
                            {user?.uid && <li><button type='button' onClick={handleLogOut}>LogOut</button></li>}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;