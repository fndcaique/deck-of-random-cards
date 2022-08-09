import AppRoutes from './components/AppRoutes';
import RouterGuard from './components/RouterGuard';
import AppProvider from './context/AppProvider';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppProvider>
        <RouterGuard>
          <AppRoutes />
        </RouterGuard>
      </AppProvider>
    </>
  );
}

export default App;
