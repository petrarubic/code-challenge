import { Routes, Route } from "react-router-dom";
import Encoder from "./pages/Encoder";
import Login from "./pages/Login";
function App() {
  return (
    <div>
      <Routes>
        <Route element={<Encoder />} path="/encode" />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
