import React from 'react'
import { explore } from '../utils/explore'
import Footer from '../components/Footer'
import ExplorePost from '../components/ExplorePost'

function Explore() {
  return (
    <div className='w-full flex flex-col items-center h-screen overflow-y-scroll'>
      <div className='max-w-[950px] mt-6 max-md:mt-3 h-max grid grid-cols-3 max-md:px-3 max-lg:px-3 gap-1'>
        {
          explore.map((item, index) => <ExplorePost key={index} photo={item.photos} comments={item.comments} />)
        }
      </div>
      <Footer />
    </div>
  )
}

export default Explore
