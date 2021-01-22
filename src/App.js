import React from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Input from "@material-ui/core/Input";
import { Input as InputField } from "antd";

export default function App() {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = data => console.log(data);
  
  const handleChange = (e) => {
    setValue("AntdInput", e.target.value);
  }
  
  React.useEffect(() => {
    register("AntdInput"); // custom register Antd input
  }, [register])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField name="name" onChange={handleChange} />
      <input type="submit" />
    </form>
  );
}
