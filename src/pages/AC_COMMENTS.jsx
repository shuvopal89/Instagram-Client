import React from 'react'
import TextDefault from '../components/TextDefault'
import ActivityComments from '../components/ActivityComments'

function COMMENTS() {
  return (
    <div>
      {/* <TextDefault title="You haven't commented on any posts." /> */}
      <div className='w-full min-h-[500px]'>
        <div className='flex flex-col gap-2 mt-6'>
          <ActivityComments
            id={1}
            comment={"Lorem ipsum dolor sit amet consectetur adipisicing elit. 😂😂😂😂😂"}
            date={'4h'}
            post={['https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']}
          />
        </div>
      </div>
    </div>
  )
}

export default COMMENTS
