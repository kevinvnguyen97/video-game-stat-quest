import { Box } from "@chakra-ui/react";
import "./App.css";
import NavigationBar from "@components/NavigationBar";
import { Home } from "@pages/Home";

function App() {
  return (
    <>
      <NavigationBar />
      <Box>
        <Home />
      </Box>
    </>
  );
}

export default App;
