import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="flex w-full">
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;