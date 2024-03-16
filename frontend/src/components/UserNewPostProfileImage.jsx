import { Box } from "@mui/material";

const UserProfileImage = ({ image, size = "100px" }) => {
  return (
    <Box width={size} height={size} alignContent={"center"} 
                 >
      <img
        style={{ objectFit: "cover", 
          boxShadow: '1px 2px 9px 3px #8F8695',
          borderRadius:'50%',
          marginTop:'-50px',
          marginLeft:'14rem'
          
      }}
        width={size}
        height={size}
        alt="user"
        src={`http://localhost:6001/assets/${image}`}
      />
    </Box>
  );
};

export default UserProfileImage;
