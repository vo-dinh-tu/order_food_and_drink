export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user
  };
};

export const visibilityCart= (isCart) => {
  return {
    type: "VISIBILITY_CART",
    payload: isCart
  };
};

export const getCategoryId = (categoryId) => {
  return {
    type: "GET_CATEGORY_ID",
    payload: categoryId.toString()
  };
};