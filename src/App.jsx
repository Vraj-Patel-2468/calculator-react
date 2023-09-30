import React, {useReducer} from "react";
import Digitbutton from "./Digitbutton";
import Operationbutton from "./Operationbutton";
import './App.css';
import deleteImage from './delete.png';

const ACTION = {
  ADD_DIGIT : "add-digit",
  CLEAR : "clear-all",
  REMOVE_DIGIT: "remove-digit",
  EQUATE : "equate-solution",
  OPERATE : "operation"
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.ADD_DIGIT:
      return {...state, currentOperand : `${state.currentOperand}${action.value}`};
    case ACTION.CLEAR:
      return {currentOperand : '', result : ''};
    case ACTION.REMOVE_DIGIT:
      return {...state, currentOperand : state.currentOperand.slice(0,-1)};
    case ACTION.EQUATE:
      try {
        // eslint-disable-next-line
        const result = eval(state.currentOperand);
        return { ...state, currentOperand: result.toString(), result: result.toString() };
      } catch (error) {
        alert("Check the expression entered again.");
        return state;
      }
    case ACTION.OPERATE:
      return {...state, currentOperand : `${state.currentOperand}${action.value}`};
    default:
      return state;
  }
}

const App = ()=> {
  const [outputState, dispatch] = useReducer(reducer, {currentOperand : '', result : ''});
  return (
    <div className="calculator">
      <div className="output-window">
        <div className="current-operand">{outputState.currentOperand}</div>
        <div className="result">{outputState.result}</div>
      </div>
      <div className="calculator-grid">
        <button
          className="clear-button"
          onClick={() => dispatch({ type: ACTION.CLEAR })}
        > AC </button>
        <button
          className="remove-digit-button"
          onClick={() => dispatch({ type: ACTION.REMOVE_DIGIT })}
        ><img src={deleteImage} alt="clear-previous-digit" width="20px" /></button>
        <Operationbutton value="+" type={ACTION.OPERATE} dispatch={dispatch} />
        <Digitbutton value={7} type={ACTION.ADD_DIGIT} dispatch={dispatch} />
        <Digitbutton value={8} type={ACTION.ADD_DIGIT} dispatch={dispatch} />
        <Digitbutton value={9} type={ACTION.ADD_DIGIT} dispatch={dispatch} />
        <Operationbutton value="-" type={ACTION.OPERATE} dispatch={dispatch} />
        <Digitbutton value={4} type={ACTION.ADD_DIGIT} dispatch={dispatch} />
        <Digitbutton value={5} type={ACTION.ADD_DIGIT} dispatch={dispatch} />
        <Digitbutton value={6} type={ACTION.ADD_DIGIT} dispatch={dispatch} />
        <Operationbutton value="/" type={ACTION.OPERATE} dispatch={dispatch} />
        <Digitbutton value={1} type={ACTION.ADD_DIGIT} dispatch={dispatch} />
        <Digitbutton value={2} type={ACTION.ADD_DIGIT} dispatch={dispatch} />
        <Digitbutton value={3} type={ACTION.ADD_DIGIT} dispatch={dispatch} />
        <Operationbutton value="*" type={ACTION.OPERATE} dispatch={dispatch} />
        <button
          className="digit-button"
          onClick={() => dispatch({ type: ACTION.ADD_DIGIT, value: 0 })}
        > 0 </button>
        <button
          className="equal-button"
          onClick={() => dispatch({ type: ACTION.EQUATE })}
        > = </button>
      </div>
    </div>
  );
}
export default App  