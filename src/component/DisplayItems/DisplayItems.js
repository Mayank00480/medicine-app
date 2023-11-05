import React,{useContext, useEffect,useState} from 'react'
import CreateContext from '../store/CreateContext'
const DisplayItems = () => {
    const [result , setResult] = useState([])
    const context = useContext(CreateContext);
useEffect(() => {
    const fetchData = async() => { 
   const data = await fetch('https://crudcrud.com/api/43e7ba28b83b44bb8f173ecd2dcfe5c4/products');
   const res = await data.json();
   setResult(res);
    }
  fetchData()
},[setResult])
    
  return (
    <table>
        <tr>
            <th>MedicineName</th>
            <th>description</th>
            <th>Price</th>
            <th>Quantity</th>
        </tr>
      {result.map((item) =>{
        return <tr>
            <td>{item.medicineName}</td> 
            <td>{item.description} </td>
            <td>{item.price} </td>
            <td>{ item.Quantity}</td>
            <button onClick={() => context.reduceQuantity(item.id)}>Add to cart</button>
            </tr>
      })}
    </table>
  )
}

export default DisplayItems
