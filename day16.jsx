import React,{ useState, createContext } from "react";
import Day16_2 from "./day16_2";

export const UserContext = createContext();
function Day16(){
    const[user, setUser]= useState("FeinT");
    return(<div className="box">
        <h1>ComponentA</h1>
        <h2>{`Hello${user}`}</h2>
        <UserContext.Provider value={user}>
            <Day16_2 user={user}/>
        </UserContext.Provider>
    </div>);
}
export default Day16