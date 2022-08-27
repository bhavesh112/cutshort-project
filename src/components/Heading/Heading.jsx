import eden from "./../../assets/images/Eden.png";
import { Box, Typography } from "@mui/material";
const Heading = () => {
  return (
    <Box
      display={"flex"}
      justifyContent='center'
      alignItems={"center"}
      gap='12px'
      mb={8}
    >
      <img src={eden} alt='Eden' />
      <Typography variant='h5' fontWeight={"600"}>
        Eden
      </Typography>
    </Box>
  );
};
export default Heading;
