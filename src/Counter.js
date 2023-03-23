import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(5);
  const [text, setText] = useState("Merhaba");

  useEffect(() => {
    console.log("count");
  }, [count]);

  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  useEffect(() => {
    console.log("componentDidMount, componentDidUpdate")
  });

  return (
    <>
      <p>Butona { count } kez tıkladınız.</p> 
      <p>girilen text: { text }</p>
      <button onClick={ () => setCount(count + 1) }>+1</button>
      <button onClick={ () => setCount(count - 1) }>-1</button>
      <button onClick={ () => setCount(5) }>reset</button>
      <input type="text" value={ text } onChange={ (e) => setText(e.target.value) }/>
    </>
  );
}

export default Counter;