import { Home, Login, Signup, Feed, CourseView, Featured, MyLearning, BookMark, Notification, AddCourse, ViewCourses, AddEditor, AddAdmin, AllEditors, AllAdmins, AllCourses } from './pages'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


        <Route path="/feed" element={<Feed />} />
        <Route path="/course/1" element={<CourseView />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/mylearning" element={<MyLearning />} />
        <Route path="/bookmark" element={<BookMark />} />
        <Route path="/notification" element={<Notification />} />


        <Route path="/addcourse" element={<AddCourse />} />
        <Route path="/viewcourses" element={<ViewCourses />} />

        <Route path="/addeditor" element={<AddEditor />} />
        <Route path="/alleditors" element={<AllEditors />} />

        <Route path="/addadmin" element={<AddAdmin />} />
        <Route path="/alladmins" element={<AllAdmins />} />
        <Route path="/allcourses" element={<AllCourses />} />
      </Routes>
    </>
  );
}

export default App;
