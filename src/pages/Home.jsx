import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { DesignContext } from '../context/DesignContent'
import ShowMore from '../popup/ShowMore'
import CreatePost from '../popup/CreatePost'
import SwitchAccount from '../popup/SwitchAccount'
import PostMore from '../popup/PostMore'
import Header from '../components/Header'
import BottomNavigation from '../components/BottomNavigation'
import { singleMenuOptions } from '../utils/LinkOptions'
import SingleMenuItem from '../components/SingleMenuItem'
import CreateNote from '../popup/CreateNote'
import ProfileSettings from '../popup/ProfileSettings'
import ShowFollowers from '../popup/ShowFollowers'
import ShowFollowing from '../popup/ShowFollowing'
import NewCollections from '../popup/NewCollections'
import ChangePhoto from '../popup/ChangePhoto'
import DeleteAccount from '../popup/DeleteAccount'
import ChangePassword from '../popup/ChangePassword'
import SendReport from '../popup/SendReport'

function Home() {
  const { showMore, showSwitch, showPostMore, showCreatePost, showCreateNote, showProfileSettings, showFollowers, showFollowing, showNewCollections, changePhoto, deleteAccount, changePassword, sendReport } = useContext(DesignContext);
  const pathname = useLocation().pathname;

  return (
    <div className='w-full h-screen'>
      <div className='w-full bg-black flex'>
        <div className={`h-screen w-[245px] max-[1350px]:w-[72px] border-r border-zinc-800 max-md:hidden px-3 pt-6 pb-5 flex flex-col justify-between`}>
          <div className='flex flex-col'>
            <NavLink to={"/"} className='w-full flex items-center gap-1 hover:cursor-pointer select-none'>
              <div className={`hidden max-[1350px]:block`}>
                <div className='h-11 w-12 rounded-lg flex justify-center items-center'>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className='text-2xl text-zinc-200'
                  />
                </div>
              </div>
              <p className={`text-2xl font-normal px-3 pt-3 text-zinc-200 font-lobster max-[1350px]:hidden`}>Instagram</p>
            </NavLink>
            <div className='flex flex-col gap-2 w-full mt-9'>
              {
                singleMenuOptions.slice(0, 5).map((item, index) =>
                  <SingleMenuItem key={index} icon={item.icon} title={item.title} link={item.link} />)
              }
            </div>
          </div>
          <div className='flex flex-col gap-3 w-full'>
            {
              singleMenuOptions.slice(5, 7).map((item, index) =>
                <SingleMenuItem key={index} icon={item.icon} title={item.title} link={item.link} />)
            }
          </div>
        </div>
        <div className='text-zinc-200 bg-black mainLeft'>
          {
            pathname.includes('accounts') || pathname.includes('your_activity') ? '' : (
              <div className='sticky top-0 h-[55px] z-10 bg-black hidden max-md:block border-b border-zinc-800'>
                <Header />
              </div>
            )
          }
          <div className='w-full'>
            <Outlet />
          </div>
          <div className='fixed w-full bottom-0 z-20 bg-black h-[55px] hidden max-md:block border-t border-zinc-800'>
            <BottomNavigation />
          </div>
        </div>
      </div>
      {showMore && <ShowMore />}
      {showCreatePost && <CreatePost />}
      {showSwitch && <SwitchAccount />}
      {showPostMore && <PostMore />}
      {showCreateNote && <CreateNote />}
      {showProfileSettings && <ProfileSettings />}
      {showFollowers && <ShowFollowers />}
      {showFollowing && <ShowFollowing />}
      {showNewCollections && <NewCollections />}
      {changePhoto && <ChangePhoto />}
      {deleteAccount && <DeleteAccount />}
      {changePassword && <ChangePassword />}
      {sendReport && <SendReport />}
    </div>
  )
}

export default Home
