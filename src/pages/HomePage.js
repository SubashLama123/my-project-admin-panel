import React from 'react'
import CoursesPage from './CoursesPage'
import MeetingPage from './MeetingPage'
import UpcomingMeeting from './UpcomingMeeting'

const HomePage = () => {
  return (
    <div>

      <div>
        <h2 className='text-center text-3xl'>This is meeting pages</h2>
        <CoursesPage />
      </div>




      <div>
        <h2 className='text-center text-3xl'>This is meeting pages</h2>
        <MeetingPage />
      </div>

      <div>
        <h2 className='text-center text-3xl'>This is upcoming Meeting pages</h2>
        <UpcomingMeeting />
      </div>





    </div>
  )
}

export default HomePage