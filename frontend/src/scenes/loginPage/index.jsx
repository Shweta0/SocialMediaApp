import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import bgVideo from '../../assets/bgVideo.mp4';

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      

<Box>
      <Box
      top='0'
      left='0'
      right='0'
      bottom='0'
      minHeight='100%'
      minWidth='100%'
      position='absolute'
      >
      <video
          src={bgVideo}
          type="bgVideo/mp4"
          loop
          controls={false}
          muted
          autoPlay
          width='100%'     
        />
      
      </Box>

      <Box
       position='relative'
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="2rem"
        backgroundColor={theme.palette.background.alt}
        marginTop='2rem'
        marginLeft='25rem'
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
        Be where the world is going!
        </Typography>
        <Form />
      </Box>
    </Box>
    
    </Box>
  );
};

export default LoginPage;
