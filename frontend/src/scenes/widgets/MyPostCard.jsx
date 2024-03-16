import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import FlexBetweenComponent from "components/FlexBetweenComponent";
import Dropzone from "react-dropzone";
import UserImage from "components/UserImage";
import RootComponent from "components/RootComponent";
import WidgetWrapperNew from "components/RootComponentForProfile";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import dropzoneBg from '../../assets/bg.jpg';
import drop2 from '../../assets/drop2.jpg';
import blurImage from '../../assets/blur.jpg'
import FlexSpaceAroundComponent from "components/FlexSpaceAroundComponent";
import FlexBelow from "components/FlexBelow";
import RootComponentForNewPost from "components/RootComponentForNewPost";
import UserNewPostProfileImage from 'components/UserNewPostProfileImage';
import IconComponent from "components/IconComponent";
import deleteIcon from '../../assets/delete.jpg';

const MyPostCard = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { palette } = useTheme();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", post);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }

    const response = await fetch(`http://localhost:6001/posts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    const posts = await response.json();
    dispatch(setPosts({ posts }));
    setImage(null);
    setPost("");
  };

  return (
    <RootComponentForNewPost
    style = {{
      width:'99%',
      height:'25rem',
      backgroundImage: `url(${blurImage})`,
      boxShadow: '1px 2px 9px 3px #ffb3ff',
      backgroundSize:'cover'
    }}
    >
      <Box >
        <UserNewPostProfileImage image={picturePath} />
        <Box
        
        style = {{
          width:'70%',
          height:'17rem',
          backgroundColor:'hsla(201, 100%, 6%, 0.6)',
          borderRadius:'10px',
          marginLeft:'80px',
          marginTop:'-15px'
          
        }}
        >

      
        <InputBase
          placeholder="What's on your mind..."
          onChange={(e) => setPost(e.target.value)}
          value={post}
          
          sx={{
            width: "80%",
            height:'45px',
            backgroundColor: palette.neutral.light,
            borderRadius: "2rem",
            padding: "1rem 2rem",
            marginTop:'40px',
            marginLeft:'40px',
            marginBottom:'20px',
            border:'3.5px solid #99ddff',
            fontSize:'16px'
          }}
        />
       
     
      {isImage && (
        <Box
          borderRadius="5px"          
        >
          <Dropzone                      
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <FlexBetweenComponent
              style={{
                backgroundColor:'hsla(230, 69%, 10%, 0.3)',                                  
          backgroundSize: "cover",          
          borderRadius:'10px',
          border:'1px solid',
          borderColor:'#ffffff',
          marginTop:'20px',
          width:'60%',
          height:'60px',
          marginLeft:'80px',
          marginTop:'-2px',
          marginBottom:'10px',
                      }
                    }>
                <Box                                   
                  {...getRootProps()}
                  p="1rem"
                  width="100%"  
                  color='#ffffff' 
                  fontSize='15px'                               
                  sx={{ "&:hover": {                   
                      color: '#F8F8F8',
                      cursor: "pointer",}
                   }}
                >
                  <input {...getInputProps()} />
                

                  {!image ? (
                    <p>Add Image Here</p>
                  ) : (
                    <FlexBetweenComponent>
                      <Typography>{image.name}</Typography>
                      <EditOutlined />
                   </FlexBetweenComponent>
                  )}
                </Box>
                {image && (
                  <IconButton
                    onClick={() => setImage(null)}
                    sx={{ width: "15%" }}
                  >
                    <DeleteOutlined style={{ color: '#ffffff' }}/>
                   
                  </IconButton>
                )}
              </FlexBetweenComponent>
            )}
          </Dropzone>
        </Box>
      )}

      

      
        <Box  onClick={() => setIsImage(!isImage)}
            display='flex'
            justifyContent='center'
        >
        <FlexSpaceAroundComponent
        style={{
          backgroundColor:'hsla(200, 100%, 6%, 0.6)', 
          border:'1px solid #ffffff',
          borderRadius:'10px',
          width:'50%',
          height:'20%',
          padding:'11px'
        }}
        sx={{ "&:hover": { cursor: "pointer", color: '#e6ffe6' } }}
        
        >
          <ImageOutlined sx={{ color: '#e6ffe6' }} />
          <Typography
            marginLeft='4px'
            color='#ffffff'
          >
            Image
          </Typography>
          </FlexSpaceAroundComponent>
        </Box>
        

        

        <Button
           disabled={!post}
          onClick={handlePost}
          sx={{
            color: '#000000',
            backgroundColor: '#DCDCDC',
            borderRadius: "3rem",
            border:'1px solid',
            marginLeft:'9.4rem',
            marginTop:'2.3rem',
            width:'100px',
            height:'40px',
            fontSize:'15px',
            fontStyle:'bold'
          }}
        >
          SHARE
        </Button>
       
     
      </Box>
       </Box>
    </RootComponentForNewPost>
  );
};

export default MyPostCard;
