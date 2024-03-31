import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import './App.css'

function App() {
  
  return (
    <Router>
    <div className="App">
    <Routes>      
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/signup" element={<SignupPage />} /> 
      <Route exact path="/login" element={<LoginPage />}/>       
    </Routes>
  </div>
  </Router>

  )
}

export default App;
