import FormWrapper from "../../FormWrapper/FormWrapper";
import { Formik, Form } from "formik";
import { Stack, Button, Box } from "@mui/material";
import { useContext } from "react";
import { StepContext } from "../../../context/StepContext";
import RadioButton from "../../RadioButton/RadioButton";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
const UsageForm = () => {
  const { dispatch } = useContext(StepContext);
  return (
    <>
      <FormWrapper
        primaryText={"How are you planning to use Eden?"}
        secondaryText={"We will streamline your setup experience accordingly."}
      >
        <Formik
          initialValues={{
            name: "",
          }}
          onSubmit={() => {
            dispatch({
              type: "NEXT_STEP",
            });
          }}
        >
          <Form noValidate>
            <Stack spacing={3}>
              <Box
                width={"100%"}
                display='flex'
                gap='30px'
                px={{ sm: "20px", xs: "0" }}
              >
                <RadioButton
                  icon={<PersonIcon />}
                  label='For myself'
                  id='myself'
                  description={
                    "Write better. Think more Clearly. Stay Organized."
                  }
                  name='usage'
                  value='myself'
                />
                <RadioButton
                  icon={<GroupsIcon />}
                  label='With my team'
                  id='team'
                  description={
                    "Write better. Think more Clearly. Stay Organized."
                  }
                  name='usage'
                  value='team'
                />
              </Box>
              <Button type='submit' variant='contained' size='medium'>
                Create Workspace
              </Button>
            </Stack>
          </Form>
        </Formik>
      </FormWrapper>
    </>
  );
};

export default UsageForm;
