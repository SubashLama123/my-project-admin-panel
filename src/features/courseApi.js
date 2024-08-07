import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://10.120.2.237:5000',
    headers: {
      'Accept': 'application/json'
    }
  }),
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => '/api/courses',
      providesTags: ['Course']
    }),
    addCourse: builder.mutation({
      query: (course) => ({
        url: '/api/courses',
        method: 'POST',
        body: course,
      }),
      invalidatesTags: ['Course']
    }),
    deleteCourse: builder.mutation({
      query: (id) => ({
        url: `/api/courses/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Course']
    }),
    updateCourse: builder.mutation({
      query: ({ id, ...course }) => ({
        url: `/api/courses/${id}`,
        method: 'PUT',
        body: course,
      }),
      invalidatesTags: ['Course']
    }),
  }),
});

export const { useGetCoursesQuery, useAddCourseMutation, useDeleteCourseMutation, useUpdateCourseMutation } = courseApi;
