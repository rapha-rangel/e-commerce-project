import { configureStore } from '@reduxjs/toolkit';
import listReducer from '../reducers/list';

export default configureStore({
  reducer: {
    list: listReducer,
  },
});