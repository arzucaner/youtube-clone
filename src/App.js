import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Search from './pages/Search';
import Navbar from './component/Navbar';
import PageContainer from './containers/PageContainer';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <PageContainer>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="videos/:id" element={<Detail />} />
            <Route path="search/: keyword" element={<Search />} />
          </Routes>
        </PageContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
