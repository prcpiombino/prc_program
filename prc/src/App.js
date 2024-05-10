import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './components/Main';
import ProgramPage from './components/ProgramPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/prc_program" element={<ProgramPage />}>
          <Route path="home" element={<Main />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
