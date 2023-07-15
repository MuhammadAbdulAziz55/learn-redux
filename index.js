// state - count:0
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require("redux");

// constant
// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";
// const RESET = "RESET";

// // state
// const initialState = {
//   count: 0,
// };

// // action
// const incrementCounterAction = () => {
//   return {
//     type: INCREMENT,
//   };
// };
// const decrementCounterAction = () => {
//   return {
//     type: DECREMENT,
//   };
// };
// const resetCounterAction = () => {
//   return {
//     type: RESET,
//   };
// };

// const incrementCounterByValue = (value) => {
//   return {
//     type: INCREMENT_BY_VALUE,
//     payload: value,
//   };
// };

// // reducer
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         count: state.count + 1,
//       };

//     case DECREMENT:
//       return {
//         ...state,
//         count: state.count - 1,
//       };

//     case RESET:
//       return {
//         ...state,
//         count: 0,
//       };

//     case INCREMENT_BY_VALUE:
//       return {
//         ...state,
//         count: state.count + action.payload,
//       };

//     default:
//       state;
//   }
// };

// // store

// const store = createStore(counterReducer);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(resetCounterAction());
// store.dispatch(incrementCounterByValue(10));

const ADD_USER = "ADD_USER";

const initialState = {
  user: "Abdul",
  count: 1,
};

// action
const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.user, action.payload],
        count: state.count + 1,
      };

    default:
      state;
  }
};

const store = createStore(userReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser("Shifa"));
store.dispatch(addUser("Abdur Rahim"));
