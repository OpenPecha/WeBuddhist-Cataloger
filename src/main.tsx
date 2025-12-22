import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Text from "./routes/Text/Text.tsx";
import Login from "./routes/Login/Login.tsx";
import { Toaster } from "./components/ui/atoms/sonner.tsx";
import { Auth0ProviderWithNavigate } from "./providers/Auth0ProviderWithNavigate.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: (
          <Text />
        ),
      }
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Auth0ProviderWithNavigate>
        <RouterProvider router={router} />
        <Toaster />
      </Auth0ProviderWithNavigate>
    </QueryClientProvider>
  </StrictMode>,
);