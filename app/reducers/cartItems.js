import { ADD_TO_CART,DELETE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from '../actions/cartItems';

const initialState = {
    cartItems:[]
}

// const itemsCount = initialState.cartItems.reduce((count, {quantity}) => count + quantity, 0)

// const cartTotalAmount = cartItems.reduce((totalAmount, {price, quantity}) => totalAmount + quantity * price, 0,)
function cartReducer(state=initialState, action){
    switch(action.type){
        case ADD_TO_CART:
            const {itemId,itemImg,itemPrice,itemTitle,quantity} = action.payload;
            //search if item is already in cart by item id
            const inCart = state.cartItems.some(item => item.id === itemId)//really didnt know about the some method
            if(inCart){
                //already in cart, shallow copy cart items
                return {
                    ...state,
                    cartItems:state.cartItems.map(item => item.id === itemId ? {
                        //found item, shallow copy item and update quantity property
                        ...item,
                        quantity:item.quantity + 1,
                    }: item),
                }
            }else{
                return {
                    ...state,
                    cartItems: [
                        //shallow copy cart items
                        ...state.cartItems,
                        // add new cart item
                        {
                            id:itemId,
                            quantity: quantity,
                            name: itemTitle,
                            image:itemImg,
                            price: itemPrice,
                        }
                    ],
                }
            }
        case ADD_QUANTITY:
            const {Itemid,itemQuant} = action.payload;
            let addedItem = state.cartItems.find(item=> item.id === Itemid)
                addedItem.quantity += 1 
              // let newTotal = state.total + addedItem.price
                return{
                    ...state,
                    // total: newTotal
                }

        case SUB_QUANTITY: 
            const {Itid,itemQua} = action.payload;
            // let addedItem_sub = state.cartItems.find(item=> item.id === Itid) 
            //if the qt == 0 then it should be removed
            let addedItem_sub = state.cartItems.find(item=> item.id === Itid) 
            if(addedItem_sub.quantity === 1){
                let new_items = state.cartItems.filter(item=>item.id !== Itid)
                // let newTotal = state.total - addedItem.price
                return{
                    ...state,
                    cartItems: new_items,
                    // total: newTotal
                }
            }
            else {
                addedItem_sub.quantity -= 1
                // let newTotal = state.total - addedItem.price
                return{
                    ...state,
                    // total: newTotal
                }
            }
        case DELETE_ITEM:
            const {Item,itemQ} = action.payload;
            let itemToRemove = state.cartItems.find(item => Item === item.id)
            let new_items_del = state.cartItems.filter(item => Item !== item.id)
            console.log(itemToRemove)
            return {
                ...state,
                cartItems:new_items_del
            }

        default:
            return state
    }
}

export default cartReducer;