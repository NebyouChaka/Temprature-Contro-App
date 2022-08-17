import React, {useState} from 'react';


const App =() => {
  const[tempratureValue,setTempratureValue] = useState(10)
  const [tempratureColor, setTempratureColor] = useState('cold')

  const increaseTemprature = () =>{
    if (tempratureValue === 30) return;
    const newTemprature = tempratureValue + 1;

    if(newTemprature > 15){
      setTempratureColor('hot');
    }
    setTempratureValue(newTemprature);
}
     const decreaseTemprature = () => {
       if (tempratureValue === 0) return;
       const newTemprature = tempratureValue - 1;

       if (newTemprature < 15) {
         setTempratureColor("cold");
       }
       setTempratureValue(newTemprature);
     };
  

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempratureColor}`}>
          {tempratureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => increaseTemprature()}>+</button>
        <button onClick={() => decreaseTemprature()}>-</button>
      </div>
    </div>
  );
}

export default App;
