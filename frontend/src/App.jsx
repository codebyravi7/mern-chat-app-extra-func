import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import Loading from "./pages/loading/Loading";
import { useEffect, useState } from "react";

function App() {
  const { authUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or fetch data
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after data is loaded
    }, 4000); // Adjust time as necessary
  }, []);
  return (
    <div className="h-screen flex items-center justify-center">
      <video autoPlay muted loop id="bg-video">
        <source src="/1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {isLoading && <Loading />}
      {!isLoading && (
        <Routes>
          <Route
            path="/"
            element={
              authUser ? (
                <Home /> // Show homepage when loading is complete
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <SignUp />}
          />
        </Routes>
      )}
      <Toaster />
    </div>
  );
}

export default App;
