import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login/Login.tsx";
import Text from "./routes/Text/Text.tsx";

function App() {
  return (
    <div className="flex w-full">
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Text />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;