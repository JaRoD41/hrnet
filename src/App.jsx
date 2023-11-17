import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
