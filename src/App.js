import './App.css';
import Navbar from './components/navbar/Navbar';
import SignUp from './components/signup/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Response from './components/response/Response';

function App() {
  return (
        <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/privacyPolicy" element={<PrivecyPolicy />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
