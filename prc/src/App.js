import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './components/Main';
import ProgramPage from './components/ProgramPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/PRC_Piombino" element={<Main />} />
        <Route path="/program" element={<ProgramPage />} />
      </Routes>
    </Router>
  );
}

export default App;
