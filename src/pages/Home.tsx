import { Image, Input, Text, Box, Group, IconButton } from "@chakra-ui/react";
import { APP_NAME } from "@constants/appName";
import { useLayoutEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    window.document.title = `Home - ${APP_NAME}`;
  }, []);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Text textAlign="center" fontSize="4xl">
        {APP_NAME}
      </Text>
      <Image src="/src/assets/video_game_controller.gif" marginX="auto" />
      <Group width="100%" maxWidth={500} attached>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for a game"
          variant="subtle"
          size="xl"
        />
        <IconButton
          onClick={() => navigate(`/search/${input}`)}
          size="xl"
          colorPalette="blue"
        >
          <AiOutlineSearch />
        </IconButton>
      </Group>
    </Box>
  );
};
