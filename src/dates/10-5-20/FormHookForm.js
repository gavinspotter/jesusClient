import React from "react";
import FormHookInput from "../10-4-20/FormHookInput";
import { useForm } from "react-hook-form";

const FormHookForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormHookInput hi={register} yo="heya" label="title" element="input" />
        <FormHookInput hi={register} yo="wapoo" label="description" />
        <button>hi</button>
      </form>
    </div>
  );
};

export default FormHookForm;
