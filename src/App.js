import React from "react";
const App = ()=>{
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="front-value">124.444+</div>
        <div className="rear-value">80990</div>
      </div>  
      <button className="width2">AC</button>
      <button>Del</button>
      <button>/</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>x</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="width2">=</button>
    </div>
  );
}
export default App