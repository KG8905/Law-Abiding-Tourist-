import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { GlobalContextProvider } from "./context/GlobalContext";

import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Auth from "./components/Auth";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <GlobalContextProvider>
          <Auth>
            <Outlet />
          </Auth>
        </GlobalContextProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
