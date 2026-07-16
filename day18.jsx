import React, {useState, useEffect} from "react";

function Day18(){
 const [count, setCount] = useState(0);
 const [color, setColor] = useState("green");
    // useEffect(()=>{
    //     document.title= `Count:${count}`; /* when re renders */
    // });

    // useEffect(()=>{
    //     document.title= `Count:${count}`; /* when mounts only */
    // },[]);
    useEffect(()=>{
        document.title= `Count:${count} ${color}`;
    },[count,color]);  /* when this value changes run the code just   above*/
 
    function addCount(){
        setCount(c=>c+1);
    }
    function subCount(){
        setCount(c=> c-1);
    }
    function changeColor(){
        setColor(c=> c==="green"? "red":"green");
    }
 return(<>
 <p style={{color:color}}>Count: {count}</p>
 <button onClick={addCount}>Add</button>
 <button onClick={subCount}>Sub</button><br/>
 <button onClick={changeColor}>Change Color</button>
 </>)
}

export default Day18