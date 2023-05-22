import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_URL = "https://countries.nausicaa.wilders.dev";

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export default client;
