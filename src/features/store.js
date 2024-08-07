import { configureStore } from "@reduxjs/toolkit";
import { courseApi } from "./courseApi";
import { meetingApi } from "./meetingApi";
import { upcomingMeetingApi } from "./upcomingMeetingApi";


export const store = configureStore({
  reducer: {
    [courseApi.reducerPath]: courseApi.reducer,
    [meetingApi.reducerPath]: meetingApi.reducer,
    [upcomingMeetingApi.reducerPath]: upcomingMeetingApi.reducer
  },
  middleware: (getDef) => getDef().concat([
    courseApi.middleware,
    meetingApi.middleware,
    upcomingMeetingApi.middleware
  ]),
});