import FormWrapper from "../../FormWrapper/FormWrapper";
import { Formik, Form } from "formik";
import TextInput from "../../TextInput/TextInput";
import { Stack, Button } from "@mui/material";
import { useContext } from "react";
import { StepContext } from "../../../context/StepContext";
import RadioButton from "../../RadioButton/RadioButton";
const IntroductionForm = () => {
  const { dispatch } = useContext(StepContext);
  return (
    <FormWrapper
      primaryText={"Welcome! First Things First..."}
      secondaryText={"You can always change them later."}
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
            <TextInput name='name' required label='Full Name' />
            <TextInput name='display_name' required label='Display Name' />

            <Button type='submit' variant='contained' size='medium'>
              Create Workspace
            </Button>
          </Stack>
        </Form>
      </Formik>
    </FormWrapper>
  );
};

export default IntroductionForm;
