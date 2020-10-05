import React from "react";
import FormHookInput from "../10-4-20/FormHookInput";

const FormHookForm = () => {
  return (
    <div>
      <FormHookInput label="title" element="input" />
      <FormHookInput label="description" />
    </div>
  );
};

export default FormHookForm;
