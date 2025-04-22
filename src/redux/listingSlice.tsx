// store/slices/listingSlice.js
import {createSlice} from '@reduxjs/toolkit';

const listingSlice = createSlice({
  name: 'listings',
  initialState: {
    listings: [],
  },
  reducers: {
    addListing: (state, action) => {
      state.listings.push(action.payload);
    },
  },
});

export const {addListing} = listingSlice.actions;
export default listingSlice.reducer;
