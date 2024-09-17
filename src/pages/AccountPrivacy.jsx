import React, {useState} from 'react'
import Footer from '../components/Footer';
import TextSwitch from '../components/TextSwitch';

function AccountPrivacy() {
  const [privateAccount, setPrivateAccount] = useState(false)
  const privateAccountHandler = (value) => {
    setPrivateAccount(value)
  }
  return (
    <div className='w-full h-screen overflow-y-scroll max-xl:px-3'>
      <div className='max-w-[620px] h-[60vh] m-auto mt-12 max-md:mt-4'>
        <p className='text-xl font-bold text-zinc-200'>Account privacy</p>
        <TextSwitch title="Private account" switchVal={privateAccount} swithHandler={privateAccountHandler} />
        <p className='text-xs font-normal text-zinc-400 mt-5'>When your account is public, your profile and posts can be seen by anyone, on or off Instagram, even if they don't have an Instagram account.</p>
        <p className='text-xs font-normal text-zinc-400 mt-4'>When your account is private, only the followers you approve can see what you share, including your photos or videos on hashtag and location pages, and your followers and following lists.</p>
      </div>
      <div className='max-w-[700px] m-auto mt-10 mb-14'>
        <Footer />
      </div>
    </div>
  )
}

export default AccountPrivacy