import React, { useContext } from "react";
import { StepContext } from "../../../context/StepContext";

const StepTabs = ({ children }) => {
  const { state } = useContext(StepContext);
  const currentStep = state.currentStep;
  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { active: currentStep === index });
    }
    return child;
  });
  return <>{childrenWithProps}</>;
};

export default StepTabs;
