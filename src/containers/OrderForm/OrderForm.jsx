import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./OrderForm.scss";
import FormInput from "../../components/FormInput/FormInput";
import ActionButton from "../../components/ActionButton/ActionButton";

const OrderForm = ({ history }) => {
  const submitForm = (values, { setSubmitting, setStatus }) => {
    console.log(JSON.stringify(values, null, 2));
    setSubmitting(false);
    setStatus("submitted");
    setTimeout(() => {
      history.push("/products");
    }, 1000);
  };

  const orderValidationSchema = Yup.object().shape({
    address: Yup.string().required("Required Field"),
    phone: Yup.number()
      .typeError("Phone must be a number")
      .positive("Phone can't be negative")
      .required("Required Field"),
    email: Yup.string()
      .email("Invalid Email Format")
      .required("Required Field"),
  });

  return (
    <div className="container mt-5">
      <h2 className="text-center">User Details</h2>
      <Formik
        initialValues={{ address: "", phone: "", email: "" }}
        validationSchema={orderValidationSchema}
        onSubmit={submitForm}
      >
        {({ status, isValid, isSubmitting }) => (
          <Form className="my-5">
            <FormInput
              name="address"
              label="Address"
              placeholder="Building 30, New Cairo, Egypt"
            />

            <FormInput name="phone" label="Phone" placeholder="12345678901" />

            <FormInput name="email" label="Email" placeholder="mail@mail.com" />

            <div className="form-group row justify-content-end mt-5">
              <ActionButton
                label="Submit"
                type="submit"
                disabled={!isValid || isSubmitting}
                variant="dark"
              />
            </div>

            {status === "submitted" && (
              <div className="form-group row justify-content-end">
                <span className="submit-msg">Successfully Submitted</span>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OrderForm;
