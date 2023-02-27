import { Routes, Route, Navigate } from "react-router-dom";
import Encoder from "./pages/Encoder";
import Login from "./pages/Login";
import { useLoginDataStore } from "./store/login-data-store";

function App() {
  const isAuthenticated = useLoginDataStore((state) => state.isAuthenticated);

  return (
    <div>
      <Routes>
        <Route exact path="/encode" element={<Encoder />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/"
          element={
            isAuthenticated ? (
              <Navigate replace to={"/encode"} />
            ) : (
              <Navigate replace to={"/login"} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
