import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Article from './pages/Article';
import DetailArticle from './pages/DetailArticle';
import CreateArticle from './pages/CreateArticle';

function App() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/detailarticle" element={<DetailArticle />} />
        <Route path="/create" element={<CreateArticle />} />
      </Routes>

  );
}

export default App;