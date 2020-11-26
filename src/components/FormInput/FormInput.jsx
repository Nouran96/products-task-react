import { Field, ErrorMessage } from "formik";

const FormInput = ({ name, label, placeholder, ...rest }) => {
  return (
    <div className="form-group row align-items-baseline">
      <label htmlFor={name} className="col-md-3 text-md-right text-center">
        {label}
      </label>
      <div className="col-md-9 px-0 d-flex flex-column">
        <Field
          id={name}
          name={name}
          className="form-control"
          placeholder={placeholder}
          {...rest}
        />
        <ErrorMessage name={name}>
          {(msg) => <div className="mt-2 error-msg">{msg}</div>}
        </ErrorMessage>
      </div>
    </div>
  );
};

export default FormInput;
