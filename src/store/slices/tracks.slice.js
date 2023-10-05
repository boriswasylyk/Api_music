import { createSlice } from '@reduxjs/toolkit';

export const tracksSlice = createSlice({
    name: 'tracks',
    initialState: [],
    reducers: {
        setTracksSlice: (state, action) => {
            return action.payload;
        },
        addTrack: (state, action) => {
            if (state.findIndex(track => track.id === action.payload.id) === -1) {
                return [...state, action.payload];
            } else {
                return state;
            }
        },
        deleteTrack: (state, action) => {
            return state.filter(track => track.id !== action.payload);
        }
    }
});

export const { setTracksSlice, addTrack, deleteTrack } = tracksSlice.actions;

export default tracksSlice.reducer;




// https://www.linkedin.com/in/benjamin-flores-48541182/