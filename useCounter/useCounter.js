import { useState } from "react"

export const useCounter = (initialValue = 1) => {

    const [counter, setcount] = useState(initialValue);

    const increment = (value = 1) =>{
        setcount( (current) => current + value );
    }


    const decrement = ( value =1 )=>{
        if(counter<=1) return;
        setcount( (current) => current - value);
    }

    const reset = () =>{
        setcount( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
