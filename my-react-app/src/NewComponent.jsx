
import React, {useState} from 'react'

function NewComponent() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");


    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePayementChange(event){
        setPayment(event.target.value )
    }

    function handleShippingChange(event){
        setShipping(event.target.value)
    }

      return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Please Include delivery Instructions'/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePayementChange}>
                <option value="">Select an Option.</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" 
                        checked={shipping === "Pick Up"}
                        onChange={handleShippingChange}/>
                Pick Up
            </label><br/>

            <label>
                <input type="radio" value="Delivery"
                        checked={shipping === "Delivery"}
                        onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>

        </div>
    )
}

export default NewComponent;