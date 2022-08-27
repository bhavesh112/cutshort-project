import { Box, Button, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
const FinalStage = () => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection='column'
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "50px",
            height: "50px",
            backgroundColor: "primary.main",
            color: "#fff",
            borderRadius: "50%",
            mb: 3,
          }}
        >
          <CheckIcon />
        </Box>
        <Typography variant='h4' fontWeight={"600"} mb={1}>
          Congratulation, Eren!
        </Typography>
        <Typography fontSize={"1rem"} color='text.secondary' mb={3} px={"8px"}>
          You have completed your onboarding, you can start using Eden.
        </Typography>
        <Box px={"40px"} width='100%'>
          <Button variant='contained' fullWidth>
            Launch Eden
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default FinalStage;
