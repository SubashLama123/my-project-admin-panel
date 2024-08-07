import React from 'react';
import { useGetMeetingsQuery } from '../features/meetingApi';

const MeetingPage = () => {

  const { data, isLoading, error } = useGetMeetingsQuery();

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    return <h1>Error loading Meetings</h1>;
  }

  return (
    <div className='p-10 grid grid-cols-4 mt-10 gap-5 items-start'>
      {data.map((meeting, i) => (
        <div key={i} className="p-4">
          <div className="shadow-md bg-white rounded-2xl w-full h-80 text-center">
            <div className="icon mb-4 h-40 flex items-center justify-center">
              <img src={meeting.meeting_image} alt="" className="h-60 w-full object-cover " />
            </div>
            <div className='mt-10'>
              <h2 className='font-bold'>{meeting.meeting_name}</h2>
            </div>

            <div>

              <h3>{meeting.meeting_price}</h3>
            </div>
            <div>
              <p>{meeting.meeting_detail}</p>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default MeetingPage;
