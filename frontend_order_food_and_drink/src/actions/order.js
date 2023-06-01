export const fetchOrder = async (cartId) =>{
    
    const response = await fetch('/api/order', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cartId: cartId })
    });

    const data = await response.json();
    return data;
}

export const fetchPayment = async (cartId) =>{
    const response = await fetch('/api/payment', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cartId: cartId, bankCode: "" })
    });

    const data = await response.json();
    return data;
}