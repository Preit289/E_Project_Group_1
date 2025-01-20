import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import Activity from './pages/Activity';
import Tickets from './pages/Tickets';
import ContactUs from './pages/ContactUs';
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
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;