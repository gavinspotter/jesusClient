import React from "react";
import Andrew from "../10-9-20/Andrew";
import { useForm } from "react-hook-form";

const Bartholamew = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Andrew hi={register} name="suh" />
        <Andrew hi={register} />
      </form>
    </div>
  );
};

export default Bartholamew;
