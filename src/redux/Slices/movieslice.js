
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMovies = createAsyncThunk("movieslice/getMovies", async () => {

    const response = await fetch("http://localhost:3000/movies");
    const data = await response.json();
    console.log("Fetched data:", data);
    return data;
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
                state.error = action.payload;
            });
    }
});
export const { } = movieslice.actions;
export default movieslice.reducer;