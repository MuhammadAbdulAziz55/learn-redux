const { createStore, combineReducers } = require("redux");

// product constant
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// cart constant
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";

//  INITIAL PRODUCT STATE
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};

//  INITIAL CART STATE
const initialCartState = {
  products: ["mango"],
  numberOfProducts: 1,
};

// products actions
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

// cart actions
const getCartItems = () => {
  return {
    type: GET_CART_ITEMS,
  };
};

const addCartItem = (product) => {
  return {
    type: ADD_CART_ITEM,
    payload: product,
  };
};

// product reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

// cart reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };

    case ADD_CART_ITEM:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

// combine reducer .. If we have mare reducer at that time we need to use it. For reducer combine we have to return the reducer  default state

const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

// product store
// const store = createStore(productReducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(getProducts());
// store.dispatch(addProduct("potato"));
// store.dispatch(addProduct("tomato"));

// cart store
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getCartItems());
store.dispatch(addCartItem("apple"));

store.dispatch(getProducts());
store.dispatch(addProduct("potato"));
