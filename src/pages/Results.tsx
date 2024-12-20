import { searchCover, searchGameForResults } from "@api/igdb";
import { APP_NAME } from "@constants/appName";
import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, HStack, Text, VStack, Image, Box } from "@chakra-ui/react";
import { GameSearch } from "@components/GameSearch";

export const Results = () => {
  const { searchText = "" } = useParams();
  const [searchResults, setSearchResults] = useState<GameForSearchResults[]>(
    []
  );

  useLayoutEffect(() => {
    window.document.title = `Search Results for ${searchText} - ${APP_NAME}`;
  }, [searchText]);
  useEffect(() => {
    const searchForGame = async () => {
      const searchResults = await searchGameForResults(searchText);
      setSearchResults(searchResults);
    };
    searchForGame();
  }, [searchText]);

  return (
    <VStack alignItems="center">
      <Text textAlign="center" fontSize="4xl">
        Search results for "{searchText}"
      </Text>
      <GameSearch />
      <HStack alignItems="start">
        <Card.Root variant="subtle" mdTo2xl={{ width: "1/3" }}>
          <Card.Header fontWeight="bold">Options</Card.Header>
        </Card.Root>
        <VStack mdTo2xl={{ width: "2/3" }}>
          {searchResults.map((searchResult) => {
            return (
              <Card.Root variant="subtle" width="100%">
                {/* <Image src={searchResult.coverUrl} /> */}
                <Card.Header fontWeight="bold">{searchResult.name}</Card.Header>
                <Card.Header fontWeight="bold">
                  {searchResult.first_release_date}
                </Card.Header>
                <Card.Body>{searchResult.summary}</Card.Body>
              </Card.Root>
            );
          })}
        </VStack>
      </HStack>
    </VStack>
  );
};
