import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs/AboutUs';
import Disclaimer from "./pages/AboutUs/Disclaimer";
import PrivacyPolicy from "./pages/AboutUs/PrivacyPolicy";
import TicketsTerm from './pages/AboutUs/TicketsTerm';
import Gallery from './pages/Gallery/Gallery';
import Websitegallery from './pages/Gallery/Websitegallery';
import Visitorgallery from './pages/Gallery/Visitorgallery';
import Activity from './pages/Activity/Activity';
import Accessibility from './pages/Activity/Accessibility'
import Attraction from './pages/Activity/Attractions'
import Beach from './pages/Activity/Beach';
import Events from './pages/Activity/Events'
import FishingPier from './pages/Activity/FishingPier'
import FoodNDrink from './pages/Activity/FoodNDrink'
import Waterpark from './pages/Activity/Waterpark'
import Tickets from './pages/Tickets/Tickets';
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
            <Route path="/gallery/visitor" element={<Visitorgallery />} />
            <Route path="/gallery/website" element={<Websitegallery />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/activity/accessibility" element={<Accessibility />} />
            <Route path="/activity/attractions" element={<Attraction />} />
            <Route path="/activity/beach" element={<Beach />} />
            <Route path="/activity/events" element={<Events />} />
            <Route path="/activity/fishingpier" element={<FishingPier />} />
            <Route path="/activity/foodndrink" element={<FoodNDrink />} />
            <Route path="/activity/waterpark" element={<Waterpark />} />
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