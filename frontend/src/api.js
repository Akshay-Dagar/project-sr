 // Send the login credentials to the backend for validation
 // tbd

import { setMessage } from "./Reducers/message"
import { setOrders } from "./Reducers/orders"

const endpoint = "https://srmarketing.cyclic.app/api"

// Get all orders as a list
const getOrders = () => async dispatch => {
    try {
        const url = `${endpoint}/order`
        const res = await fetch(url)
    
        const data = await res.json()
        if (res.status === 200) {
            dispatch(setOrders(data))
        } else {
            throw res.status
        }
    }
    catch (err) {
        dispatch(setMessage({value: "Failed to get orders - Something went wrong", type: "Error"}))
    }
}

// Create a new order
const createOrder = order => async dispatch => {
    try {
        const url = `${endpoint}/order`
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        })
    
        await res.json()
        if (res.status === 201) {
            dispatch(setMessage({value: "Success!!! Your order has been created", type: "Success"}))
        } else {
            throw res.status
        }
    }
    catch (err) {
        dispatch(setMessage({value: "Failed to create order - Something went wrong", type: "Error"}))
    }
}

// Create a new order
const updateOrder = order => async dispatch => {
    try {
        const url = `${endpoint}/order`
        const res = await fetch(url, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        })
    
        await res.json()
        if (res.status === 201) {
            dispatch(setMessage({value: "Success!!! Your order has been updated", type: "Success"}))
        } else {
            throw res.status
        }
    }
    catch (err) {
        dispatch(setMessage({value: "Failed to update order - Something went wrong", type: "Error"}))
    }
}

const api = {getOrders, createOrder, updateOrder}
export default api