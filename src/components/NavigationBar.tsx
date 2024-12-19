import { Button, HStack, Image } from "@chakra-ui/react";
import { Avatar, AvatarGroup } from "@components/ui/avatar";
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverRoot,
  PopoverTrigger,
} from "@components/ui/popover";
import { ColorModeButton } from "@components/ui/color-mode";

function NavigationBar() {
  return (
    <HStack
      display="flex"
      height={30}
      padding={10}
      justifyContent="space-between"
    >
      <HStack spaceX={0}>
        <Image src="/src/assets/controller_logo.png" width={10} height="auto" />
        <Button variant="ghost" paddingX={3}>
          Home
        </Button>
        <Button variant="ghost" paddingX={3}>
          My Favorites
        </Button>
        <Button variant="ghost" paddingX={3}>
          Other Favorites
        </Button>
      </HStack>
      <PopoverRoot>
        <PopoverTrigger>
          <Avatar variant="solid" as={Button} />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>username</PopoverHeader>
          <PopoverBody>Login stuff</PopoverBody>
          <PopoverFooter>
            <ColorModeButton />
            <Button>Log Out</Button>
          </PopoverFooter>
        </PopoverContent>
      </PopoverRoot>
    </HStack>
  );
}

export default NavigationBar;
