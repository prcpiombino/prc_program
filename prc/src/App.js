import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './components/Main';
import ProgramPage from './components/ProgramPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/PRC_Piombino" element={<ProgramPage />} />
        <Route path="/PRC_Piombino/home" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
