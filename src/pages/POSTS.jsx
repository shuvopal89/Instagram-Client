import React from 'react'
import { explore } from '../utils/explore'
import ExplorePost from '../components/ExplorePost'
import PSTDefault from '../components/PSTDefault'
import { faImage } from '@fortawesome/free-regular-svg-icons'

function POSTS() {
  return (
    <>
      <div className='w-full flex flex-col items-center'>
        <div className='max-w-[950px] h-max grid grid-cols-3 max-md:px-3 max-lg:px-3 gap-1'>
          {
            explore.map((item, index) => <ExplorePost key={index} photo={item.photos} comments={item.comments} />)
          }
        </div>
      </div>
      {/* <PSTDefault
        icon={faImage}
        title={'Share Photos'}
        desc={'When you share photos, they will appear on your profile.'}
        extra={'Share your first photo'}
      /> */}
    </>
  )
}

export default POSTS
