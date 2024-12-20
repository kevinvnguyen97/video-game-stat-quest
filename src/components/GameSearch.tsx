import { Group, Input, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const GameSearch = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  return (
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
  );
};