import { useEffect, useState } from "react";

function ClickCounter() {

  const [userId, setUserId] = useState(1);

  const [state, setState] = useState({
    counter: 0,
    color: "red",
    name: "Jon Doe"
  });

  const [email, setEmail] = useState("empty");

  useEffect( () => {    
    console.log ("Email wurde geändert");
    document.title = "Hallo: " + email;
  }, [email]);

  useEffect( () => {    
    console.log ("State wurde geändert");
    // Seiteneffekt !!!!!
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(json => {
        setEmail(json.email);
      });

  }, [userId]);

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

      <h1>Name: {state.name}</h1>
      Neuer Name: <input onChange={ (e) => {
        console.log("onChange: ", e.target.value);
        setState({
          ...state,
          name: e.target.value
        });
      }}/>

      <h1>User Id: <input value={userId} type="number" onChange={ (e) => {
        console.log("onChange: ", e.target.value);
        setUserId(e.target.value);
      }}/>
      <h1>User email: {email}</h1>
      </h1>

    </>
  );
}

export default ClickCounter;
