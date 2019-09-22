import { authReducer } from "./auth";

export const reducer = ({ auth }, action) => ({
  auth: authReducer(auth, action)
});
