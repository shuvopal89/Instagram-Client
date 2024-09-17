import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import LoginAccount from '../components/LoginAccount'
import { DesignContext } from '../context/DesignContent'

function SwitchAccount() {
  const { setShowSwitch, showSwitch } = useContext(DesignContext)
  const switchHandler = (e) => e.target.classList.contains("parent") && setShowSwitch(false)
  return (
    <div className={`parent fixed w-full h-screen top-0 left-0 flex justify-center items-center bg-black/60 z-50`} onClick={switchHandler}>
      <div className={`w-[400px] max-md:w-[350px] max-md:mx-3 bg-zinc-800 rounded-2xl ${showSwitch ? 'scaleAnimShow' : ''}`}>
        <div className='w-full py-4 border-b border-zinc-700 flex justify-between items-center px-4'>
          <span className='invisible'>left</span>
          <p className='text-md font-medium text-zinc-200'>Switch accounts</p>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => setShowSwitch(false)}
            className='text-zinc-200 text-2xl hover:cursor-pointer'
          />
        </div>
        <div className='w-full h-[250px] flex flex-col'>
          <div className='w-full h-[200px]'>
            <LoginAccount />
          </div>
          <div className='w-full h-[50px] flex justify-center items-center'>
            <p className='text-sm font-medium text-blue-500 hover:cursor-pointer hover:text-zinc-200'>Log into an Existing Account</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwitchAccount
