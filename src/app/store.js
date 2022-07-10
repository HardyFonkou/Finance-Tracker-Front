import { configureStore } from '@reduxjs/toolkit';
import fluxReducer from '../features/flux/fluxSlice'

export const store = configureStore({
  reducer: {
    flux: fluxReducer,
  },
});
