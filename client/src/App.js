import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/nav';
import ContextProvider from './context/index';
import ApiPage from './pages/api/components';
import HomePage from './pages/home/components';


function App() {
  return ( 
    <div className="App">
      <Router>
      <Navbar />
      <ContextProvider>
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
      </ContextProvider>
        <Routes>
          <Route path='/jokePage' element={<ApiPage />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
