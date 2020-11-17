import React from "react";

const Matthew = (props) => {
  const element =
    props.element === "input" ? (
      <input ref={props.Ref} name={props.name} />
    ) : (
      <textarea
        ref={props.Ref}
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

export default Matthew;
