import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ContextProvider } from './context/timersContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
