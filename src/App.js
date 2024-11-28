import { Homepage, Login, Signup, MainFeed } from './containers'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<MainFeed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
