import { createContext } from "react";

const CreateContext = createContext({
    items : [],
    addProduct : () =>{},
    reduceQuantity : () =>{},
})
export default CreateContext;