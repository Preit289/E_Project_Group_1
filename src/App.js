import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateCRUD from './components/CreateCRUD';
import ReadCRUD from './components/ReadCRUD';
import UpdateCRUD from './components/UpdateCRUD';
import Notfound from './pages/Notfound';
import Layout from './layout/Layout';
import "./App.scss"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<ReadCRUD />} />
            <Route path="/create" element={<CreateCRUD />} />
            <Route path="/update" element={<UpdateCRUD />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;