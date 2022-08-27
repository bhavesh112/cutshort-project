import { Container, Box } from "@mui/material";
import { useContext, useMemo } from "react";
import StepContextProvider, { StepContext } from "../../context/StepContext";

import Heading from "../Heading/Heading";
import Stepper from "../Stepper/Stepper";
import StepTab from "../Stepper/StepTab/StepTab";
import StepTabs from "../Stepper/StepTabs/StepTabs";
import FinalStage from "./Forms/FinalStage";
import IntroductionForm from "./Forms/IntroductionForm";
import UsageForm from "./Forms/UsageForm";
import WorkspaceForm from "./Forms/WorkspaceForm";

const OnboardingForm = () => {
  return (
    <>
      <Container
        sx={{
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "560px",
            width: "100%",
          }}
        >
          <StepContextProvider>
            <Heading />
            <Stepper />
            <StepTabs>
              <StepTab>
                <IntroductionForm />
              </StepTab>
              <StepTab>
                <WorkspaceForm />
              </StepTab>
              <StepTab>
                <UsageForm />
              </StepTab>
              <StepTab>
                <FinalStage />
              </StepTab>
            </StepTabs>
          </StepContextProvider>
        </Box>
      </Container>
    </>
  );
};

export default OnboardingForm;
