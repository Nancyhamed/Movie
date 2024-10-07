import { configureStore } from "@reduxjs/toolkit";
import movieslice from "./Slices/movieslice";
import watchlistslice from "./Slices/watchlistslice";
import tvSeriseslice from "./Slices/tvSeriseslice";

export const store = configureStore({
    reducer: {
        movies: movieslice,
        watchlist: watchlistslice,
        tvSerise: tvSeriseslice,
    }
})
