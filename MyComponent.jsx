import { func } from 'prop-types';
import React, {useState} from 'react';
function MyComponent(){
    // const[name, setName]= useState("Guest");
    // const[age, setAge]=useState(0);
    // const[isEmployed, setIsEmployed]=useState(false);
    // const updateName=()=>{
    //     setName("SpongeBob");
    // }
    // const updateAge=()=>{
    //     setAge(age + 1);
    // }
    // const updateEmp=()=>{
    //     setIsEmployed(!isEmployed);
    // }
    
    // return(<div>
    //     <p>Name:{name}</p>
    //     <button onClick={updateName}>SetName</button>
    //     <p>Age:{age}</p>
    //     <button onClick={updateAge}>IncAge</button>
    //     <p>Employed:{isEmployed?"Yes":"No"}</p>
    //     <button onClick={updateEmp}>toggle</button>
    // </div>);
    const [name, setName] = useState("Default");
    const [quantity, setQuantity]=useState(1);
    const [comment, setComment]=useState("");
    const [payment, setPayment]=useState("");
    const [delivery, setDelivery]=useState("delivery");

    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    function handleDeliveryChange(event){
        setDelivery(event.target.value);
    }
        return(<div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange}
            placeholder="Enter Instructions"/>
            <p>Comment: {comment}</p>
            <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select One</option>
            <option value="Visa">Visa</option>
            <option value="Master">Master</option>
            <option value="Gift">Gift</option>
            </select>
            <p>Payment:{payment}</p>

            <label>
                <input type='radio' value="pickup"
                checked={delivery==="pickup"}
                onChange={handleDeliveryChange}></input>
                Pick Up
                </label>
            <label>
                <input type='radio' value="delivery"
                checked={delivery==="delivery"}
                onChange={handleDeliveryChange}>
                    </input>Delivery
                    </label>
                <p>Delivery: {delivery}</p>
        </div>);
}
export default MyComponent