import * as Yup from "yup";

const validationSchema = Yup.object({
  title: Yup.string()
    .min(1, "Min be 1 characters or less")
    .required("Required"),
  body: Yup.string().min(1, "Min be 1 characters or less").required("Required"),
});

export default validationSchema;
