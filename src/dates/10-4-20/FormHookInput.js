import React from "react";

const FormHookInput = (props) => {
  const element =
    props.element === "input" ? <input /> : <textarea rows={props.rows || 3} />;

  return (
    <div>
      <label>{props.label}</label>
      {element}
    </div>
  );
};

export default FormHookInput;
