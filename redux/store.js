import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

//import rootReducer from './reducers'; // Import your other reducers
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  // middleware: [...getDefaultMiddleware(), thunk],
});

