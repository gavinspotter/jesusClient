import React from "react";

const FormHookInput = (props) => {
  const element =
    props.element === "input" ? (
      <input ref={props.hi} name={props.yo} />
    ) : (
      <textarea ref={props.hi} name={props.yo} rows={props.yho || 3} />
    );

  return (
    <div>
      <label>{props.label}</label>
      <br />
      {element}
    </div>
  );
};

export default FormHookInput;
