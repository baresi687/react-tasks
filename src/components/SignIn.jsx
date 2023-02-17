import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Alert } from "@mui/material";
import { useState } from "react";

const schema = yup.object({
  email: yup.string().required("Please enter your email address").email("Please enter a valid email address"),
  password: yup.string().required("Please enter a password").min(8, "Password must be 8 characters or more"),
});

function SignIn() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [isSubmitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign In</h1>
        <label>
          <input type="email" placeholder="Email" {...register("email", { required: true })} />
          {errors.email && <span className="input-error">{errors.email.message}</span>}
        </label>
        <label>
          <input type="password" placeholder="Password" {...register("password", { required: true })} />
          {errors.password && <span className="input-error">{errors.password.message}</span>}
        </label>
        <button>Submit</button>
        {isSubmitted && <Alert severity="success">Form submitted</Alert>}
      </form>
    </>
  );
}

export default SignIn;
