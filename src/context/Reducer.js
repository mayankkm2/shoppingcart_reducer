export const cartReducer = (state, action) => {
 switch(action.type){
   case "ADD_TO_CART":
     return {...state, cart:[...state.cart, {...action.payload, qty:1}]} ;//{...action.payload, qty:1}-we need to add wat we r sendin frm our app to it//...action.payload-all proprt gets destructd inside array
    case "REMOVE_FROM_CART":
       return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
       } ; 
       case "CHANGE_CART_QTY":
        return {
          ...state,
          cart:state.cart.filter(c =>c.id ===action.payload.id? (c.qty=action.payload.qty) : c.qty)

        }
    default:
     return state;
 }
};

export const productReducer = (state, action) => {//we ll manipulate all initial stat
  switch (action.type) {
    case "SORT_BY_PRICE":
      return {...state, sort: action.payload};//addin 'sort' varbl to our stat
    case "FILTER_BY_STOCK":
      return { ...state, byStock: !state.byStock};
      case "FILTER_BY_DELIVERY":
      return { ...state, byfastDelivery: !state.byfastDelivery};
      case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload};
      case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload};
      case "CLEAR_FILTERS":
        return {
          byStock: false, 
          byfastDelivery: false, 
          byRating:0,
          searchQuery: "",
        };

    default:
       return state;
  }

}

//add to cart-'ll retrn all of our state which was already dere(1st param-  ...state)
//and it ll manipulate our cart state(2nd param)
//Action var. takes 2 thngs 1st is type(add to cart),2nd is its payload.
//payload contains d data dat we want to put in d state and manipulate d state
//(sendin payload)if its in d cart, its goin to chng d qty ,line13