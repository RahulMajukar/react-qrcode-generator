import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar, { TrialSms } from './components/NavBar';

const App = () => {
  const Home = () => <h1>Home
    <TrialSms />
  </h1>;
  const About = () => <h1>About</h1>;
  const Resume = () => <h1>Resume</h1>;
  const Services = () => <h1>Services</h1>;
  const Gallery = () => <h1>Gallery</h1>;
  const Contacts = () => <h1>Contacts</h1>;
  const NoPageFound = () => <h1>404 Page Not Found</h1>;

  return (
    <BrowserRouter>
      <div className="main-content">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
