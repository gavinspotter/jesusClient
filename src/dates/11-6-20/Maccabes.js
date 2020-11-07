import React from "react";
import { useForm } from "react-hook-form";

const Maccabes = () => {
  const { register, handlesubmit } = useForm;

  const onSubmit = (data) => console.log(data);
};

export default Maccabes;
