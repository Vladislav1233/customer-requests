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
    }
  }
});

export const { requestsLoading, requestsRecived, requestsFailure } = requestsSlice.actions;

export const getRequests = () => async dispatch => {
  dispatch(requestsLoading())

  try {
    const response = await fetch(`${API_URL}/535cffa9-67f4-41da-b105-3830f1293672`);
    const data = await response.json();

    dispatch(requestsRecived(data));

  } catch {
    dispatch(requestsFailure())
  }
}

export const requestsSelector = state => state.requests;

export default requestsSlice.reducer;


// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     increment: state => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1;
//     },
//     decrement: state => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },
// });

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// // The function below is called a thunk and allows us to perform async logic. It
// // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// // will call the thunk with the `dispatch` function as the first argument. Async
// // code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;

// export default counterSlice.reducer;