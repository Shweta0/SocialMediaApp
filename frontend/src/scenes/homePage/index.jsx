import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserProfileCard from "scenes/widgets/UserProfileCard";
import MyPostCard from "scenes/widgets/MyPostCard";
import GetPostDetails from "scenes/widgets/GetPostDetails";
import FriendListCard from "scenes/widgets/FriendListCard";


const HomePage = () => {
  const isWebsiteScreen = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isWebsiteScreen ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isWebsiteScreen ? "26%" : undefined}>
          <UserProfileCard userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isWebsiteScreen ? "42%" : undefined}
          mt={isWebsiteScreen ? undefined : "2rem"}
        >
          <MyPostCard picturePath={picturePath} />
          <GetPostDetails userId={_id} />
        </Box>
        {isWebsiteScreen && (
          <Box flexBasis="26%">
            <Box m="2rem 0" />
            <FriendListCard userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
