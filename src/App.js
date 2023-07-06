import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/official/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.scss";
import Contact from "./components/official/Contact";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import ScrollToTop from "./components/official/ScrollToTop";
import About from "./pages/official/About";
import Programs from "./pages/official/Programs";
import Book from "./pages/official/Book";
import Blogs from "./pages/official/Blogs";
import ProgramIntro from "./pages/official/ProgramIntro";
import BlogPage from "./pages/official/BlogPage";
import Footer from "./components/official/Footer";
import ScrollBackToTop from "./ScrollBackToTop";
import { useLocation } from "react-router-dom";
import MembershipHome from "./pages/membership/MembershipHome";
import './style/tailwind.css';
import MembershipNav from "./components/membership/MembershipNav";
import Nav from "./components/official/Nav";

function App() {
  ScrollBackToTop();
  const [teachers, setTeachers] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const fetchTeachers = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "teachers"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setTeachers(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTeachers();
    const fetchBlogs = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setBlogs(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlogs();
    const fetchTestimonials = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "testimonials"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setTestimonials(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTestimonials();
  }, []);

  const location = useLocation();
  const isMembershipSite = location.pathname.startsWith("/membership");

  return (
    <div className="App">
      {!isMembershipSite && (
        <Contact contactOpen={contactOpen} setContactOpen={setContactOpen} />
      )}
      {!isMembershipSite && <ScrollToTop />}
      {isMembershipSite && <MembershipNav />}
      <Nav contactOpen={contactOpen} setContactOpen={setContactOpen} />
      <Routes>
        <Route
          path="/"
          element={<Home teachers={teachers} testimonials={testimonials} />}
        />
        <Route
          path="/About"
          element={<About teachers={teachers} testimonials={testimonials} />}
        />
        <Route
          path="/Programs"
          element={<Programs testimonials={testimonials} />}
        />
        <Route path="/Booking" element={<Book teachers={teachers} />} />
        <Route path="/Blog" element={<Blogs blogs={blogs} />} />
        <Route path="/ProgramIntro" element={<ProgramIntro />} />
        {blogs.length > 0 &&
          blogs.map((blog) => (
            <Route
              path={"/Blog/" + blog.id}
              element={<BlogPage blog={blog} />}
            />
          ))}
        {isMembershipSite && (
          <>
            <Route path="/membership" element={<MembershipHome />} />
          </>
        )}
      </Routes>
      {!isMembershipSite && <Footer />}
    </div>
  );
}

export default App;
