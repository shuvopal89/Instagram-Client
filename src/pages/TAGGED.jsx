import React from 'react'
import {faBookmark} from '@fortawesome/free-regular-svg-icons'
import PSTDefault from '../components/PSTDefault'

function TAGGED() {
  return (
    <div className='w-full'>
      <PSTDefault
        icon={faBookmark}
        title={'Photos of you'}
        desc={"When people tag you in photos, they'll appear here."}
      />
    </div>
  )
}

export default TAGGED
