import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { genderOptions } from '../utils/featuresOptions';
import Footer from '../components/Footer';
import Switch from '../components/Switch';
import { DesignContext } from '../context/DesignContent';

function EditProfile() {
  const [bio, setBio] = useState("");
  const [gender, setGender] = useState('Prefer not to say');
  const [isGender, setIsGender] = useState(false);
  const [accountSuggestion, setAccountSuggestion] = useState(false);
  const { setChangePhoto } = useContext(DesignContext)

  const handleBio = (e) => {
    const value = e.target.value;
    if (value.length <= 150) {
      setBio(value);
    }
  }

  const isCustomHandler = (e) => {
    const value = e.target.value
    setGender(value)
  }

  const accountSuggestionHandler = (value) => {
    setAccountSuggestion(value)
  }

  const changePhotoHandler = () => setChangePhoto(true)

  return (
    <div className='w-full h-screen overflow-y-scroll max-xl:px-3'>
      <div className='max-w-[620px] m-auto mt-12 max-md:mt-4'>
        <p className='text-xl font-bold text-zinc-200'>Edit profile</p>
        <div className='bg-zinc-800 p-4 rounded-xl flex justify-between items-center mt-10'>
          <div className='flex items-center gap-3'>
            <img onClick={changePhotoHandler} src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" className='h-14 w-14 select-none flex-shrink-0 rounded-full object-cover hover:cursor-pointer max-md:h-11 max-md:w-11' alt="" />
            <div>
              <p className='font-medium text-zinc-200 text-md'>shuvopal89</p>
              <p className='font-normal text-zinc-400 text-sm'>Shuvo Pal</p>
            </div>
          </div>
          <button onClick={changePhotoHandler} className='border-none outline-none bg-blue-500 text-zinc-200 rounded-lg px-5 py-2 hover:cursor-pointer hover:bg-blue-600 text-sm font-medium max-md:px-3'>Change photo</button>
        </div>
        <div className='mt-8'>
          <p className='text-md font-bold text-zinc-200'>Website</p>
          <input className='text-md font-normal w-full p-4 mt-3 rounded-xl bg-zinc-800 placeholder:text-zinc-500 caret-zinc-500 outline-none border border-zinc-700 focus:border-zinc-300' type="text" placeholder='Website' />
        </div>
        <div className='mt-8'>
          <p className='text-md font-bold text-zinc-200'>Name</p>
          <input className='text-md font-normal w-full p-4 mt-3 rounded-xl bg-black placeholder:text-zinc-500 caret-zinc-500 outline-none border border-zinc-700 focus:border-zinc-300' type="text" placeholder='Name' />
          <p className='text-xs font-normal text-zinc-400 mt-2 select-none'>You can't change your profile username. Only changing the name is permissible.</p>
        </div>
        <div className='mt-8'>
          <p className='text-md font-bold text-zinc-200'>Bio</p>
          <textarea onChange={(e) => handleBio(e)} className='text-md font-normal w-full p-4 h-24 mt-3 rounded-xl bg-black placeholder:text-zinc-500 caret-zinc-500 outline-none border resize-none border-zinc-700 focus:border-zinc-300' type="text" placeholder='Bio' value={bio} />
          <p className='text-xs font-medium text-zinc-400 mt-1 text-end tracking-wider'>{`${bio.length}/150`}</p>
        </div>
        <div className='mt-2 relative'>
          <p className='text-md font-bold text-zinc-200'>Gender</p>
          <div onClick={() => setIsGender(val => !val)} className='w-full px-4 h-14 border border-zinc-700 rounded-xl mt-3 hover:cursor-pointer hover:bg-zinc-900 flex justify-between items-center'>
            <p className='text-md font-normal text-zinc-200 select-none'>{gender}</p>
            <FontAwesomeIcon
              icon={faAngleDown}
              className='text-xs text-zinc-400'
            />
          </div>
          <p className='text-xs font-normal text-zinc-400 mt-2 select-none'>{'This won\'t be part of your public profile.'}</p>
          {
            isGender && (
              <div className='w-[350px] max-w-[350px] py-3 bg-zinc-800 mb-5 rounded-xl absolute top-[91px] right-0 border border-zinc-600 z-10'>
                {
                  genderOptions.map((item, index) => {
                    return (
                      <div key={index} className='hover:bg-zinc-700 hover:cursor-pointer'>
                        <div onClick={() => {
                          if (!item.isCustom) {
                            setGender(item.title);
                            setIsGender(false);
                          } else {
                            setGender("");
                          }
                        }} className='flex items-center justify-between py-4 px-6'>
                          <p className='text-sm font-normal text-zinc-200'>{item.title ? item.title : 'Custom'}</p>
                          {
                            item.title === gender || (!['Female', 'Male', 'Prefer not to say'].includes(gender) && item.isCustom) ? (
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                className='text-2xl text-zinc-200'
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faCircle}
                                className='text-2xl text-zinc-400'
                              />
                            )
                          }
                        </div>
                        {
                          item.isCustom && (
                            <div className='px-6 pb-3'>
                              <input onChange={(e) => isCustomHandler(e)} className={`bg-zinc-900 w-full py-4 px-5 rounded-lg text-md font-normal text-zinc-200 border border-zinc-600 focus:border-zinc-300`} name='custom' type="text" value={['Female', 'Male', 'Prefer not to say'].includes(gender) ? "" : gender} onFocus={() => setGender("")} />
                            </div>
                          )
                        }
                      </div>
                    )
                  })
                }
              </div>
            )
          }
        </div>
        <div className='mt-8'>
          <p className='text-md font-bold text-zinc-200'>Show account suggestions on profiles</p>
          <div className='w-full p-4 border border-zinc-700 rounded-xl mt-3 flex justify-between items-center'>
            <div className='flex flex-col gap-0'>
              <p className='text-md font-normal text-zinc-200'>Show account suggestions on profiles</p>
              <p className='text-xs font-normal text-zinc-400 mt-1'>Choose whether people can see similar account suggestions on your profile, and whether your account can be suggested on other profiles.</p>
            </div>
            <div className='min-w-16 flex justify-end'>
              <Switch
                value={accountSuggestion}
                bgActive={'bg-zinc-200'}
                bgInactive={'bg-zinc-700'}
                circleActive={'bg-black'}
                circleInactive={'bg-black'}
                onValueChange={accountSuggestionHandler}
              />
            </div>
          </div>
        </div>
        <div className='flex justify-end mt-8'>
          <button className='w-60 py-3 rounded-lg bg-blue-500 text-zinc-200 border-none outline-none text-sm font-medium hover:bg-blue-600'>Submit</button>
        </div>
      </div>
      <div className='max-w-[700px] m-auto mt-10 mb-14'>
        <Footer />
      </div>
    </div>
  )
}

export default EditProfile