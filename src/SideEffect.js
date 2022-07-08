import { useEffect } from "react";

function SideEffect() {
 
  // 1. wann wird der Effekt getriggert
  // 2. wann ist es sinnvoll, code als seiteneffekt zu implementieren?

  useEffect( () => {
    console.log ("Seiteneffekt läuft!!!!");
  });

  // useEffect( () => {
  //   console.log ("Seiteneffekt läuft!!!!");
  // }, []);

  // useEffect( () => {
  //   console.log ("Seiteneffekt läuft!!!!");
  // }, [deps]);

  return (
    <>
      <h1>SideEffect</h1>
    </>
  );
}

export default SideEffect;
