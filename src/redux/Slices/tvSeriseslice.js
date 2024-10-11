
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSeries = createAsyncThunk("tvSeriseslice/getSeries", async () => {

    const response = await fetch("http://localhost:4000/series");
    const data = await response.json();
    console.log("Fetched data:", data);
    return data;
})


const tvSeriseslice = createSlice({
    name: "tvSeriseslice",
    initialState: {
        tvSerise: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSeries.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSeries.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tvSerise = action.payload;
            })
            .addCase(getSeries.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});
export const { } = tvSeriseslice.actions;
export default tvSeriseslice.reducer;