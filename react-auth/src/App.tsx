//App.tsx
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import HomePage from "./Components/HomePage";
import AuthenticationGuard from "./Components/AuthenticationGuard";
import ProfilePage from "./Components/ProfilePage";
import ProtectedPage from "./Components/ProtectedPage";
import CallbackPage from "./Components/CallbackPage";


const App: React.FC = () => {

  const {isLoading} = useAuth0();
  
  if(isLoading) return (<div>Loading...</div>)

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/profile"
        element={<AuthenticationGuard component={ProfilePage} />}
      />
      <Route 
        path="/protected"
        element={<AuthenticationGuard component={ProtectedPage} />}
      />
      <Route path="/callback" element={<CallbackPage />} />
    </Routes>
  );
};

export default App;
