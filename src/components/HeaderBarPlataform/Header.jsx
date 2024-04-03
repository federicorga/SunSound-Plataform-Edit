import React, { useState } from 'react';
import { Logo } from '../assets/img';
import { NavLink, useNavigate } from 'react-router-dom';
import { isActiveStyles, isNotActiveStyles } from '../utils/styles';
import { FaCrown } from 'react-icons/fa';
import { useStateValue } from '../context/StateProvider';
import { getAuth } from 'firebase/auth';
import { app } from "../config/firebase.config";

import { motion } from 'framer-motion';

const Header = () => {
    const [{ user }, dispatch] = useStateValue();
    const [isMenu, setisMenu] = useState(false);

    const navigate = useNavigate();

    const logOut = () => {
        const firebaseAuth = getAuth(app);
        firebaseAuth
            .signOut()
            .then(() => {
                window.localStorage.setItem("auth", "false");
            })
            .catch((e) => console.log(e));
        navigate("/login", { replace: true });
    };
    return (
        <header className=' flex items-center w-full p-4 md:py-2 md:px-6'>
            <NavLink to={"/"}>
                <img src={Logo} alt="Logo" className='w-16' />

            </NavLink>

            <ul className='flex items-center justify-center ml-7'>
                <li className='mx-5 text-lg'><NavLink to={'/>home'} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Home</NavLink></li>
                <li className='mx-5 text-lg'><NavLink to={'/>musics'} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Musics</NavLink></li>
                <li className='mx-5 text-lg'><NavLink to={'/>premium'} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Premium</NavLink></li>
                <li className='mx-5 text-lg'><NavLink to={'/>contact'} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Contact Us</NavLink></li>
            </ul>


            <div
                onMouseEnter={() => setisMenu(true)}
                onMouseLeave={() => setisMenu(false)}
                className='flex items-center ml-auto cursor-pointer gap-2 relative'>
                <img src={user?.user.imageURL} className='w-12 h-12 min-w-[44px] object-cover rounded-full shadow-lg'
                    alt="" reffererPolicy='no-referrer' />

                <div className="flex flex-col">
                    <p className="text-textColor text-lg hover:text-headingColor font-semibold">
                        {user?.user.name}
                    </p>
                    <p className="flex items-center gap-2 text-xs text-gray-500 font-normal">
                        Premium Member.{" "}
                        <FaCrown className="text-xm -ml-1 text-yellow-500" />{" "}
                    </p>
                </div>

                {isMenu && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className='absolute z-10 flex flex-col p-3 top-12 right-0 w-275 gap-2 bg-card shadow-lg rounded-lg backdrop-blur-sm'>
                        <NavLink to={'/userProfile'}>
                            <p className='text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out'>
                                Profile
                            </p>

                        </NavLink>
                        <p className='text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out'>
                            My Favourites
                        </p>

                        <hr />

                        {user?.user.role === "admin" && (
                        <>
                            <NavLink to={"/dashboard/home"}>
                            <p className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out">
                                Dashboard
                            </p>
                            </NavLink>
                            <hr />
                        </>
                        )}


                        <p className='text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out' 
                            onClick={logOut}>
                            Sign Out
                        </p>
                    </motion.div>
                )}
            </div>

        </header>
    )
}

export default Header