import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";

const root = createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <Auth0Provider
    domain="dev-6tkqlnxcet45xo0q.us.auth0.com"
    clientId="lt1xatXMvshuf2cutUhhSEKNYpvibj85"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Auth0Provider>
);
