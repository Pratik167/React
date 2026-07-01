import PropTypes from "prop-types";
function UserGreeting(props){

    // if(props.isLoggedIn){
    //     return <h2>LoggedIN {props.username}</h2>
    // }
    // else{
    //     return <h2>not logged in</h2>
    // } 
    const loggedin = <h2 className="LoggedIn">Logged In {props.username}</h2>
    const notloggedin = <h2 className="NotLoggedIn">not logged in</h2>

    // return(props.isLoggedIn? <h2 className="LoggedIn">Logged In {props.username}</h2>: 
    //                         <h2 className="NotLoggedIn">not logged in</h2>);
    return(props.isLoggedIn? loggedin:notloggedin);
}
UserGreeting.prototypes={
    isLoggedIn:PropTypes.bool,
    username:PropTypes.string,
}

export default UserGreeting