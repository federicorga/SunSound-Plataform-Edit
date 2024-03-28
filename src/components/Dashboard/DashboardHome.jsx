import React, { useEffect } from 'react'
import { useStateValue } from '../context/StateProvider';
import { getAllAlbums, getAllArtist, getAllSongs, getAllUsers } from '../api';
import { bgColors } from '../utils/styles';
import { actionType } from '../context/reducer';
import { FaUsers } from 'react-icons/fa';
import { GiLoveSong, GiMusicalNotes } from "react-icons/gi";
import { RiUserStarFill } from "react-icons/ri";

// Propierties of Dashboard Card
export const DashboardCard = ({ icon, name, count }) => {

    const bg_Color = bgColors[parseInt(Math.random() * bgColors.length)]

    return (
        <div className='p-4 w-40 gap-3 h-auto rounded-lg shadow-md bg-violet-400'>
            {icon}
            <p className="text-xl text-textColor font-semibold">{name}</p>
            <p className="text-xl text-textColor">{count}</p>
        </div>
    );
};

const DashboardHome = () => {
    const [{ allUsers, allSongs, allArtists, allAlbums }, dispatch] = useStateValue();

    useEffect(() => {
        if (!allUsers) {
            getAllUsers().then((data) => {
                dispatch({
                    type: actionType.SET_ALL_USERS,
                    //allUsers: data.data
                });
            });
        }

        if (!allArtists) {
            getAllArtist().then((data) => {
                dispatch({
                    type: actionType.SET_ALL_ARTISTS,
                    //allArtist: data.data,
                });
            });
        }

        if (!allAlbums) {
            getAllAlbums().then((data) => {
                dispatch({
                    type: actionType.SET_ALL_ALBUMS,
                    //allAlbums: data.data,
                });
            });
        }


        if (!allSongs) {
            getAllSongs().then((data) => {
                dispatch({
                    type: actionType.SET_ALL_SONGS,
                    //allSongs: data.data,
                });
            });
        }

    }, []);

    return (
        <div className="w-full p-6 flex items-center justify-evenly flex-wrap">
            {/* prettier-ignore */}
            <DashboardCard icon={<FaUsers className="text-3xl text-textColor" />} name={"Users"} count={allUsers?.length > 0 ? allUsers?.length : 0} />

            {/* prettier-ignore */}
            <DashboardCard icon={<GiLoveSong className="text-3xl text-textColor" />} name={"Songs"} count={allSongs?.length > 0 ? allSongs?.length : 0} />

            {/* prettier-ignore */}
            <DashboardCard icon={<RiUserStarFill className="text-3xl text-textColor" />} name={"Artist"} count={allArtists?.length > 0 ? allArtists?.length : 0} />

            {/* prettier-ignore */}
            <DashboardCard icon={<GiMusicalNotes className="text-3xl text-textColor" />} name={"Album"} count={allAlbums?.length > 0 ? allAlbums?.length : 0} />
        </div>
    )
}

export default DashboardHome