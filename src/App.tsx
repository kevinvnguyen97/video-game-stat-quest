import { Box } from "@chakra-ui/react";
import "./App.css";
import NavigationBar from "@components/NavigationBar";
import { Home } from "@pages/Home";
import { Results } from "@pages/Results";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavigationBar />
      <Box>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/search/:searchText" element={<Results />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
