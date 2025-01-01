import { Home, Login, Signup, Feed } from './pages'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/feed" element={<Feed />} />
      </Routes>
    </>
  );
}

export default App;
