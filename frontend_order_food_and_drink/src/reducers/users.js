const initialState = {
    user:{},
    isCart: false
};

const userReducer = (state = initialState, action) =>{
    switch (action.type){
        case "SET_USER":
            return {...state, user: action.payload}
        case "VISIBILITY_CART":
            return {...state, isCart: action.payload}
        default:
            return state;
    }
}

export default userReducer;
