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

export const fetchUpdateConfirm = async (orderId, accessToken)=>{
    const response = await fetch(`/api/order/status`,{
        method: 'post',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ orderId: orderId, status: "CONFIRMED"})
    });
    return response;
}

export const fetchUpdateProcessing = async (orderId, accessToken)=>{
    const response = await fetch(`/api/order/status`,{
        method: 'post',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ orderId: orderId, status: "PROCESSING"})
    });
    return response;
}

export const fetchUpdateComplete = async (orderId, accessToken)=>{
    const response = await fetch(`/api/order/status`,{
        method: 'post',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ orderId: orderId, status: "COMPLETED"})
    });
    return response;
}