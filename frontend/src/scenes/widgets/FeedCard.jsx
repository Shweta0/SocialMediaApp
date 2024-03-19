import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetweenComponent from "components/FlexBetweenComponent";
import FlexSpaceAroundComponent from "components/FlexSpaceAroundComponent";
import Friend from "components/Friend";
import RootComponent from "components/RootComponent";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";
import RootComponentForNewPost from 'components/RootComponentForNewPost';
import descriptionBg from '../../assets/descBg.jpg';


const FeedCard = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;

  const patchLike = async () => {
    const response = await fetch(`https://socialmediaapp-iedb.onrender.com/posts/${postId}/like`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    });
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  return (
    <RootComponentForNewPost m="3rem 0"
    style = {{    
      
      boxShadow: '1px 2px 9px 2.5px #000000',
      paddingBottom:'20px'}}>

          
        {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem"}}
          src={`https://socialmediaapp-iedb.onrender.com/assets/${picturePath}`}
        />
      )}

        <Box>
      <FlexBetweenComponent>  

      <Box
      
      style = {{
        width:'70%',
        height:'7rem',
        backgroundColor:'hsla(230, 69%, 10%, 0.8)',
        borderRadius:'10px',
        marginLeft:'80px',
        marginTop:'-60px',
        display:'flex',
        border:'1px solid #ffffff',
        justifyContent:'space-evenly'
        
      }}>
        
      

    
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
         
      <Box display='flex' alignItems='center'
          
          style={{
            marginRight:'10px'
          }}
          >
            <IconButton onClick={patchLike} style={{color:'#ffffff'}}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined style={{color:'#ffffff'}}/>
              )}
            </IconButton>
            <Typography color='#ffffff'>{likeCount}</Typography>

            </Box>
            </Box>
          </FlexBetweenComponent>
          </Box>
          

          
          <Typography color={main} sx={{ color:'#ffffff', fontSize:'16px', fontFamily:'Cedarville Cursive, cursive', fontWeight:'700',
            backgroundImage : `url(${descriptionBg})`,  width:'90%', marginLeft:'30px', border:'1px solid #ffffff', borderRadius:'15px',
            padding:'10px', marginTop:'20px', 
        
        }}              
          >
        {description}
      </Typography>
      
    </RootComponentForNewPost>
  );
};

export default FeedCard;
