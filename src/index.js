import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HelmetProvider>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        {/* devtools */}
        <ReactQueryDevtools initialIsOpen={true} />
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </HelmetProvider>
);
