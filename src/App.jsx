import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import CreateAccount from './pages/CreateAccount';

const App = () => {
  return (
    <Router>
    
      <div className="bg-eshiksha-dark min-h-screen flex flex-col"> 
        <Navbar />
        

        <div className="flex-grow"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/create-account" element={<CreateAccount />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;