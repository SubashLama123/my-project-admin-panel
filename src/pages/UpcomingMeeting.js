import React from 'react';

import { useGetupMeetingsQuery } from '../features/upcomingMeetingApi';

const UpcomingMeeting = () => {

  const { data, isLoading, error } = useGetupMeetingsQuery();

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    return <h1>Error loading Meetings</h1>;
  }

  return (
    <div className='p-10 grid grid-cols-4 mt-10 gap-5 items-start'>
      {data.map((upcomingMeeting, i) => (
        <div key={i} className="p-4">
          <div className="shadow-md bg-white rounded-2xl w-full h-80 text-center">
            <div className="icon mb-4 h-40 flex items-center justify-center">
              <img src={upcomingMeeting.upcomingMeeting_image} alt="" className="h-60 w-full object-cover " />
            </div>
            <div className='mt-10'>
              <h2 className='font-bold'>{upcomingMeeting.upcomingMeeting_name}</h2>
            </div>

            <div>

              <h3>{upcomingMeeting.upcomingMeeting_price}</h3>
            </div>
            <div>
              <p>{upcomingMeeting.upcomingMeeting_detail}</p>
            </div>
            <div>
              <p>
                {upcomingMeeting.upcomingMeeting_date}</p>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingMeeting;
