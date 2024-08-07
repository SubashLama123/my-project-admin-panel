import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import About from './pages/About'
import NotFound from './pages/NotFound'
import RootLayOut from './components/RootLayOut'
import AddCourse from './components/AddCourse'
import AddMeeting from './components/AddMeeting'
import UpcomingMeeting from './pages/UpcomingMeeting'
import AddUpcomingMeeting from './components/AddUpcomingMeeting'
import UpdateCourse from './components/UpdateCourse'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayOut />} >
          <Route index element={<HomePage />} />
          <Route path='add-course' element={<AddCourse />} />
          <Route path='update-course/:id' element={<UpdateCourse />} />
          <Route path='add-meeting' element={<AddMeeting />} />
          <Route path='add-upcoming-meeting' element={<AddUpcomingMeeting />} />
          <Route path='about-page' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
