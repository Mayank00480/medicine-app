import React, { useContext ,useRef} from 'react'
import CreateContext from '../store/CreateContext'
const UserForm = () => {
    const context = useContext(CreateContext)
    const medicineName = useRef();
    const description = useRef();
    const price = useRef();
    const Quantity = useRef();
    
    const submitHandler = (e) =>{
     e.preventDefault();
     const myObj = {
        medicineName : medicineName.current.value,
        description : description.current.value,
        price : price.current.value,
        Quantity : Quantity.current.value,
        id : Math.random().toString()
     }
     fetch('https://crudcrud.com/api/43e7ba28b83b44bb8f173ecd2dcfe5c4/products',{
        method : 'POST',
        body : JSON.stringify(myObj),
        headers:{
            'Content-Type' : 'application/json'
        }
     })
     .then(res => res.json())
     .then(resp => console.log(resp))
     context.addProduct(myObj);
    
    }

    return (
    <form onSubmit = {submitHandler}>
      <label>Medicine Name</label>
      <input type = "text" ref = {medicineName}/>
      <label>description</label>
      <input type = "text" ref = {description}/>
      <label>Price</label>
      <input type = "number" ref = {price} />
      <label>Quantity</label>
      <input type = "number" ref = {Quantity} />
        
        <button type = "submit" >Submit</button>
    </form>
  )
}

export default UserForm
