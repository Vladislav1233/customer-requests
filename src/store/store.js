import { configureStore } from '@reduxjs/toolkit';
import requests from 'store/requests';
import filterRequests from 'store/filterRequests';

export default configureStore({
  reducer: {
    requests: requests,
    filterRequests: filterRequests
  },
});