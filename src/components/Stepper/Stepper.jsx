import { styled } from "@mui/material";
import { useContext } from "react";
import { StepContext } from "../../context/StepContext";

const Stepper = () => {
  const steps = [1, 2, 3, 4];
  const { state, dispatch } = useContext(StepContext);
  const currentStep = state.currentStep;

  return (
    <>
      <StepWrapper>
        {steps.map((step, index) => (
          <>
            {index !== 0 && <StepConnector active={currentStep >= index} />}
            <StepLabel
              active={currentStep >= index}
              onClick={() => {
                if (currentStep >= index)
                  dispatch({ type: "SET_STEP", payload: index });
              }}
            >
              <span>{step}</span>
            </StepLabel>
            {index !== steps.length - 1 && (
              <StepConnector active={currentStep >= index} />
            )}
          </>
        ))}
      </StepWrapper>
    </>
  );
};

export default Stepper;

const StepWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  padding: "0 20px",
  justifyContent: "center",
  marginBottom: theme.spacing(8),
}));

const StepLabel = styled("div")(({ theme, ...props }) => ({
  fontSize: "1rem",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  backgroundColor: props.active ? theme.palette.primary.main : "#fff",
  color: props.active
    ? theme.palette.primary.contrastText
    : theme.palette.text.secondary,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: props.active
    ? `1px solid ${theme.palette.primary.main}`
    : `2px solid ${theme.palette.text.secondary}`,
  cursor: "pointer",
}));
const StepConnector = styled("div")(({ theme, ...props }) => ({
  width: "calc(100% / 6 - 30px)",
  height: "1px",
  backgroundColor: props.active
    ? theme.palette.primary.main
    : theme.palette.text.secondary,
  transition: "all 0.3s ease",
}));
