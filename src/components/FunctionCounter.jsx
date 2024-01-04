
import { useEffect, useState } from 'react';

let intervalId

const FunctionCounter = ()=> 
{
    const [countValue, setCountValue] = useState(0);
    const increment= () => {
        setCountValue(countValue+1);
    }

    const decrement = ()=>
    {
        if(countValue > 0)
        {
            setCountValue(countValue -1)
        } 

    }

    useEffect(()=> {

        intervalId=  setInterval(
            ()=> {
                setCountValue(countValue+1)
                
            }
        ,1000)
        return () => {
            clearInterval(intervalId);
        };

    },[countValue])

    const stopCounter = () => {
        clearInterval(intervalId);

    }

    // const startCounter =() => {
    //    setCountValue(intervalId)
    // }


 return (
    <>
    <div>Counter {countValue}</div>
    <button onClick={increment} >+</button>
    <button onClick={decrement}>-</button>
    <button onClick={stopCounter}>Stop Counter</button>
    {/* <button onClick={startCounter}>Start Counter</button> */}
    
    </>
 )

}

export default FunctionCounter