import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* <Route element={<ProtectedRoutes />}></Route> */}
      </Route>
    </Routes>
  );
}

export default App;
