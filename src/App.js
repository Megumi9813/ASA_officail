import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.scss";
import Contact from "./components/Contact";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Book from "./pages/Book";
import Blogs from "./pages/Blogs";
import ProgramIntro from "./pages/ProgramIntro";
import BlogPage from "./pages/BlogPage";
import Footer from "./components/Footer";
import ScrollBackToTop from "./ScrollBackToTop";

function App() {
  ScrollBackToTop();
  const [teachers, setTeachers] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

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

  return (
    <div className="App">
      <Contact />
      <ScrollToTop />
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
