import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="container">
      <h1>Bug Manager</h1>
      <Routes>
        <Route path="/bugs/id/edit" element={<Update/>} />
        <Route path="/bugs/:id" element={<Detail/>} />
        <Route path="/" element={<Main/>} />
      </Routes>
    </div>
  );
}

export default App;
