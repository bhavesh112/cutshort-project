import { Typography, Box } from "@mui/material";

const FormWrapper = ({ primaryText, secondaryText, children }) => {
  return (
    <>
      <Box textAlign={"center"} mb={5}>
        <Typography
          variant='h4'
          fontWeight={"700"}
          fontSize={{ sm: "1.8rem", xs: "1.5rem" }}
          mb={1}
        >
          {primaryText}
        </Typography>
        <Typography
          color={"text.secondary"}
          variant='subtitle1'
          fontSize={{ sm: "1rem", xs: "0.9rem" }}
        >
          {secondaryText}
        </Typography>
      </Box>
      <Box px={{ sm: "40px", xs: "10px" }}>{children}</Box>
    </>
  );
};

export default FormWrapper;
