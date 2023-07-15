// fetch data using redux-thunk

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
// const { thunk } = require("redux-thunk").default;

// CONSTANT
const GET_USERS_REQUEST = "GET_USERS_REQUEST";
const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
const GET_USERS_FAILED = "GET_USERS_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/user";
// states
const initialUsersState = {
  todos: [],
  isLoading: false,
  error: null,
};

// action

const getUsersRequest = () => {
  return {
    type: GET_USERS_REQUEST,
  };
};
const getUsersSUCCESS = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: users,
  };
};
const getUsersError = (error) => {
  return {
    type: GET_USERS_FAILED,
    payload: error,
  };
};

// reducer
const usersReducer = (state = initialUsersState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case GET_USERS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      state;
  }
};

// async action creator
const fetchData = () => {
  return (dispatch) => {
    dispatch(getUsersRequest());
    axios
      .get(API_URL)
      .then((res) => {
        const users = res.data;
        const name = users.map((user) => user.name);
        dispatch(getUsersSUCCESS(name));
        console.log(name);
      })
      .catch((err) => {
        const errorMessage = err.message;
        dispatch(getUsersError(errorMessage));
      });
  };
};

// store

const store = createStore(usersReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData());
