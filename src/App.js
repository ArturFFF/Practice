import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageKontakty from "./pages/kontakty/index"
import PageNovosti from "./pages/novosti/novosti"
import PageoNas from './pages/oNas/oNas';
import PageHook from './pages/spisok/dorogo/hook';
import PageLina from './pages/spisok/deshevo/lina';
import PageTB from './pages/spisok/dorogo/TB';
import PageBB from './pages/spisok/dorogo/bashers';
import PageUrsa from './pages/spisok/deshevo/ursa';
import PageNix from './pages/spisok/deshevo/nix';
import PageWR from './pages/spisok/deshevo/wr';
import PagePudge from './pages/spisok/dorogo/pudgesos';
import PageFooter from './pages/footer/footer';
import PageHeader from './pages/header/header';
import PageMenuM from './pages/menuM/menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageHeader/>
          <Routes>
            <Route path={'/'} element={<PageMenuM />} />
            <Route path={'/kontakty'} element={<PageKontakty />} />
            <Route path={'/oNas'} element={<PageoNas />} />
            <Route path={'/novosti'} element={<PageNovosti />} />
            <Route path={'/bb'} element={<PageBB />} />
            <Route path={'/hook'} element={<PageHook />} />
            <Route path={'/tb'} element={<PageTB />} />
            <Route path={'/pudge'} element={<PagePudge />} />
            <Route path={'/lina'} element={<PageLina />} />
            <Route path={'/ursa'} element={<PageUrsa />} />
            <Route path={'/nix'} element={<PageNix />} />
            <Route path={'/wr'} element={<PageWR />} />
          </Routes>
        <PageFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
