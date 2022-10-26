import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { LoginPage } from './views/auth/Login';
import { RegisterPage } from './views/auth/Register';
import { HomePage } from './views/berita/Home';
import { NewsPage } from './views/berita/News';
import { TentangPage } from './views/berita/Tentang';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/tentang-kami' element={<TentangPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
