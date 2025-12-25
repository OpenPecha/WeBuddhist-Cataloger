import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/atoms/sonner.tsx";
import { Auth0ProviderWithNavigate } from "./providers/Auth0ProviderWithNavigate.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Auth0ProviderWithNavigate>
          <App />
          <Toaster swipeDirections={["bottom", "right"]} />
        </Auth0ProviderWithNavigate>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);