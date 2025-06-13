import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import ticketsReducer from './tickets/ticketsSlice';
import { ticketsApi } from './tickets/ticketsApi';

export const store = configureStore({
   reducer: {
      tickets: ticketsReducer,
      [ticketsApi.reducerPath]: ticketsApi.reducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ticketsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
