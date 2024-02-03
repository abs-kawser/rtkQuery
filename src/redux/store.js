// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { api } from './api';
import { productApi } from './productApi';
const rootReducer = combineReducers({
  // [api.reducerPath]: api.reducer,
  [productApi.reducerPath]: productApi.reducer,
  // ... other reducers
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat( productApi.middleware),
});



// export const store = configureStore({
//   reducer: {
//     [api.reducerPath]: api.reducer,
//     [productApi.reducerPath]: productApi.reducer,


//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware, productApi.middleware),
// });
