import React from "react";

import { useForm } from "react-hook-form";

const Thadeus = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
};

export default Thadeus;
