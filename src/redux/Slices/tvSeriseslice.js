import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// Fetch all series
export const getSeries = createAsyncThunk("tvSeriseslice/getSeries", async () => {

    try {
        const response = await fetch("http://localhost:4000/series");
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching Series:", error.message);
        throw error;
    }
});

// Fetch popular series

export const getPopularSeries = createAsyncThunk("tvSeriseslice/getPopularSeries", async () => {

    try {
        const response = await fetch("http://localhost:4000/popularseries");
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching Popular Series:", error.message);
        throw error;
    }
});

// Fetch top-rated series

export const getTopRateSeries = createAsyncThunk("tvSeriseslice/getTopRateSeries", async () => {

    try {
        const response = await fetch("http://localhost:4000/topRateseries");
        const data = await response.json();
        console.log("Fetched data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching Top-Rated Series:", error.message);
        throw error;
    }
});

const tvSeriseslice = createSlice({
    name: "tvSeriseslice",
    initialState: {
        tvSerise: [],
        popularSerise: [],
        topRatedSerise: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // All Series
            .addCase(getSeries.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSeries.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tvSerise = action.payload;
            })
            .addCase(getSeries.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            // Popular Series
            .addCase(getPopularSeries.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getPopularSeries.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.popularSerise = action.payload; 

            })
            .addCase(getPopularSeries.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            // Top-Rated Series
            .addCase(getTopRateSeries.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getTopRateSeries.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.topRatedSerise = action.payload;
            })
            .addCase(getTopRateSeries.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});


export const { } = tvSeriseslice.actions;
export default tvSeriseslice.reducer;

