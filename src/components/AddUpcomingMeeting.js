import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import * as Yup from 'yup';

import { toast } from "react-toastify";
import { useAddUpMeetingMutation } from "../features/upcomingMeetingApi";

const AddUpcomingMeeting = () => {
  const [addUp, { isLoading }] = useAddUpMeetingMutation();
  const nav = useNavigate();

  const valSchema = Yup.object({
    upcomingMeeting_name: Yup.string().required('Meeting name is required'),
    upcomingMeeting_detail: Yup.string().required('Meeting detail is required'),
    upcomingMeeting_image: Yup.string().required('Meeting image is required'),
    upcomingMeeting_price: Yup.number().required('Meeting price is required'),
    upcomingMeeting_date: Yup.string().required('Meeting date is required').typeError('Invalid date format'),

  });

  const formik = useFormik({
    initialValues: {
      upcomingMeeting_name: '',
      upcomingMeeting_detail: '',
      upcomingMeeting_image: '',
      upcomingMeeting_price: '',
      upcomingMeeting_date: '',

    },
    onSubmit: async (val) => {
      try {
        await addUp({
          upcomingMeeting_name: val.upcomingMeeting_name,
          upcomingMeeting_detail: val.upcomingMeeting_detail,
          upcomingMeeting_image: val.upcomingMeeting_image,
          upcomingMeeting_price: Number(val.upcomingMeeting_price),
          upcomingMeeting_date: val.upcomingMeeting_date,

        }).unwrap();
        toast.success('Meeting added successfully');
        nav(-1);
      } catch (err) {
        console.log(err);
        toast.error(err.data?.message || 'An error occurred');
      }
    },
    validationSchema: valSchema,

  });

  return (
    <Card className="py-5 px-10 max-w-lg mt-7 border-[1px] border-gray-700 mx-auto" color="transparent" shadow={true}>
      <Typography variant="h4" color="blue-gray">
        Add Your  UpcomingMeeting
      </Typography>

      <form onSubmit={formik.handleSubmit} className="mt-6 mb-2">
        <div className="mb-4 flex flex-col gap-6">
          <div>
            <Input
              onChange={formik.handleChange}
              size="lg"
              label="Meeting Name"
              type="text"
              name="upcomingMeeting_name"
              value={formik.values.upcomingMeeting_name}
              onBlur={formik.handleBlur}
            />
            {formik.errors.upcomingMeeting_name && formik.touched.upcomingMeeting_name && (
              <h1 className="mt-2 text-pink-700">{formik.errors.upcomingMeeting_name}</h1>
            )}
          </div>
          <div>
            <Input
              onChange={formik.handleChange}
              size="lg"
              label="Meeting detail"
              type="text"
              name="upcomingMeeting_detail"
              value={formik.values.upcomingMeeting_detail}
              onBlur={formik.handleBlur}
            />

          </div>

          <div>
            <Input
              onChange={formik.handleChange}
              size="lg"
              label="Meeting Image"
              type="text"
              name="upcomingMeeting_image"
              value={formik.values.upcomingMeeting_image}
              onBlur={formik.handleBlur}
            />
            {formik.errors.upcomingMeeting_image && formik.touched.meeting_image && (
              <h1 className="mt-2 text-pink-700">{formik.errors.upcomingMeeting_image}</h1>
            )}
          </div>
          <div>
            <Input
              onChange={formik.handleChange}
              size="lg"
              label="Meeting Price"
              type="number"
              name="upcomingMeeting_price"
              value={formik.values.upcomingMeeting_price}
              onBlur={formik.handleBlur}
            />
            {formik.errors.upcomingMeeting_price && formik.touched.upcomingMeeting_price && (
              <h1 className="mt-2 text-pink-700">{formik.errors.upcomingMeeting_price}</h1>
            )}
          </div>
          <div>
            <Input
              onChange={formik.handleChange}
              size="lg"
              label="Meeting Date"
              type="date"
              name="upcomingMeeting_date"
              value={formik.values.upcomingMeeting_date}
              onBlur={formik.handleBlur}
            />
            {formik.errors.upcomingMeeting_date && formik.touched.upcomingMeeting_date && (
              <h1 className="mt-2 text-pink-700">{formik.errors.upcomingMeeting_date}</h1>
            )}
          </div>


        </div>

        <Button type="submit" className="mt-6" fullWidth disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </Card>
  );
}

export default AddUpcomingMeeting;
