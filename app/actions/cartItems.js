export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const SUB_QUANTITY = 'SUB_QUANTITY';

export const DELETE_ITEM = 'DELETE_ITEM';


export const addToCart = (payload) => {
	type: ADD_TO_CART,
	payload
}

export const addQuantity = (payload) => {
	type: ADD_QUANTITY,
	payload
}

export const subQuantity = (payload) => {
	type: SUB_QUANTITY,
	payload
}

export const deleteItem = (payload) => {
	type: DELETE_ITEM,
	payload
}