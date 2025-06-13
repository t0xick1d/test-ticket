import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TicketsI } from '../../types/TicketsInterface';

export const ticketsApi = createApi({
   reducerPath: 'ticketsApi',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://keenethics-test-server.onrender.com/api/bicycle/',
   }),
   endpoints: (builder) => ({
      getSearchId: builder.query({
         query: () => `search`,
      }),
      getTickets: builder.query<TicketsI[], string>({
         query: (searchID) => `tickets/searchId=${searchID}`,
      }),
   }),
});

export const { useGetSearchIdQuery, useGetTicketsQuery } = ticketsApi;
