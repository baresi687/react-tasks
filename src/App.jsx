import "./App.css";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Please enter your name").min(4, "Name must be 4 characters or more"),
  email: yup.string().required("Please enter your email address").email("Please enter a valid email address"),
  password: yup.string().required("Please enter a password").min(8, "Password must be 8 characters or more"),
  confirmPassword: yup
    .string()
    .required("Please confirm the password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

function App() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>React Hook Form</h1>
        <label>
          <input type="text" placeholder="Your name" {...register("name", { required: true })} />
          {errors.name && <span className="input-error">{errors.name.message}</span>}
        </label>
        <label>
          <input type="email" placeholder="Email" {...register("email", { required: true })} />
          {errors.email && <span className="input-error">{errors.email.message}</span>}
        </label>
        <label>
          <input type="password" placeholder="Password" {...register("password", { required: true })} />
          {errors.password && <span className="input-error">{errors.password.message}</span>}
        </label>
        <label>
          <input type="password" placeholder="Confirm Password" {...register("confirmPassword", { required: true })} />
          {errors.confirmPassword && <span className="input-error">{errors.confirmPassword.message}</span>}
        </label>
        <h2 className="skills-heading">Select skills</h2>
        <label>
          <Controller
            name="skills"
            control={control}
            render={({ field }) => (
              <Select
                id="skills"
                isMulti
                options={[
                  { value: "react", label: "React" },
                  { value: "angular", label: "Angular" },
                  { value: "typescript", label: "TypeScript" },
                ]}
                className="basic-multi-select"
                classNamePrefix="select"
                {...field}
              />
            )}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
