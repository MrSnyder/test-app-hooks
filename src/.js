import { useState } from "react";

function ClickCounter() {

  const [state, setState] = useState({
    counter: 0,
    color: "red",
    name: "Martin"
  });

  console.log("state", state);
  
  return (
    <>
      <h1>ClickCounter: {state.counter}</h1>
      <button onClick={ () => { 
        console.log("onClick: " + state.counter);
        setState({
          ...state,
          counter: state.counter + 1
        });
      }}>
        Click me.
      </button>
    </>
  );
}

export default ClickCounter;
