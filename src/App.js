import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import ProtectedRoutes from "./components/ProtectedRoutes";
import SignUpTwo from "./pages/SignUpTwo";
import SignUpThree from "./pages/SignUpThree";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signuptwo" element={<SignUpTwo />} />
        <Route path="/signupthree" element={<SignUpThree />} />
        <Route
          path="/home"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/account"
          element={
            <ProtectedRoutes>
              <Account />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default App;
