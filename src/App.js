import { Home, Login, Signup, Feed, CourseView, Featured, MyLearning, BookMark, Notification, AddCourse, ViewCourses, AddEditor, AddAdmin, AllEditors, AllAdmins, AllCourses, LegalDictionary, Settings, Categories, CategoryFeed, Logout } from './pages'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


        <Route path="/feed" element={<Feed />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:tag_id" element={<CategoryFeed />} />
        <Route path="/course/:course_uid" element={<CourseView />} />
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


        <Route path="/dictionary/:term" element={<LegalDictionary />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
