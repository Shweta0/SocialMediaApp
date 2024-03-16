import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetweenComponent from "components/FlexBetweenComponent";
import RootComponent from "components/RootComponent";
import WidgetWrapperNew from "components/RootComponentForProfile";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserProfileImage from "components/UserProfileImage";
import FlexSpaceAroundComponent from "components/FlexSpaceAroundComponent";
import ProfileInfo from "components/ProfileInfo";
import locationIcon from '../../assets/locationIcon.png'
import workIcon from '../../assets/work.png'
import bottomGradient from '../../assets/bottomGradient.png'
import IconComponent from "components/IconComponent";

const UserProfileCard = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  const getUser = async () => {
    const response = await fetch(`http://localhost:6001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); 

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = user;

  return (
    <WidgetWrapperNew
         style = {{
          boxShadow: '1px 2px 9px 3px #ffb3ff',
         }}
   >

    
    
           <UserProfileImage image={picturePath}  
            />
      


      {/* FIRST ROW */}
      <FlexSpaceAroundComponent
        
        onClick={() => navigate(`/profile/${userId}`)}
      >

        <ProfileInfo  

        style = {{
          boxShadow: '1px 2px 9px 3px #9999ff'}}
          
        gap="1rem">
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: '#0080ff',
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography color={dark}>{friends.length} friends</Typography>
          </Box>
        </ProfileInfo >


       
      </FlexSpaceAroundComponent>

     

      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="1rem" ml='3rem' mt='10px'>
          <IconComponent
                srcImage={locationIcon}
          />
          <Typography color='#000d1a'>{location}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem" mb="1rem" ml='3rem' mt='10px'>
        <IconComponent
                srcImage={workIcon}
          />
          <Typography color='#000d1a'>{occupation}</Typography>
        </Box>
        
      </Box>
      
      </WidgetWrapperNew>
       );
      };

    
export default UserProfileCard;
