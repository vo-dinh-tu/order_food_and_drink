export const fetchCart = async (listItem, accessToken) =>{
    
    const response = await fetch(`/api/cart`, {
        method: 'post',
        headers: {
        Authorization: `Bearer ${accessToken}`
        },
        body: {
            "listItem": listItem.length > 0 ? listItem : []
        },
    });

    const data = await response.json();
    console.log(data);
}