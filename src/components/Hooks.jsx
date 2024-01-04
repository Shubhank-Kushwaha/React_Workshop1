import  React, {unState, useState} from 'react';
const HooksDemo = () =>
{
    const [counter, setCounter]= useState(0);
    return (
        <>
        <div>Counter {counter}</div>
        <button disabled= {counter< 0}onClick={()=> {setCounter(counter+1)}}>+</button>
        <button disabled ={counter < 0} onClick= {()=> {setCounter(counter-1)}}>-</button>
        <button onClick={()=> {setCounter(0)}}>Reset</button>
        </>
    )
}

export default HooksDemo