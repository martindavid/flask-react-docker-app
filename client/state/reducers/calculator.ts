import { initialState } from "components/cost-calculator/calculator-questioner";

export const STORE_CALCULATOR_SELECTION = "STORE_CALCULATOR_SELECTION";

export const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_CALCULATOR_SELECTION:
      return {
        ...state,
        ...action.data
      };
  }
};
