const BASE_URL = "http://localhost:8080/http://api.igdb.com/v4";

const GAME_FIELDS: (keyof Game)[] = [
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
  "name",
  "summary",
];

const COVER_FIELDS: (keyof Cover)[] = ["url"];

export const searchGameForResults = async (gameName: string) => {
  const apiUrl = encodeURI(
    `${BASE_URL}/games?fields=${GAME_FIELDS.join(
      ","
    )}&search=${gameName}&limit=50`
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

  const fetchGameResponse = (await fetchGame.json()) as GameForSearchResults[];

  return fetchGameResponse;
};

export const searchCover = async (id: number) => {
  const apiUrl = encodeURI(
    `${BASE_URL}/covers?fields=${COVER_FIELDS.join(",")}`
  );
  const fetchCover = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "c5c2t1v0h3gdvazq4gqyx8v2cerfyl",
      Authorization: "Bearer vwq3e0xjotrwqtima9hj9csrsn5vye",
    },
    mode: "cors",
  });
  const fetchCoverResponse = (await fetchCover.json()) as Cover[];
  return fetchCoverResponse[0];
};
