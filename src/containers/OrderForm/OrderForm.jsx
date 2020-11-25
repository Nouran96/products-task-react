import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./OrderForm.scss";

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
        {({ status }) => (
          <Form className="my-5">
            <div className="form-group row align-items-baseline">
              <label
                htmlFor="address"
                className="col-md-3 text-md-right text-center"
              >
                Address
              </label>
              <div className="col-md-9 px-0 d-flex flex-column">
                <Field
                  id="address"
                  name="address"
                  className="form-control"
                  placeholder="Building 30, New Cairo, Egypt"
                />
                <ErrorMessage name="address">
                  {(msg) => <div className="mt-2 error-msg">{msg}</div>}
                </ErrorMessage>
              </div>
            </div>

            <div className="form-group row align-items-baseline">
              <label
                htmlFor="phone"
                className="col-md-3 text-md-right text-center"
              >
                Phone
              </label>
              <div className="col-md-9 px-0 d-flex flex-column">
                <Field
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder="01243452465"
                />
                <ErrorMessage name="phone">
                  {(msg) => <div className="mt-2 error-msg">{msg}</div>}
                </ErrorMessage>
              </div>
            </div>

            <div className="form-group row align-items-baseline">
              <label
                htmlFor="email"
                className="col-md-3 text-md-right text-center"
              >
                Email
              </label>
              <div className="col-md-9 px-0 d-flex flex-column">
                <Field
                  id="email"
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="mail@mail.com"
                />
                <ErrorMessage name="email">
                  {(msg) => <div className="mt-2 error-msg">{msg}</div>}
                </ErrorMessage>
              </div>
            </div>
            <div className="form-group row justify-content-end mt-5">
              <button type="submit" className="btn btn-dark btn-sm">
                Submit
              </button>
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
