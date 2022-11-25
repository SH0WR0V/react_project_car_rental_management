import React, {useState} from 'react';
import Products from './Products';
const Home=()=>
{
    const [counter, setCounter] = useState(0);

            const increment = () =>
            {
                setCounter(counter + 1);
            };
            
    const [inputValue, setInputValue] = useState("No input given");
            let Change = (event) => 
            {
                const  newValue = event.target.value;
                setInputValue(newValue);
            };
    return(
        <div>
            <h2>This is our Home Page</h2>
            <Products name="samsung" price="120k"/>
            <Products name="iphone" price="100k"/>

            {counter}
            <button onClick={increment}>Increment</button>
            <br></br>
            <br></br>

            <input placeholder="enter something.." onChange={Change}></input>
            {inputValue}

        </div>
        
    )
}
export default Home;