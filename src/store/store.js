import { configureStore } from '@reduxjs/toolkit'; 
import { setupListeners } from '@reduxjs/toolkit/query';
import ticketsReducer from './tickets/ticketsSlice';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
   reducer: {
      ticketsReducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

setupListeners(store.dispatch);
