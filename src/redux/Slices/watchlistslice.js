import { createSlice } from "@reduxjs/toolkit";
const loadFromLocalStorage = () => {
    const savedWatchlist = localStorage.getItem('watchlist');
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
};

const saveToLocalStorage = (watchlist) => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
};

const watchlistslice = createSlice({
    name: "watchlist",
    initialState: loadFromLocalStorage(),
    reducers: {

        addToWatchlist: (state, action) => {
            const isExist = state.find(item => item._id === action.payload._id);
            if (!isExist) {
                state.push(action.payload);
                saveToLocalStorage(state);
            }

        },

        deleteFromWatchlist: (state, action) => {
            const updatedWatchlist = state.filter((product) => product._id !== action.payload._id);
            saveToLocalStorage(updatedWatchlist);
            return updatedWatchlist;
        },



    },
});
export const { addToWatchlist, deleteFromWatchlist } = watchlistslice.actions;
export default watchlistslice.reducer;