import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Alert } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { API } from "../constants/api.js";
import axios from "axios";
import { AuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  email: yup.string().required("Please enter your email address").email("Please enter a valid email address"),
  password: yup.string().required("Please enter a password").min(8, "Password must be 8 characters or more"),
});

export default function SignIn() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [isSubmitting, setSubmitting] = useState(false);
  const [signInError, setSignInError] = useState(null);
  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate("/", { replace: true });
    }
  }, [auth, navigate]);

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const response = await axios.post(API, data);
      if (response.status === 200) {
        localStorage.setItem("token", JSON.stringify(response.data));
        setAuth(response.data);
        setSignInError(null);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setSignInError(error.response.data.errors[0].message);
    } finally {
      setSubmitting(false);
      reset();
    }
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
        <button>{isSubmitting ? "Signing in.." : "Sign In"}</button>
        {signInError && <Alert severity="warning">{signInError.toString()}</Alert>}
      </form>
    </>
  );
}
