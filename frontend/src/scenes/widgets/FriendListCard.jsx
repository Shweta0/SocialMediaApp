import { Box, Typography, useTheme } from "@mui/material";
import Friend from "components/Friend";
import RootComponent from "components/RootComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";
import frndBg from '../../assets/frndBg.jpg';


const FriendListCard = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  const getFriends = async () => {
    const response = await fetch(
      `http://localhost:6001/users/${userId}/friends`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  useEffect(() => {
    getFriends();
  }, []); 

  return (
    <RootComponent    
    style = {{
      boxShadow: '1px 2px 9px 3px #ffb3ff',
      backgroundImage: `url(${frndBg})`,
      backgroundSize:'cover',
      marginBottom:'20px',
     
      }}>
        
     
    
      <Typography
        color='#ffffff'
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
               
        {friends.map((friend) => (
          <Friend
            key={friend._id}
            friendId={friend._id}
            name={`${friend.firstName} ${friend.lastName}`}
            subtitle={friend.occupation}
            userPicturePath={friend.picturePath}
            
          />
        ))}
   
   </Box>
      
    </RootComponent>
  );
};

export default FriendListCard;
