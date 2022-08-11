import './App.css';
import { Routes, Route } from 'react-router-dom';
import BooksPage from './components/BooksPage';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
