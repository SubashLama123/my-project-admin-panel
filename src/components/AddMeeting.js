import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import * as Yup from 'yup';
import { useAddMeetingMutation } from "../features/meetingApi";
import { toast } from "react-toastify";

const AddMeeting = () => {
  const [addMeeting, { isLoading }] = useAddMeetingMutation();
  const nav = useNavigate();

  const valSchema = Yup.object({
    meeting_name: Yup.string().required('Meeting name is required'),
    meeting_detail: Yup.string().required('Meeting detail is required'),
    meeting_image: Yup.string().required('Meeting image is required'),
    meeting_price: Yup.number().required('Meeting price is required').positive('Meeting price must be a positive number'),
    meeting_date: Yup.date().required('Meeting date is required').typeError('Invalid date format'),
    category: Yup.string().required('Category is required'),
  });

  const formik = useFormik({
    initialValues: {
      meeting_name: '',
      meeting_detail: '',
      meeting_image: '',
      meeting_price: '',
      meeting_date: '',
      category: '',
    },
    onSubmit: async (values) => {
      try {
        await addMeeting(values).unwrap();
        toast.success('Meeting added successfully');
        nav(-1);
      } catch (err) {
        toast.error(err.data?.message || 'An error occurred');
      }
    },
    validationSchema: valSchema,
    validateOnBlur: true,
    validateOnChange: false, // Optional: Set to true if you want to validate on change as well
  });

  return (
    <Card className="py-5 px-10 max-w-lg mt-7 border-[1px] border-gray-700 mx-auto" color="transparent" shadow={true}>
      <Typography variant="h4" color="blue-gray">
        Add Your Meeting
      </Typography>

      <form onSubmit={formik.handleSubmit} className="mt-6 mb-2">
        <div className="mb-4 flex flex-col gap-6">
          <div>
            <Input
              onChange={formik.handleChange}
              size="lg"
              label="Meeting Name"
              type="text"
              name="meeting_name"
              value={formik.values.meeting_name}
              onBlur={formik.handleBlur}
            />
            {formik.errors.meeting_name && formik.touched.meeting_name && (
              <h1 className="mt-2 text-pink-700">{formik.errors.meeting_name}</h1>
            )}
          </div>
          <div>
            <Input
              onChange={formik.handleChange}
              size="lg"
              label="Meeting Detail"
              type="text"
              name="meeting_detail"
              value={formik.values.meeting_detail}
              onBlur={formik.handleBlur}
            />
            {formik.errors.meeting_detail && formik.touched.meeting_detail && (
              <h1 className="mt-2 text-pink-700">{formik.errors.meeting_detail}</h1>
            )}
          </div>
          <div>
            <Input
              onChange={formik.handleChange}
              size="lg"
              label="Meeting Image"
              type="text"
              name="meeting_image"
              value={formik.values.meeting_image}
              onBlur={formik.handleBlur}
            />
            {formik.errors.meeting_image && formik.touched.meeting_image && (
              <h1 className="mt-2 text-pink-700">{formik.errors.meeting_image}</h1>
            )}
          </div>
          <div>
            <Input
              onChange={formik.handleChange}
              size="lg"
              label="Meeting Price"
              type="number"
              name="meeting_price"
              value={formik.values.meeting_price}
              onBlur={formik.handleBlur}
            />
            {formik.errors.meeting_price && formik.touched.meeting_price && (
              <h1 className="mt-2 text-pink-700">{formik.errors.meeting_price}</h1>
            )}
          </div>
          <div>
            <Input
              onChange={formik.handleChange}
              size="lg"
              label="Meeting Date"
              type="date"
              name="meeting_date"
              value={formik.values.meeting_date}
              onBlur={formik.handleBlur}
            />
            {formik.errors.meeting_date && formik.touched.meeting_date && (
              <h1 className="mt-2 text-pink-700">{formik.errors.meeting_date}</h1>
            )}
          </div>
          <div>
            <Input
              onChange={formik.handleChange}
              size="lg"
              label="Category"
              type="text"
              name="category"
              value={formik.values.category}
              onBlur={formik.handleBlur}
            />
            {formik.errors.category && formik.touched.category && (
              <h1 className="mt-2 text-pink-700">{formik.errors.category}</h1>
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

export default AddMeeting;
