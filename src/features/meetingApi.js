import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const meetingApi = createApi({
  reducerPath: 'meetingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://10.120.2.237:5000',
    headers: {
      'Accept': 'application/json'
    }
  }),
  endpoints: (builder) => ({
    getMeetings: builder.query({
      query: (query) => ({
        url: '/api/meetings',
        body: query,
        method: 'GET'
      }),
      providesTags: ['Meeting']
    }),

    addMeeting: builder.mutation({
      query: (query) => ({
        url: '/api/meetings',
        body: query,
        method: 'POST'
      }),
      invalidatesTags: ['Meeting']
    }),
  }),
});

export const { useAddMeetingMutation, useGetMeetingsQuery } = meetingApi;
