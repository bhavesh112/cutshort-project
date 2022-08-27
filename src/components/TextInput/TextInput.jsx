import { useField } from "formik";
import { InputLabel, TextField, useTheme, Box } from "@mui/material";
const TextInput = ({ name, label, ...props }) => {
  const [field, meta] = useField(name);
  const config = {
    ...field,
    ...props,
    fullWidth: true,
  };
  if (meta && meta.error && meta.touched) {
    config.error = true;
    config.helperText = meta.error;
  }
  const theme = useTheme();
  return (
    <>
      <Box>
        {" "}
        <InputLabel
          sx={{
            color: theme.palette.text.primary,
            fontWeight: "600",
            mb: 1,
          }}
        >
          {label}
          {!props.required && (
            <Box
              component='span'
              sx={{
                color: theme.palette.text.secondary,
                fontSize: "0.8rem",
                fontWeight: "500",
              }}
            >
              {" "}
              (Optional)
            </Box>
          )}
        </InputLabel>
        <TextField
          sx={{
            "& .MuiOutlinedInput-root": {
              pl: props?.InputProps?.startAdornment && "0",
            },
          }}
          {...config}
        />
      </Box>
    </>
  );
};

export default TextInput;
