import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMovies = createAsyncThunk("movieslice/getMovies", async () => {
    try {
        const response = await fetch("http://localhost:4000/movies");
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching movies:", error.message);
    }
});

export const getPopularMovies = createAsyncThunk("movieslice/getPopularMovies", async () => {
    try {
        const response = await fetch("http://localhost:4000/popularMovies");
        const data = await response.json();
        console.log("Fetched Popular:", data);

        return data;
    } catch (error) {
        console.error("Error fetching popular movies:", error.message);
    }
});

export const getTopRateMovies = createAsyncThunk("movieslice/getTopRateMovies", async () => {
    try {
        const response = await fetch("http://localhost:4000/topRateMovies");
        const data = await response.json();

        console.log("Fetched TopRated:", data);


        return data;
    } catch (error) {
        console.error("Error fetching top-rated movies:", error.message);
    }
});

const movieslice = createSlice({
    name: "movieslice",
    initialState: {
        movies: [],
        popularMovies: [],
        topRatedMovies: [],

    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Get All Movies
            .addCase(getMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movies = action.payload;
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            // Get Popular Movies
            .addCase(getPopularMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getPopularMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.popularMovies = action.payload;
            })
            .addCase(getPopularMovies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            // Get Top-Rated Movies
            .addCase(getTopRateMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getTopRateMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.topRatedMovies = action.payload;
            })
            .addCase(getTopRateMovies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});
export const { } = movieslice.actions;
export default movieslice.reducer;

