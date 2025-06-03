import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './components/Header/header';
import { Footer } from './components/Footer/footer';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header isHome={isHome} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
