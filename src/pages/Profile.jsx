import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faThreads } from '@fortawesome/free-brands-svg-icons'
import { suggested } from '../utils/suggested'
import SuggestedProfileInside from '../components/SuggestedProfileInside'
import { profileRouteOptions } from '../utils/LinkOptions'
import ProfileRoute from '../components/ProfileRoute'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { DesignContext } from '../context/DesignContent'

function ProfileButton({ children }) {
  const navigate = useNavigate()
  const profileButtonNav = () => {
    if (children === 'Edit profile') {
      window.innerWidth <= 768 ? navigate("/accounts") : navigate('/accounts/edit')
    }
  }
  return <button onClick={profileButtonNav} className='w-28 py-2 select-none text-sm font-medium rounded-md bg-zinc-700/80 hover:bg-zinc-800'>{children}</button>
}

function Profile() {
  const [currentPhoto, setCurrentPhoto] = useState(0)
  const { setShowCreateNote, setShowProfileSettings, setShowFollowers, setShowFollowing, setChangePhoto } = useContext(DesignContext)

  const goToPrev = () => (currentPhoto !== 0) && setCurrentPhoto(currentPhoto => currentPhoto -= 3)
  const goToNext = () => (currentPhoto !== suggested.length - 3) && setCurrentPhoto(currentPhoto => currentPhoto += 3)

  function PFF({ children, staticContent, title }) {
    const clickHandler = () => {
      if (title === 'followers') setShowFollowers(true)
      if (title === 'following') setShowFollowing(true)
    }
    return <p onClick={() => clickHandler()} className={`text-md font-normal select-none text-zinc-200 ${!staticContent && 'hover:cursor-pointer'}`}>{children}</p>
  }

  return (
    <div className='w-full h-screen overflow-y-scroll'>
      <div className='w-full mt-10 max-w-[900px] m-auto'>
        <div className='max-w-[800px] m-auto flex gap-24 max-md:gap-5 items-center max-md:flex-col max-md:items-start max-lg:px-3'>
          <div className='flex items-center gap-5'>
            <div className='w-36 h-36 max-md:w-20 max-md:h-20 relative flex-shrink-0'>
              <img onClick={() => setChangePhoto(true)} src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" className='h-full w-full select-none rounded-full object-cover hover:cursor-pointer' alt="" />
              <div onClick={() => setShowCreateNote(true)} className='w-16 h-10 rounded-lg bg-zinc-800 absolute -top-8 left-10 max-md:left-3 hover:cursor-pointer'>
                <p className='text-xs font-normal text-zinc-400 leading-10 ml-2'>Note...</p>
                <p className='w-3 h-3 rounded-sm bg-zinc-800 rotate-45 -mt-2 ml-3'></p>
              </div>
            </div>
            <div className='hidden max-md:block'>
              <div className='flex flex-col gap-3'>
                <div className='flex items-center gap-2'>
                  <p className='text-xl font-normal text-zinc-200 mr-4'>shuvopal89</p>
                  <FontAwesomeIcon
                    icon={faGear}
                    onClick={() => setShowProfileSettings(true)}
                    className='text-xl text-zinc-200 hover:cursor-pointer'
                  />
                </div>
                <div className='flex items-center gap-2'>
                  <ProfileButton>Edit profile</ProfileButton>
                  <button className='w-24 hidden py-2 select-none text-sm font-medium rounded-md bg-blue-500 hover:bg-blue-600'>Follow</button>
                  <ProfileButton>View archive</ProfileButton>
                </div>
              </div>
            </div>
          </div>
          <div className='max-w-[560px] flex'>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-3 max-md:hidden'>
                <p className='text-xl font-normal text-zinc-200 mr-4'>shuvopal89</p>
                <ProfileButton>Edit profile</ProfileButton>
                <button className='w-24 hidden py-2 select-none text-sm font-medium rounded-md bg-blue-500 hover:bg-blue-600'>Follow</button>
                <ProfileButton>View archive</ProfileButton>
                <FontAwesomeIcon
                  icon={faGear}
                  onClick={() => setShowProfileSettings(true)}
                  className='text-xl text-zinc-200 hover:cursor-pointer'
                />
              </div>
              <div className='flex items-center gap-8'>
                <PFF staticContent={true}>{`${5} posts`}</PFF>
                <PFF title={'followers'}>{`${13} followers`}</PFF>
                <PFF title={'following'}>{`${95} following`}</PFF>
              </div>
              <div className='flex flex-col gap-[7px]'>
                <p className='text-sm font-medium text-zinc-200'>Shuvo Pal</p>
                <div className='flex items-center select-none gap-1 w-max bg-zinc-700/80 rounded-2xl py-1 px-2 hover:cursor-pointer hover:bg-zinc-700'>
                  <FontAwesomeIcon
                    icon={faThreads}
                    className='text-md text-zinc-200 hover:cursor-pointer'
                  />
                  <p className='text-xs font-normal text-zinc-200'>shuvopal89</p>
                </div>
                <p className='text-sm font-normal text-zinc-200'>Don't worry!</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full mt-10 max-md:mt-8 flex items-center justify-between max-lg:px-3'>
          <p className='text-md font-medium text-zinc-200'>Suggested for you</p>
          <p className='text-sm font-medium text-blue-500 hover:cursor-pointer'>See all</p>
        </div>
        <div className='relative mt-4'>
          <div className='flex w-full overflow-hidden overflow-x-scroll max-lg:pl-3 no-scrollbar'>
            {
              suggested.map((item, index) => {
                return (
                  <SuggestedProfileInside key={index} cp={currentPhoto} photo={item.profile} username={item.username} name={item.name} />
                )
              })
            }
            {
              suggested.length > 1 && (
                <>
                  <FontAwesomeIcon
                    icon={faCircleChevronLeft}
                    onClick={goToPrev}
                    className={`text-2xl absolute top-1/2 left-3 text-zinc-200 hover:cursor-pointer transition-all hover:scale-110 max-md:hidden ${currentPhoto === 0 && 'invisible'}`}
                  />
                  <FontAwesomeIcon
                    icon={faCircleChevronRight}
                    onClick={goToNext}
                    className={`text-2xl absolute top-1/2 right-3 text-zinc-200 hover:cursor-pointer transition-all hover:scale-110 max-md:hidden ${currentPhoto === suggested.length - 3 && 'invisible'}`}
                  />
                </>
              )
            }
          </div>
        </div>
        <div className='w-full border-t bg-black z-20 border-zinc-800 mt-10 max-md:mt-8 max-md:border-b'>
          <div className='m-auto flex justify-center gap-16 max-md:gap-0'>
            {
              profileRouteOptions.map((item, index) =>
                <ProfileRoute key={index} title={item.title} icon={item.icon} link={item.link} />)
            }
          </div>
        </div>
        <div className='w-full h-max'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Profile