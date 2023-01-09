 // Send the login credentials to the backend for validation
 //tbd

const endpoint = "http://localhost:5000/api"

export const createOrder = async order => {
    try {
        const url = `${endpoint}/order`
        console.log(order);
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        })
    
        const data = await res.json()
        if (data.statusCode === "201") {
            return {value: "Success!!! Your order has been created", type: "Success"}
        } else {
            throw data.statusCode
        }
    }
    catch (err) {
        console.log(err);
        return {value: "Failed to create order - Something went wrong", type: "Error"}
    }
}
