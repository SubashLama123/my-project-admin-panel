import React from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useUpdateCourseMutation } from "../features/courseApi";
import { toast } from "react-toastify";
import { useNavigate, useParams } from 'react-router';

const UpdateCourse = () => {
  const [updateCourse, { isLoading }] = useUpdateCourseMutation();
  const nav = useNavigate();
  const { id } = useParams();

  const valSchema = Yup.object({
    course_name: Yup.string().required(),
    course_image: Yup.string().required(),
    course_price: Yup.number().required(),
  });

  const formik = useFormik({
    initialValues: {
      course_name: '',
      course_image: '',
      course_price: '',
    },
    onSubmit: async (val) => {
      try {
        const response = await updateCourse({ id, ...val }).unwrap();
        toast.success('Course updated successfully');
        nav(-1);
      } catch (err) {
        toast.error(err.data?.message);
      }
    },
    validationSchema: valSchema
  });

  return (
    <Card className="py-5 px-10 max-w-lg mt-7 border-[1px] border-gray-700 mx-auto" color="transparent" shadow={true}>
      <Typography variant="h4" color="blue-gray">
        Update Course
      </Typography>

      <form onSubmit={formik.handleSubmit} className="mt-6 mb-2 ">
        <div className="mb-1 flex flex-col gap-6">
          <div>
            <Input
              onChange={formik.handleChange}
              size="lg"
              label="Course Name"
              type="text"
              name="course_name"
              value={formik.values.course_name}
            />
            {formik.errors.course_name && formik.touched.course_name && <h1 className="mt-2 text-pink-700">{formik.errors.course_name}</h1>}
          </div>
          <div>
            <Input
              onChange={formik.handleChange}
              size="lg"
              label="Course Image"
              type="text"
              name="course_image"
              value={formik.values.course_image}
            />
            {formik.errors.course_image && formik.touched.course_image && <h1 className="mt-2 text-pink-700">{formik.errors.course_image}</h1>}
          </div>
          <div>
            <Input
              onChange={formik.handleChange}
              size="lg"
              label="Course Price"
              type="text"
              name="course_price"
              value={formik.values.course_price}
            />
            {formik.errors.course_price && formik.touched.course_price && <h1 className="mt-2 text-pink-700">{formik.errors.course_price}</h1>}
          </div>
        </div>
        <Button type="submit" className="mt-6" fullWidth>
          Submit
        </Button>
      </form>
    </Card>
  );
}

export default UpdateCourse;
