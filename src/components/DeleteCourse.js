import React from 'react';
import { useDeleteCourseMutation } from '../features/courseApi';
import { toast } from 'react-toastify';

const DeleteCourse = ({ courseId }) => {
  const [deleteCourse, { isLoading }] = useDeleteCourseMutation();

  const handleDelete = async () => {
    console.log(`Deleting course with ID: ${courseId}`);
    try {
      await deleteCourse(courseId).unwrap();
      toast.success('Course deleted successfully');
    } catch (error) {
      console.error('Failed to delete course:', error);
      toast.error('Failed to delete course');
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isLoading}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      {isLoading ? 'Deleting...' : 'Delete'}
    </button>
  );
};

export default DeleteCourse;
