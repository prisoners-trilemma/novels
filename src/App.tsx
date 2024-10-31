import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Oboro from '~/pages/Oboro';
import Phantom from '~/pages/Phantom';
import Awe from './pages/Awe';
import NoMatch from '~/pages/NoMatch';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="oboro" element={<Oboro />} />
          <Route path="phantom" element={<Phantom />} />
          <Route path="awe" element={<Awe />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
