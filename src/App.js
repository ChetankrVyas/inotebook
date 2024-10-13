import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <>
      <NoteState>
        <div className="container">
          <Router>
            <Navbar />
            <Alert message="This is amazing React course" />
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/login" element ={<Login/>}></Route>
              <Route path="/signup" element={<Signup />}></Route>
            </Routes>
          </Router>
        </div>
      </NoteState>
    </>
  );
}

export default App;