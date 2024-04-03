import React from 'react';
import { motion } from "framer-motion";
import { IoTrash } from "react-icons/io5"

const SongCard = ({ data, index }) => {
    return (
        <motion.div className="relative w-40 min-w-210 px-2 py-4 cursor-pointer 
    hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center">
            <div className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden">
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={data.imageURL}
                    className="w-full h-full rounded-lg object-cover"

                />
            </div>

            {console.log(data)}

            <p className="text-base text-headingColor font-semibold my-2">
                {data.name?.length > 15 ? `${data.name.slice(0, 15)}...` : data.name}
                <span className="block text-sm text-gray-400 my-1">
                    {data.artist?.length > 15 ? `${data.artist.slice(0, 15)}...` : data.artist}
                </span>


            </p>


            <div className="w-full absolute bottom-2 right-2 flex items-center justify-between px-4">
                <motion.icon
                    whileTap={{ scale: 0.75 }}
                    className="text-base text-red-400 drop-shadow-md hover:text-red-600">
                    <IoTrash />
                </motion.icon>
            </div>

        </motion.div>

    );

};


export default SongCard