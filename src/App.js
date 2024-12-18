import { Homepage, Login, Signup, MainFeed, DeLawAi, CategoriesContainer } from './containers'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<MainFeed />} />
        <Route path="/delawai" element={<DeLawAi />} />
        <Route path="/categories" element={<CategoriesContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
