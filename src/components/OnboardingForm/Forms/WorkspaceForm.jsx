import FormWrapper from "../../FormWrapper/FormWrapper";
import { Formik, Form } from "formik";
import TextInput from "../../TextInput/TextInput";
import { Stack, Button, Box, InputAdornment } from "@mui/material";
import { useContext } from "react";
import { StepContext } from "../../../context/StepContext";
const WorkspaceForm = () => {
  const { dispatch } = useContext(StepContext);
  return (
    <FormWrapper
      primaryText={"Let's set up a home for all your work."}
      secondaryText={"You can always create another workspace later."}
    >
      <Formik
        initialValues={{
          workspace_name: "",
        }}
        onSubmit={() => {
          dispatch({
            type: "NEXT_STEP",
          });
        }}
      >
        <Form noValidate>
          <Stack spacing={3}>
            <TextInput name='workspace_name' required label='Workspace Name' />

            <TextInput
              name='workspace_url'
              label='Workspace Url'
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    sx={{
                      marginRight: "6px",
                      height: "56px",
                      maxHeight: "unset",
                      padding: "0 16px",
                      backgroundColor: "#f8f9fc",
                    }}
                  >
                    www.eden.com/
                  </InputAdornment>
                ),
              }}
            />

            <Button type='submit' variant='contained' size='medium'>
              Create Workspace
            </Button>
          </Stack>
        </Form>
      </Formik>
    </FormWrapper>
  );
};

export default WorkspaceForm;
