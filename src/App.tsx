import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import RouterGuard from './components/RouterGuard';
import AppProvider from './context/AppProvider';
import Login from './pages/Login';

function App() {
  return (
    <AppProvider>
      <RouterGuard>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      </RouterGuard>
    </AppProvider>
  );
}

export default App;
