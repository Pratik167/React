import React, {useContext} from 'react';
import { UserContext } from './day16.jsx';
import Day16_4 from "./day16_4";
function Day16_3(){
    const user= useContext(UserContext)
    return(<div className="box">
        <h1>ComponentC</h1>
        <h2>{`Byeee${user}`}</h2>
        <Day16_4/>
    </div>);
}
export default Day16_3