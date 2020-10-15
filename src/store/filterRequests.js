import { createSlice } from '@reduxjs/toolkit';

export const filterRequests = createSlice({
  name: 'filterRequests',
  initialState: {
    numRequest: '',
    clientName: ''
  },
  reducers: {
    handleFilter(state, { payload }) {
      state[payload.name] = payload.value
    }
  }
});

export const { handleFilter } = filterRequests.actions;

export const filterRequestsSelector = state => state.filterRequests;

export default filterRequests.reducer;