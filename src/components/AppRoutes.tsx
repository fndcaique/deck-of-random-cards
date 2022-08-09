import { Route, Routes } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Cards from '../pages/Cards';
import Login from '../pages/Login';
import Footer from './Footer';
import Header from './Header';

function AppRoutes() {
  const isAuthenticated = useAuth();
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </main>
      {isAuthenticated && <Footer />}
    </div>
  );
}

export default AppRoutes;
