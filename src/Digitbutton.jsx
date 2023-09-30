import React from "react";
const  Digitbutton = ({value, type, dispatch})=> {
  return (
    <button id={value} onClick={()=>{dispatch({type, value})}}>
      {value}
    </button>
  );
} 
export default Digitbutton