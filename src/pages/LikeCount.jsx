import React, {useState} from 'react'
import Footer from '../components/Footer';
import TextSwitch from '../components/TextSwitch';

function LikeCount() {
  const [hideLike, setHideLike] = useState(false);
  const hideLikeHandler = (value) => {
      setHideLike(value)
  }
  return (
    <div className='w-full h-screen overflow-y-scroll max-xl:px-3'>
      <div className='max-w-[620px] h-[60vh] m-auto mt-12 max-md:mt-4'>
        <p className='text-xl font-bold text-zinc-200'>Like and share counts</p>
        <TextSwitch title="Hide like & share counts" switchVal={hideLike} swithHandler={hideLikeHandler} />
        <p className='text-xs font-normal text-zinc-400 mt-5'>On Instagram, the number of likes on posts and reels from other accounts will be hidden. You can hide the number of likes on your own posts and reels by going to Advanced settings before sharing.</p>
      </div>
      <div className='max-w-[700px] m-auto mt-10 mb-14'>
        <Footer />
      </div>
    </div>
  )
}

export default LikeCount