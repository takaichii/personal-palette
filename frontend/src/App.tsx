// Personal Palette – Root router weaving pages into a serene journey.
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Entries from './routes/Entries';
import EntryDetail from './routes/EntryDetail';
import EntryNew from './routes/EntryNew';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Stats from './routes/Stats';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/entries" element={<Entries />} />
        <Route path="/entries/new" element={<EntryNew />} />
        <Route path="/entries/:id" element={<EntryDetail />} />
        <Route path="/stats" element={<Stats />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
