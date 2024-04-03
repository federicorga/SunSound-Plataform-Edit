export const actionType = {
    SET_USER: "SET_USER",
    SET_ALL_USERS: "SET_ALL_USERS",
    SET_ALL_ARTISTS: "SET_ALL_ARTISTS",
    SET_ALL_ALBUMS: "SET_ALL_ALBUMS",
    SET_ALL_SONGS : "SET_ALL_SONGS",

};

//Update context provider

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case actionType.SET_USER:
            return {
                ...state,
                user: action.user,
            };

        case actionType.SET_ALL_USERS:
            return{
                ...state,
                allUsers : action.allUsers,
            };
        
        case actionType.SET_ALL_ARTISTS:
            return{
                ...state,
                allArtists : action.allArtists,
            };

        case actionType.SET_ALL_ALBUMS:
            return{
                ...state,
                allAlbums : action.allAlbums,
            };

        case actionType.SET_ALL_SONGS:
            return{
                ...state,
                allSongs : action.allSongs,
            };
        

        default:
            return state;

    }

};

export default reducer;

