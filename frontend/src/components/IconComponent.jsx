import { Box } from "@mui/material";

const IconComponent = ({ srcImage, size = "32px" }) => {
  return (
    <Box width={size} height={size} alignContent={"center"} 
    
                 >
      <img
        width={size}
        height={size}
        alt="user"
        src={srcImage}
      />
    </Box>
  );
};

export default IconComponent;
