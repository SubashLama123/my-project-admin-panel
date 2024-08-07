import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const upcomingMeetingApi = createApi({
  reducerPath: 'upcomingMeetingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://10.120.2.237:5000',
    headers: {
      'Accept': 'application/json'

    }
  }),
  endpoints: (builder) => ({
    getupMeetings: builder.query({
      query: (query) => ({
        url: '/api/upcomingMeetings',
        body: query,
        method: 'GET'
      }),
      providesTags: ['upMeetings']
    }),

    addUpMeeting: builder.mutation({
      query: (query) => ({
        url: '/api/upcomingMeetings',
        body: query,
        method: 'POST'
      }),
      invalidatesTags: ['upMeetings']
    }),


  }),
});

export const { useGetupMeetingsQuery, useAddUpMeetingMutation } = upcomingMeetingApi;
