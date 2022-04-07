import { useState } from "react";

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const Decrement = () => {
    if (count > 0)
    {      
      setCount(count - 1);
    }
  };


  const Increment = () => {
    if(count<10)
   {
         setCount(Number(count)+1);
  }
  else{
      alert("Hurrey, You have achieved your Target.")
      setCount(10);
  }
    
  };

  const reboot = (val: number) => {
    setCount(val);
    console.log("reboot-> " + val);
  };

  return (
    <>
      <div style={{}}>
      <h1> <i><b>COUNTER ELEMENT</b></i></h1>
        <br></br> <br></br>
        <button onClick={() => Decrement()}><b>-</b></button>
        <h1>{count}</h1>
        <button onClick={() => Increment()}><b>+</b></button> 

        <br></br>
        <br></br> <br></br>
        <button onClick={() => reboot(0)}>Reboot</button>
      </div>
    </>
  );
};

export default CounterComponent;

