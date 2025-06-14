import { createSlice } from '@reduxjs/toolkit';
import { ticketsList } from '../../api';

export const ticketsSlice = createSlice({
   name: 'tickets',
   initialState: {
      data: ticketsList,
   },
   reducers: {},
});

// export const {} = ticketsSlice.actions;

export default ticketsSlice.reducer;
