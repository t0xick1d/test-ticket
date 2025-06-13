import { createSlice } from '@reduxjs/toolkit';
import { TicketsI } from '../../types/TicketsInterface';

export interface ticketStateI {
   data: TicketsI[];
}

const initialState: ticketStateI = {
   data: [],
};

export const ticketsSlice = createSlice({
   name: 'tickets',
   initialState,
   reducers: {},
});

// export const {} = ticketsSlice.actions;

export default ticketsSlice.reducer;
