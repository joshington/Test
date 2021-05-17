// import { ADD_TO_CART,DELETE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from '../actions/cartItems';

// const initialState = {
//     itemsCount:0,
//     Cart:[],
//     totalAmount:0
// }

// function cartReducer(state=initialState,action){
//     switch(action.type){
//         case  ADD_TO_CART:
//             if(state.itemsCount === 0){
//                 //numberCart === 0 means that there are no products in the Carts array, add products
//                 //to the Carts array
//                 //IF NUMBERcART>0, cARTS ARRAY HAS PRODUCTS, CHECK IF HE PRODUCT has the same purchase
//                 //if the same increase quantity++,if purchased product is different from product in
//                 //Carts add the 
//                 let cart = {
//                     id:action.payload.itemId,
//                     quantity:action.payload.quantity,
//                     name:action.payload.itemTitle,
//                     image:action.payload.itemImg,
//                     price:action.payload.itemPrice,
//                     amount:action.payload.itemPrice*action.payload.quantity,
//                     // itemTitle,
//                     // itemImg,
//                     // itemPrice,
//                     // itemDescription,
//                     // quantity,
                   
//                 }
//                 state.Cart.push(cart);
//                 return {
//                     ...state,
//                     itemsCount:state.itemsCount+1,
//                     totalAmount:state.Cart.map(item  => {
//                         state.totalAmount+item.amount
//                     })
//                 }
//             }else{
//                 let exists = false;
//                 state.Cart.map((item,key) => {
//                     if(item.id === action.payload.id){
//                         state.Cart[key].quantity++;
//                         exists = true;
//                     }
//                     return {
//                         ...state,
//                         itemsCount:state.itemsCount,
//                     }
//                 })
//                 if(!exists){
//                     let _cart = {
//                         id:action.payload.itemId,
//                         quantity:action.payload.quantity,
//                         name:action.payload.itemTitle,
//                         image:action.payload.itemImg,
//                         price:action.payload.itemPrice,
//                         amount:action.payload.itemPrice*action.payload.quantity,
//                     }
//                     state.Cart.push(_cart)
//                     return {
//                         ...state,
//                         itemsCount:state.itemsCount+1,
//                         totalAmount:state.Cart.map(item  => {
//                             state.totalAmount+item.amount
//                         })
//                     }
//                 }
//             }
//         case ADD_QUANTITY:
//             return {
//                 ...state,
//                 Cart:state.Cart.map((item,key) => {
//                     if(item.id === action.id){
//                         state.Cart[key].quantity++;
//                     }
//                 })
//             }
//         case SUB_QUANTITY:
//             return {
//                 ...state,
//                 Cart:state.Cart.map((item,key) => {
//                     if(item.id === action.id){
//                         state.Cart[key].quantity--;
//                     }
//                 })
//             }
//         case DELETE_ITEM:
//             let newCartItems = state.Cart.filter(
//                 (item) => {return item.id !== action.id}
//             )
//             let count = state.itemsCount-1;
//             return {
//                 ...state,
//                 itemsCount:count,
//                 Cart:newCartItems,
//             }

//         default:
//             return state
//     }
// }

// export default cartReducer;


//============code for reference=====================
// import { ADD_TO_CART,DELETE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from '../actions/cartItems';

// const initialState = {
//     itemsCount : 0,
//     cartItems:[],
//     cartTotalAmount:0,

// }

// const cartReducer = (state=initialState, action)=>{
//     switch(action.type){
//         case ADD_TO_CART:
//             let cart = {
//                 id:action.payload.itemId,
//                 quantity:action.payload.quantity,
//                 name:action.payload.itemTitle,
//                 image:action.payload.itemImg,
//                 price:action.payload.itemPrice,
//                 cartAmount:action.payload.quantity * action.payload.itemPrice
//             }
            
//             if(state.itemsCount === 0){
//                 state.cartItems.push(cart);//just push the cart
//                 return {
//                     ...state,
//                     itemsCount:state.itemsCount+1,
//                     cartTotalAmount:state.cartItems.map(item => {
//                         state.cartTotalAmount+item.cartAmount
//                     })
//                 }
//             }else{
//                 let exists =false;
//                 let i =0;
//                 while(i<state.cartItems.length){
//                     if(state.cartItems[i].id === action.payload.itemId){
//                         state.cartItems[i].quantity++;
//                         exists = true;
//                     }
//                     return{
//                         ...state,
//                         itemsCount:state.itemsCount
//                     }
//                     i++;
//                 }

//                 state.cartItems.map((key,item) => {
//                     if(item.id === action.payload.itemId){
//                         // {...item,quantity:item.quantity+1}
//                         state.cartItems[key].quantity++;
//                         exists = true
//                     }
//                     return {
//                         ...state,
//                         itemsCount:state.itemsCount,
//                     }
//                 })
//                 if(!exists){
//                     let _cart = {
//                         id:action.payload.itemId,
//                         quantity:action.payload.quantity,
//                         name:action.payload.itemTitle,
//                         image:action.payload.itemImg,
//                         price:action.payload.itemPrice,
//                         cartAmount:action.payload.quantity * action.payload.itemPrice
//                     }
//                     state.cartItems.push(_cart)
//                     return {
//                         ...state,
//                         itemsCount:state.itemsCount+1,
//                         cartTotalAmount:state.cartItems.map(item => {
//                             state.cartTotalAmount+item.cartAmount
//                         })
//                     }
//                 }


//             }
//         case ADD_QUANTITY:
//             return {
//                 ...state,
//                 cartItems:state.cartItems.map(
//                     item => item.id === action.payload.itemId
//                     ? {...item, quantity: item.quantity+1 }
//                     : item 
//                 ),
//             }
//         case DELETE_ITEM:
//             let newCartItems = state.cartItems.filter(
//                 (item) => {return item.id != action.payload.itemId}
//             )
//             let count = state.itemsCount-1;
//             return {
//                 ...state,
//                 itemsCount:count,
//                 cartItems:newCartItems,
//             }
//         case SUB_QUANTITY:
//             return {
//                 ...state,
//                 cartItems:state.cartItems.map(
//                     item => item.id === action.payload.itemId 
//                     ? {...item, quantity: item.quantity-1 } 
//                     : item  
//                 ),
//             }
        
//         // case ADD_TO_WISH_LIST:
//         //     for(let i=0; i < state.wishListItems.length; i++){
//         //         if(state.wishListItems[i].id === action.item.id){
//         //             return {
//         //                 ...state,
//         //                 wishListItems: state.wishListItems.map(item => item.id === action.item.id ?
//         //                     { ...item, quantity: item.quantity+1 } :item
//         //                 ) ,
//         //             }
//         //         }
//         //         else{
//         //             let updatedWishListItems = [...state.wishListItems, action.item];   
//         //             let count = state.wishCount + 1;
//         //         }
//         //     }
//         //     return{
//         //         ...state,
//         //         wishCount : count,
//         //         wishListItems :updatedWishListItems
//         //     }
        
//         // case DELETE_FROM_WISH_LIST:
//         //     let newWishListItems = state.wishListItems.filter(
//         //         (item)=>{
//         //          return item.id!=action.item.id
//         //         }
//         //      );
            
//         //      return {
//         //         ...state,
//         //         wishListItems : newWishListItems , 
//         //     }  
//         default:
//             return state
//     }
        
// }  

// export default cartReducer;
