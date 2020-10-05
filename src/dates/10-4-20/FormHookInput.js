import React from "react";

const FormHookInput = (props) => {
  const element =
    props.element === "input" ? <input /> : <textarea rows={props.rows || 3} />;
};

export default FormHookInput;
