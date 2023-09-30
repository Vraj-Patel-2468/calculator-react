import React from "react";
const Operationbutton = ({value, type, dispatch})=> {
  return (
    <button id={value} onClick={()=>{dispatch({type, value})}}>
      {value}
    </button>
  );
}
export default Operationbutton