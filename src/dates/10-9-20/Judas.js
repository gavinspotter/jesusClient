import React from "react";

const Judas = (props) => {
  const element =
    props.element === "input" ? (
      <input ref={props.ref} name={props.name} />
    ) : (
      <textarea
        ref={props.ref}
        name={props.name}
        rows={props.rows || 3}
      ></textarea>
    );

  return (
    <div>
      <label>{props.label}</label>
      <br />
      {element}
    </div>
  );
};

export default Judas;
