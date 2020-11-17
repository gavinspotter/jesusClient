import React from "react";

import { useForm } from "react-hook-form";
import Matthew from "./Matthew";

const Thadeus = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Matthew Ref={register} name="lol" />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Thadeus;
