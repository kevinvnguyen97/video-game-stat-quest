const BASE_URL = "http://api.igdb.com/v4";

const GAME_FIELDS = [
  "age_ratings",
  "aggregated_rating",
  "aggregated_rating_count",
  "artworks",
  "bundles",
  "category",
  "collection",
  "collections",
  "cover",
  "created_at",
  "first_release_date",
  "franchise",
  "franchises",
  "",
];

export const searchGame = async (gameName: string) => {
  const apiUrl = encodeURI(
    `http://0.0.0.0:8080/${BASE_URL}/games?fields=name&search=${gameName}`
  );
  const fetchGame = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "c5c2t1v0h3gdvazq4gqyx8v2cerfyl",
      Authorization: "Bearer vwq3e0xjotrwqtima9hj9csrsn5vye",
    },
    mode: "cors",
  });
  const fetchGameResponse = await fetchGame.json();
  console.log("FETCH GAME RESPONSE:", fetchGameResponse);
  return fetchGameResponse;
};
