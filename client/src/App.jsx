import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/navbar/NavBar";
import SignUp from "./pages/signup/SignUp";
import LogIn from "./pages/login/LogIn";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/signup"
          element={!user ? <SignUp /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <LogIn /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
