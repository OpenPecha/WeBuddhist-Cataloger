import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login/Login.tsx";
import { AuthenticationGuard } from "./providers/AuthGuard.tsx";
import { lazy, Suspense } from "react";
const Text = lazy(() => import("./routes/Text/Text.tsx"));
const Instance = lazy(() => import("./routes/Instance/Instance.tsx"));

function App() {
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
              path="/instance/:id"
              element={<AuthenticationGuard component={Instance} />}
            />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
