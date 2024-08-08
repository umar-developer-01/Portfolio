import React from 'react'
import Intro from '../components/intro'
import Experience from '../components/experience'
import Portfolio from '../components/protfolio'
import Hireme from '../components/hireme'


const Homepage = () => {
  return (
    <>
      <Intro />
      <Experience />
      <Hireme />
      <Portfolio />
    </>
  )
}

export default Homepage