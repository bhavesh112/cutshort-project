import { styled, Typography } from "@mui/material";
import { useFormikContext } from "formik";
const RadioButton = ({ name, icon, id, ...props }) => {
  const { setFieldValue } = useFormikContext();
  return (
    <>
      <Radio
        type='radio'
        name={name}
        id={id}
        onChange={() => {
          setFieldValue(name, props.value);
        }}
        value={props.value}
      />
      <RadioLabel htmlFor={id}>
        {icon}
        <Typography
          variant='body1'
          color='text.primary'
          fontWeight={"600"}
          fontSize='1.2rem'
          my={1}
        >
          {props.label}
        </Typography>
        <Typography variant='subtitle2' fontSize='1rem' color='text.secondary'>
          {props.description}
        </Typography>
      </RadioLabel>
    </>
  );
};

const Radio = styled("input")(({ theme }) => ({
  display: "none",
  "&:checked + label": {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
  },
}));

const RadioLabel = styled("label")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: "1 1",
  height: "100%",
  border: "1px solid",
  borderColor: theme.palette.text.secondary,
  borderRadius: "5px",
  padding: theme.spacing(2),
  cursor: "pointer",
  transition: theme.transitions.create(["border-color", "color"], {
    duration: theme.transitions.duration.short,
  }),
  "& .MuiSvgIcon-root": {
    width: "40px",
    height: "40px",
  },
}));

export default RadioButton;
