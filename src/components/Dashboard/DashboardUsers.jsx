import React, { useEffect, useState } from "react";
import { useStateValue } from '../context/StateProvider';
import { motion } from "framer-motion";
import moment from "moment";
import { changingUserRole, getAllUsers, removeUser } from "../api";
import { actionType } from "../context/reducer";
import { MdDelete } from "react-icons/md"

export const DashboardUserCard = ({ data, index }) => {

    const [{ user, allUsers }, dispatch] = useStateValue();
    const [isUserRoleUpdated, setIsUserRoleUpdated] = useState(false);
    const createdAt = moment(new Date(data.createdAt)).format("MMMM Do YYYY");

    const updateUserRole = (userId, role) => {
        setIsUserRoleUpdated(false)
        changingUserRole(userId, role).then((res) => {
            if (res) {
                getAllUsers().then((data) => {
                    dispatch({
                        type: actionType.SET_ALL_USERS,
                        allUsers: data.data
                    })
                })
            }
        })
    }
    // Delete User
    const deleteUser = (userId) => {
        //console.log(userId);
        removeUser(userId).then((res) => {
            if (res) {
                getAllUsers().then((data) => {
                    dispatch({
                        type: actionType.SET_ALL_USERS,
                        allUsers: data.data
                    })
                })
            }
        })
    }


    return (
        <motion.div key={index}
            className='relative w-full rounded-md flex items-center justify-between py-4 bg-lightOverlay
            cursor-pointer hover:bg-card hover:shadow-md'
        >


            {data._id !== user?.user._id && (

                <motion.div
                    whileTap={{ scale: 0.75 }}
                    className="absolute left-4 w-8 h-8 rounded-md flex items-center justify-center bg-gray-200"
                    onClick={() => deleteUser(data._id)}
                >
                    <MdDelete className="text-xl text-red-400 hover:text-red-500" />
                </motion.div>
            )}

            {/* User image */}
            <div className='w-275 min-w-[160px] flex items-center justify-center'>
                <img src={data.imageURL} referrerPolicy="no-referrer" alt=" " className='w-10 h-10 object-cover rounded-md min-w-[40px] shadow-md' />
            </div>

            {/* User Name */}
            <p className='text-base text-textColor w-275 win-w-[160px] text-center'>{data.name}</p>
            <p className='text-base text-textColor w-275 win-w-[160px] text-center'>{data.email}</p>
            <p className='text-base text-textColor w-275 win-w-[160px] text-center'>{data.email_verified ? "True" : "False"}</p>
            <p className='text-base text-textColor w-275 win-w-[160px] text-center'>{createdAt}</p>

            {/* Admin or User select */}
            <div className='w-275 min-w-[160px] text-center flex items-center justify-center gap-6 relative'>
                <p className='text-base text-textColor text-center'>{data.role}</p>

                {
                    data._id !== user?.user._id && (
                        <motion.p whileTap={{ scale: 0.75 }} className='text-[10px] font-semibold text-textColor px-1 
                        bg-purple-200 rounded-sm hover:shadow-md' onClick={() => setIsUserRoleUpdated(true)}>
                            {data.role === "admin" ? "User" : "Admin"}
                        </motion.p>
                    )
                }

                {isUserRoleUpdated && (
                    <motion.div

                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}

                        className='absolute z-10 top-6 right-4 p-4 flex items-start flex-col gap-4 bg-white shadow-xl rounded-md'>
                        <p className='text-textColor text-[12px] font-semibold'>Are you shure, do you want to mark the user as
                            <span>{data.role === "admin" ? "User" : "Admin"} </span> ?
                        </p>

                        <div className='flex items-center gap-4'>
                            <motion.button whileTap={{ scale: 0.75 }} className='outline-none border-none text-sm px-4 py-1 
                            rounded-md bg-violet-200 text-black hover:shadow-md'
                                onClick={() => updateUserRole(data._id, data.role === "admin" ? "user" : "admin")}
                            >
                                Yes
                            </motion.button>

                            <motion.button whileTap={{ scale: 0.75 }} className='outline-none border-none text-sm px-4 py-1 
                            rounded-md bg-gray-200 text-black hover:shadow-md' onClick={() => setIsUserRoleUpdated(false)}>
                                No
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </div>

        </motion.div>
    );
};


const DashboardUsers = () => {

    const [{ allUsers }, dispatch] = useStateValue();
    return (
        <div className='w-full p-4 flex items-center justify-center flex-col'>

            {/* Filters */}

            {/* Tabular data form */}
            <div className='relative w-full py-12 min-h-[400px] overflow-x-scroll my-4 flex flex-col items-center
            justify-start p-4 border border-gray-300 rounded-md gap-3'>
                {/* Total count of the user */}
                <div className='absolute top-4 left-4'>
                    <p className='text-sm font-semibold'>
                        Count: <span className='text-xl font-bold text-textColor'>{allUsers?.lenght}</span>
                    </p>
                </div>


                {/* Table heading */}
                <div className='w-full min-w-[750px] flex items-center justify-between'>
                    <p className='text-sm text-textColor font-semibold w-275 min-w-[160px] text-center'>Image</p>

                    <p className='text-sm text-textColor font-semibold w-275 min-w-[160px] text-center'>Name</p>

                    <p className='text-sm text-textColor font-semibold w-275 min-w-[160px] text-center'>Email</p>

                    <p className='text-sm text-textColor font-semibold w-275 min-w-[160px] text-center'>Verified</p>

                    <p className='text-sm text-textColor font-semibold w-275 min-w-[160px] text-center'>Created</p>

                    <p className='text-sm text-textColor font-semibold w-275 min-w-[160px] text-center'>Role</p>
                </div>

                {/* Table body content */}

                {
                    allUsers && (
                        allUsers?.map((data, i) => (
                            <DashboardUserCard data={data} index={i} />
                        ))
                    )
                }

            </div>
        </div>
    )
}




export default DashboardUsers