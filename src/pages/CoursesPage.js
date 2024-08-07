import React from 'react';
import { useGetCoursesQuery, useDeleteCourseMutation } from '../features/courseApi';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const CoursesPage = () => {
  const { data, isLoading, error } = useGetCoursesQuery();
  const [deleteCourse] = useDeleteCourseMutation();
  const nav = useNavigate();

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    return <h1>Error loading courses</h1>;
  }

  const handleDelete = async (id) => {
    try {
      await deleteCourse(id).unwrap();
      toast.success('Course deleted successfully');
    } catch (err) {
      toast.error('Error deleting course');
    }
  };

  return (
    <div className='p-10 grid grid-cols-4 mt-10 gap-5 items-start'>
      {data.map((course, i) => (
        <div key={i} className="p-4">


          <div className="shadow-md bg-white rounded-2xl w-full h-80 ">
            <div className="icon mb-4 h-40  ">
              <img src={course.course_image} alt="" className="h-56 w-full object-cover " />
            </div>
            <div className='mt-20 '>
              <h2 className='font-bold text-2xl'>{course.course_name}</h2>
            </div>
            <div>
              <h3>{course.course_price}</h3>
            </div>

            <div className='flex justify-between p-2'>
              <button onClick={() => nav(`/update-course/${course._id}`)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Update
              </button>
              <button onClick={() => handleDelete(course._id)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded ml-2">
                Delete
              </button>
            </div>

          </div>

        </div>
      ))}
    </div>
  );
}

export default CoursesPage;
