import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login/Login.tsx";
import Text from "./routes/Text/Text.tsx";
import { AuthenticationGuard } from "./providers/AuthGuard.tsx";
import Instance from "./routes/Instance/Instance.tsx";

function App() {
  return (
    <div className="flex w-full">
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<AuthenticationGuard component={Text} />} />
          <Route path="/instance/:id" element={<AuthenticationGuard component={Instance} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;