import React from 'react'
import VerticalNav from './VerticalNav'

const Home = ({isMobileView}) => {
  return (
    <div>
      <div className="flex">
      <VerticalNav isMobileView={isMobileView}/>
      <div className="main">   
      </div>
      </div>
    </div>
  )
}

export default Home
