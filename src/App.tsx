import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./routes/Login/Login.tsx";
import { AuthenticationGuard } from "./providers/AuthGuard.tsx";
import { lazy, Suspense, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./lib/constants.ts";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "./config/axios-config.ts";
const Text = lazy(() => import("./routes/Text/Text.tsx"));
const Instance = lazy(() => import("./routes/Instance/Instance.tsx"));

type Auth0UserType = {
  getIdTokenClaims: () => Promise<any>;
  isAuthenticated: boolean;
  logout: (options?: { logoutParams?: { returnTo: string } }) => Promise<void>;
};

function App() {
  const navigate = useNavigate();
  const tokenRefreshIntervalMs = Number(60000) || 0;

  const [intervalId, setIntervalId] = useState<ReturnType<
    typeof setInterval
  > | null>(null);
  const { getIdTokenClaims, isAuthenticated, logout }: Auth0UserType =
    useAuth0() as Auth0UserType;

  useEffect(() => {
    if (isAuthenticated) {
      const getToken = async () => {
        try {
          const claims = await getIdTokenClaims();
          const idToken = claims.__raw;
          if (Date.now() >= claims.exp * 1000) {
            sessionStorage.removeItem(ACCESS_TOKEN);
            localStorage.removeItem(REFRESH_TOKEN);
            isAuthenticated &&
              (await logout({
                logoutParams: {
                  returnTo: globalThis.location.origin,
                },
              }));
          } else {
            sessionStorage.setItem(ACCESS_TOKEN, idToken);
          }
        } catch (error) {
          console.error("Error fetching token:", error);
        }
      };
      getToken().then();
    }
  }, [isAuthenticated]);

  const loginMutation = useMutation({
    mutationFn: async (refreshToken: string) => {
      const response = await axiosInstance.post("/api/v1/auth/refresh-token", {
        token: refreshToken,
      });
      return response.data;
    },
    onSuccess: (data: { access_token: string }) => {
      sessionStorage.setItem(ACCESS_TOKEN, data.access_token);
      if (!intervalId) {
        startTokenRefreshCounter();
      }
    },
    onError: () => {
      sessionStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(REFRESH_TOKEN);
      navigate("/login");
    },
  });

  const startTokenRefreshCounter = () => {
    const interval = setInterval(() => {
      const refreshToken = localStorage.getItem(REFRESH_TOKEN);
      if (refreshToken) {
        loginMutation.mutate(refreshToken);
      }
    }, tokenRefreshIntervalMs);
    setIntervalId(interval);
  };
  return (
    <div className="flex w-full">
      <div className="flex-1 overflow-auto">
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center h-screen">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={<AuthenticationGuard component={Text} />}
            />
            <Route
              path="/text/:id"
              element={<AuthenticationGuard component={Instance} />}
            />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
