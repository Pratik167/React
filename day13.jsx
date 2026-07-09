import React, { useState } from 'react';
function Day13(){
    const [car, setCar]= useState({year:2026, 
                                    maker:"Ford", 
                                    model:"Shelby"});

    function handleYearChange(event){
        setCar(c => ({...c, year: event.target.value}));
    }
    function handleMakerChange(event){
        setCar(c=> ({...c, maker: event.target.value}));
    }
    function handleModelChange(event){
        setCar(c=> ({...c, model: event.target.value}));
    }

    return (<div>
        <p>Your favorite car is: {car.year} {car.maker} {car.model}</p>

        <input type="number" value={car.year} onChange={handleYearChange}/> <br/>
        <input type="text" value={car.maker} onChange={handleMakerChange}/> <br/>
        <input type="text" value={car.model} onChange={handleModelChange}/> <br/>
    </div>)
}
export default Day13