import React from "react";
import Andrew from "../10-9-20/Andrew";
import { useForm } from "react-hook-form";
import Judas from "./Judas";

const Bartholamew = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Andrew hi={register} yo="suh" />
        <Andrew hi={register} yo="sup" />
        <Judas ref={register} name="lol" />
      </form>
    </div>
  );
};

export default Bartholamew;
