import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Layout from './components/Layout';

// Pages
import CategoriesPage from './pages/CategoriesList';
import ContactPage from './pages/ContactPage';
import CourseDetails from './pages/CourseDetails';
import CourseGrid from './pages/CourseGrid';
import AllTeamMembers from './pages/AllTeamMembers';



// Home Page Sections
import Header from './components/Header';
import CourseCategory from './components/CourseCategory';
import AboutEdgen from './components/AboutEdgen';
import IntroVideo from './components/IntroVideo';
import TopCourses from './components/TopCourses';
import WhyChooseUs from './components/WhyChooseUs';
import NewsLetter from './components/NewsLetter';
import Success from './components/Success';
import LiveClass from './components/LiveClass';
import BlogPosts from './components/BlogPosts';
import TeamSection from './components/TeamMembers';
import CategoriesList from './pages/CategoriesList';
import NewBlogPost from './pages/NewBlogPosts';

// ✅ Home Page content (without Navbar/Footer)
const HomePage = () => {
  return (
    <>
      <Header />
      <CourseCategory />
      <AboutEdgen />
      <IntroVideo />
      <TopCourses />
      <WhyChooseUs />
      <TeamSection />
      <NewsLetter />
      <Success />
      <LiveClass />
      <BlogPosts />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesList />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/courseGrid" element={<CourseGrid />} />
          <Route path="/allteam" element={<AllTeamMembers />} />
          <Route path="/newblog" element={<NewBlogPost />} />
          <Route path="/aboutus" element={<AboutEdgen />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
