import React from 'react'
import { NavLink, useParams } from 'react-router-dom'



const Header = () => {
  const { id } = useParams();

  return (
    <div className='bg-black text-white flex justify-between items-baseline px-4 py-2'>
      <h1 className='text-2xl'>Logo</h1>
      <nav className='space-x-5'>
        <NavLink className={
          (n) => {
            const { isActive } = n;
            return isActive === true ? 'text-pink-700' : 'text-white';
          }
        } to='/about-page' >About</NavLink>
        <NavLink to='/add-course'>Add Course</NavLink>
        <NavLink to='/add-meeting'>Add Meeting</NavLink>
        <NavLink to='/add-upcoming-meeting'>Add Upcoming Meeting</NavLink>



      </nav>

    </div>
  )
}

export default Header



