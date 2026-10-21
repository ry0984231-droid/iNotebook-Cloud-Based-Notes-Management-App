import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import NoteState from './context/notes/noteState';
import Login from './components/Login';
import Signup from './components/Signup';
import AddNote from './components/AddNote';
import Footer from './components/Footer';
import MyNotes from './components/MyNotes';

function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'iNotebook | Home',
      '/about': 'iNotebook | About',
      '/addnote': 'iNotebook | Add Note',
      '/mynotes': 'iNotebook | My Notes',
      '/login': 'iNotebook | Login',
      '/signup': 'iNotebook | Signup',
    };

    document.title =
      titles[location.pathname] ||
      'iNotebook | Secure Your Notes in the Cloud';
  }, [location.pathname]);

  return null;
}

const App = () => {
  return (
    <NoteState>
      <BrowserRouter>
        <PageTitle />

        <Navbar />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/addnote" element={<AddNote />} />
            <Route path="/mynotes" element={<MyNotes />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </NoteState>
  );
};

export default App;

