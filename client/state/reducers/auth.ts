export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const STORE_USER = "STORE_USER";

export const authInitialState = {
  token: "",
  user: {},
  isLogin: false
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        token: action.token,
        isLogin: action.isLogin
      };
    case STORE_USER:
      return {
        ...state,
        user: action.user
      };
    case LOGOUT_USER:
      return {
        ...state,
        token: "",
        user: {},
        isLogin: false
      };
    default:
      return { ...state };
  }
};
