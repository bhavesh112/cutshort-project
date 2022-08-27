import { createContext, useReducer } from "react";

export const StepContext = createContext();

const initialState = {
  currentStep: 0,
};
const stepsReducer = (state, action) => {
  switch (action.type) {
    case "NEXT_STEP":
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    case "PREVIOUS_STEP":
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };
    case "SET_STEP":
      return {
        ...state,
        currentStep: action.payload,
      };
    default:
      return state;
  }
};

const StepContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stepsReducer, initialState);
  return (
    <StepContext.Provider value={{ state, dispatch }}>
      {children}
    </StepContext.Provider>
  );
};
export default StepContextProvider;
