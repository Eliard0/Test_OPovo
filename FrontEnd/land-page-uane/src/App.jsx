import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './Views/HeroSection';
import TimeInfoCourse from './Views/TimeInfoCourse';
import SkillsInfoCourse from './Views/SkillsInfoCourse';
import CouserContent from './Views/CouserContent';
import Courses from './Views/Courses';
import CoursePrice from './Views/CoursePrice';

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <TimeInfoCourse />
      <SkillsInfoCourse />
      <CouserContent />
      <Courses />
      <CoursePrice />
      <Footer />
    </>
  )
}

export default App
