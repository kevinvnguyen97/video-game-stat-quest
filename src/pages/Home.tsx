import { Image, Input, Text, Box, Group, IconButton } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

export const Home = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Text textAlign="center" fontSize="4xl">
        Video Game Stat Quest
      </Text>
      <Image src="/src/assets/video_game_controller.gif" marginX="auto" />
      <Group width="100%" maxWidth={500} attached>
        <Input placeholder="Search for a game" variant="subtle" size="xl" />
        <IconButton size="xl" colorPalette="blue">
          <AiOutlineSearch />
        </IconButton>
      </Group>
    </Box>
  );
};
