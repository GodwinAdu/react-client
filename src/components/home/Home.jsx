import React from 'react'
import Layout from '../../layout'
import Hero from '../hero/Hero'
import Features from '../features/Features'
import Video from '../video/Video'
import Brands from '../brands/Brands'
import AboutSectionOne from '../about/AboutSectionOne'
import AboutSectionTwo from '../about/AboutSectionTwo'
import Contact from '../contact/Contact'
import ChurchServices from '../church/ChurchService'
import ScrollUp from '../commons/ScrollUp'

const Home = () => {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <ChurchServices />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Contact />
    </>
  )
}

export default Home
