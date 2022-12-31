import faker from 'faker';
import {createContext, useContext, useReducer} from 'react';
import { cartReducer, productReducer } from './Reducer';

export const Cart =  createContext();
faker.seed(99);//now data wont change,every time data is called

const Context = ({children}) => {
   
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(), //random id generate
        name : faker.commerce.productName(),
        price : faker.commerce.price(),
        image : faker.random.image(),
        inStock: faker.random.arrayElement([0,3,5,6,7]),//it ll assign 1 value//if its 0,it ll be disabld
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1,2,3,4,5])
    }));

    //console.log(products);
    const [state,dispatch] = useReducer(cartReducer, { //2nd arg. is initialstate
         
            products: products,
            cart: []
    });
    //filter reducer
    const [productState, productDispatch] = useReducer(productReducer, { //ll hv initialstat responsible for filterin
        byStock: false, //wont disply out of stck
        byfastDelivery: false, 
        byRating:0,
        searchQuery: "",
    });

    return(
    <Cart.Provider value={{state, dispatch,productState, productDispatch}}>
        {children}
    </Cart.Provider>
   ) 
}

export default Context;
//exportin context
export const CartState = () => {
   return useContext(Cart); 
}

//we ll send both dispatch nd state through context
//where ll childrn come frm, frm index whre our app starts