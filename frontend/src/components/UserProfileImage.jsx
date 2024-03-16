import { Box } from "@mui/material";

const UserProfileImage = ({ image }) => {
  return (
    <Box width='100%' height='100%' alignContent={"center"} 
                 >
      <img
        style={{ objectFit: "cover", 
          boxShadow: '1px 2px 9px 3px #8F8695',
          borderTopLeftRadius:'10px',
          borderTopRightRadius:'10px'
      }}
        width='100%'
        height='280rem'
        alt="user"
        src={`http://localhost:6001/assets/${image}`}
      />
    </Box>
  );
};

export default UserProfileImage;
