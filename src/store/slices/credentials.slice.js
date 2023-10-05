import { createSlice } from '@reduxjs/toolkit';

export const credentialSlice = createSlice({
    name: 'credentials',
    initialState: null,
    reducers: {
       setCredentialSlices: (state ,action ) => action.payload
    }
})

export const { setCredentialSlices } = credentialSlice.actions;

export default credentialSlice.reducer;
