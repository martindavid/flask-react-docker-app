import { authReducer } from "./auth";
import { calculatorReducer } from "./calculator";

export const reducer = ({ auth, calculator }, action) => ({
  auth: authReducer(auth, action),
  calculator: calculatorReducer(calculator, action)
});
