import { Routes, Route, Navigate } from 'react-router-dom';
import { SimplePage } from './simple';
import { ComplexPage } from './complex';
import { DialogPage } from './dialog';

function App() {
  return (
    <Routes>
      <Route path="/simple" element={<SimplePage />} />
      <Route path="/complex" element={<ComplexPage />} />
      <Route path="/dialog" element={<DialogPage />} />
      <Route path="/" element={<Navigate to="/simple" replace />} />
    </Routes>
  );
}

export default App;
