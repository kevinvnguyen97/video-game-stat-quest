import { Image, Input, Text, Box, Group, IconButton } from "@chakra-ui/react";
import { APP_NAME } from "@constants/appName";
import { searchGame } from "@api/igdb";
import { useLayoutEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const Home = () => {
  useLayoutEffect(() => {
    window.document.title = `Home - ${APP_NAME}`;
  }, []);

  const [input, setInput] = useState("");
  const searchForGame = () => {
    searchGame(input);
  };

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
        <IconButton onClick={searchForGame} size="xl" colorPalette="blue">
          <AiOutlineSearch />
        </IconButton>
      </Group>
    </Box>
  );
};
