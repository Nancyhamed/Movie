
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
})



const movieslice = createSlice({
    name: "movieslice",
    initialState: {
        movies: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movies = action.payload;
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload.message;
            });
    }
});
export const { } = movieslice.actions;
export default movieslice.reducer;