import "./App.css";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const skillsOptions = [
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "javascript", label: "JavaScript" },
];

function App() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" {...register("name")} />
        <input type="email" placeholder="Email" {...register("email")} />
        <input type="password" placeholder="Password" {...register("password")} />
        <input type="password" placeholder="Confirm Password" {...register("password-confirm")} />
        <Controller
          name="skills"
          control={control}
          render={({ field }) => (
            <Select
              isMulti
              options={skillsOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              {...field}
            />
          )}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
