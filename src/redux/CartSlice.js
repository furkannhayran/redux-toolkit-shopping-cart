import { createSlice } from '@reduxjs/toolkit'

const axiosFromLocalStorege = () => {
    let cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(localStorage.getItem('cart'))
    } else {
        return []
    }
}

const StoreInLocalStorege = (data) => {
    localStorage.setItem('cart', JSON.stringify(data));
}
const initialState = {
    carts: axiosFromLocalStorege(),
    itemCount: 0,
    totalAmount: 0
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isITemCart = state.carts.find(item => item.id === action.payload.id);

            if (isITemCart) {
                const tempCart = state.carts.map(item => {
                    if (item.id === action.payload.id) {
                        let tempQty = item.quantity + action.payload.quantity;
                        let tempTotalPrice = tempQty + item.price
                        return {
                            ...item, quantity: tempQty, totalPrice: tempTotalPrice
                        }
                    } else {
                        return item
                    }
                })
                state.carts = tempCart;
                StoreInLocalStorege(state.carts)
            } else {
                state.carts.push(action.payload)
                StoreInLocalStorege(state.carts)
            }
        },
        removeFromCart: (state, action) => {
            const tempCart = state.carts.filter(item => item.id !== action.payload)
            state.carts = tempCart
            StoreInLocalStorege(state.carts)
        },
        AllremoveFromCart: (state) => {
            state.carts = []
            StoreInLocalStorege(state.carts)
        },
        getCartTotal: (state) => {
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                return cartTotal += cartItem.price * cartItem.quantity
            }, 0)
            state.itemCount = state.carts.length
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, AllremoveFromCart, getCartTotal } = cartSlice.actions

export default cartSlice.reducer









// const cartSlice = createSlice({
//     name: "cart",
//     initalState,
//     reducers: {
//         addToCart: (state, action) => {
//             const isITemCart = state.carts.find(item => item.id === action.payload.id);

//             if (isITemCart) {
//                 const tempCart = state.carts.map(item => {
//                     if (item.id === action.payload.id) {
//                         let tempQty = item.quantity + action.payload.quantity;
//                         let tempTotalPrice = tempQty + item.price
//                         return {
//                             ...item, quantity: tempQty, totalPrice: tempTotalPrice
//                         }
//                     } else {
//                         return item
//                     }
//                 })
//                 state.carts = tempCart;
//                 StoreInLocalStorege(state.carts)
//             } else {
//                 state.carts.push(action.payload)
//                 StoreInLocalStorege(state.carts)
//             }
//         },
//         removeFromCart: (state, action) => {
//             const tempCart = state.carts.filter(item => item.id !== action.payload)
//             state.carts = tempCart
//             StoreInLocalStorege(state.carts)
//         },
//         AllremoveFromCart: (state) => {
//             state.carts = []
//             StoreInLocalStorege(state.carts)
//         },
//         getCartTotal: (state) => {
//             state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
//                 return cartTotal += cartItem.totalPrice
//             }, 0)
//             state.itemCount = state.carts.length
//         }
//     }
// })
