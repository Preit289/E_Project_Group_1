import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs/AboutUs';
import Disclaimer from "./pages/AboutUs/Disclaimer";
import PrivacyPolicy from "./pages/AboutUs/PrivacyPolicy";
import TicketsTerm from './pages/AboutUs/TicketsTerm';
import Gallery from './pages/Gallery';
import Activity from './pages/Activity';
import Tickets from './pages/Tickets';
import ContactUs from './pages/ContactUs';
import Review from './pages/Review';
import Notfound from './pages/Notfound';
import Layout from './layouts/Layout';
import "./styles/App.scss"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/aboutus/disclaimer" element={<Disclaimer />} />
            <Route path="/aboutus/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/aboutus/tickets-term" element={<TicketsTerm />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/review" element={<Review />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;