import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'constants/api';

export const requestsSlice = createSlice({
  name: 'requests',
  initialState: {
    loading: false,
    hasErrors: false,
    listRequest: [],
    filterListRequest: []
  },
  reducers: {
    requestsLoading(state) {
      state.loading = true;
    },

    requestsRecived(state, { payload }) {
      state.loading = false;
      state.listRequest = payload;
      state.filterListRequest = payload;
    },

    requestsFailure(state) {
      state.loading = false;
      state.hasErrors = true;
    },

    filterDataRequests(state, { payload }) {
      state.filterListRequest = payload;
    }
  }
});

export const { requestsLoading, requestsRecived, requestsFailure, filterDataRequests } = requestsSlice.actions;

export const getRequests = () => async dispatch => {
  dispatch(requestsLoading())

  try {
    const response = await fetch(`${API_URL}/a362ac5f-ece0-4f00-8043-dcfbb4a078b3`);
    const data = await response.json();

    dispatch(requestsRecived(data));

  } catch {
    dispatch(requestsFailure())
  }
}

export const requestsSelector = state => state.requests;

export default requestsSlice.reducer;