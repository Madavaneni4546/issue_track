// src/pages/LandingPage.js

import { Link } from 'react-router-dom';
// import './LandingPage.css';
import React from 'react';
import HomeNavbar from './homepage/HomeNavbar'
import HomeAboutUs from './homepage/HomeAboutUs'
import HomeContactUs from './homepage/HomeContact'
import HomeAchievements from './homepage/HomeAchievements'
import HomeFooter from './homepage/HomeFooter'
import HomeWhatWeDo from './homepage/HomeWhatWeDo'
import HomeTeam from './homepage/HomeTeam'  

export default function LandingPage() {
  return (
    <div className='App'>
      <HomeNavbar />
      <HomeAboutUs />
      <HomeWhatWeDo />
      <HomeAchievements />
      <HomeTeam />
      <HomeContactUs />
      <HomeFooter />
    </div>
  );
}
