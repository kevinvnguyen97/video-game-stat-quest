import { searchGame } from "@api/igdb";
import { APP_NAME } from "@constants/appName";
import { useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { Text } from "@chakra-ui/react";

export const Results = () => {
  const { searchText = "" } = useParams();

  useLayoutEffect(() => {
    window.document.title = `Search Results for ${searchText} - ${APP_NAME}`;
  }, [searchText]);
  useEffect(() => {
    const searchResults = searchGame(searchText);
  }, [searchText]);

  return (
    <>
      <Text textAlign="center" fontSize="4xl">
        Search results for "{searchText}"
      </Text>
    </>
  );
};
