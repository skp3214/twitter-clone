import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import GetAllPost from "./pages/GetAllPost";
import GetUserProfile from "./pages/GetUserProfile";


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/getallpost" element={<GetAllPost/>} />
        <Route path="/getuserprofile/:username" element={<GetUserProfile/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
