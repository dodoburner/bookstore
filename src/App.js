import './App.css';
import { Routes, Route } from 'react-router-dom';
import BooksPage from './components/BooksPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BooksPage />} />
      </Routes>
    </div>
  );
}

export default App;
