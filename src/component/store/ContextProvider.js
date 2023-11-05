
import CreateContext from './CreateContext'
import React,{useState} from 'react'

const ContextProvider = (props) => {
    const [items , setItems ] = useState([]);
    console.log(items);
    const addProductHandler = (item) =>{
           setItems(prevState => [...prevState , item])
    }
    const reduceQuantityHandler = (id) =>{
                setItems(items.map(item =>{
                    if(item.id === id && Number(item.Quantity) > 0){
                        item.Quantity = Number(item.Quantity)-1;
                        return item;
                    }
                    else return item;
                }))        
     }
    const context = {
        items : items,
        addProduct : addProductHandler,
        reduceQuantity : reduceQuantityHandler
    }
  return (
    <CreateContext.Provider value = {context}>
     {props.children} 
    </CreateContext.Provider>
  )
}

export default ContextProvider
