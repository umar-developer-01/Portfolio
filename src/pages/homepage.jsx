import React from 'react'
import Intro from '../components/intro'
import Experience from '../components/experience'
import WhyhireMe from '../components/whyhireme'
import Portfolio from '../components/protfolio'
import Hireme from '../components/hireme'
import Project from './projects'

const Homepage = () => {
  return (
    <>
      <Intro />
      <Experience />
      {/* <WhyhireMe /> */}
      <Hireme />
      <Portfolio />
    </>
  )
}

export default Homepage