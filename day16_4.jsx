import React, {useContext} from 'react';
import { UserContext } from './day16.jsx';
function Day16_4(){
    const user= useContext(UserContext);
    return(<div className="box">
        <h1>ComponentD</h1>
        <h2>{`Bye${user}`}</h2>
    </div>);
}
export default Day16_4