import { Routes, Route, useLocation } from 'react-router-dom';
import TextCRUD from './pages/Text';
import Navigation from './components/Navigation';
import LoginPage from './pages/LoginPage';
import TextInstanceCRUD from './pages/TextInstances';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="h-screen overflow-auto  text-xl bg-linear-to-br from-blue-50 to-indigo-100">
      {!isLoginPage && <Navigation />}
      <div className={isLoginPage ? '' : ''}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={
            <ProtectedRoute>
              <TextCRUD />
            </ProtectedRoute>
          } />
          <Route path="/texts/:text_id/instances" element={
            <ProtectedRoute>
              <TextInstanceCRUD />
            </ProtectedRoute>


          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;