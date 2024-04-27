import { configureStore } from '@reduxjs/toolkit';
import lgtmListReducer from './lgtmListSlice';

export const store = configureStore({
  reducer: {
    lgtms: lgtmListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
