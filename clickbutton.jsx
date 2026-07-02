 function ClickButton(){
    let count=0;
    // const handleparameter=(name)=> console.log (`${name}`);
    // return (<button onClick={()=>handleparameter("sus")}>click me</button>);
    // const handleCounter = (name)=>{
    //     if(count <3){
    //         count++;
    //         console.log(`${name} times`);
    //     }
    //     else{
    //         console.log("stop");
    //     }

    const handleClick=(e)=> e.target.textContent="ohh";
    
    return (<button onDoubleClick={(e)=>handleClick(e)}>click me</button>);
 }
 export default ClickButton;