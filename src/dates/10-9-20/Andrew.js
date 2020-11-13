import React from "react";

const Andrew = (props) => {
  const element =
    props.element === "input" ? (
      <input ref={props.hi} name={props.yo}>
        {" "}
      </input>
    ) : (
      <textarea ref={props.hi} name={props.yo} rows={props.yho || 3}></textarea>
    );
};

export default Andrew;
