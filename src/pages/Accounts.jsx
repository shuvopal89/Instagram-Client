import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeta } from '@fortawesome/free-brands-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { accountsSettingsOptions } from '../utils/LinkOptions'
import SingleAccountLink from '../components/SingleAccountLink'

function Accounts() {
    const [isLeftPanelShown, setIsLeftPanelShown] = useState(false);
    const navigate = useNavigate()
    const showLeftPanelHandler = () => {
        setIsLeftPanelShown(true)
    }
    const hideLeftPanelHandler = () => {
        setIsLeftPanelShown(false)
        navigate("/accounts");
    }
    return (
        <div className='h-screen bg-black flex'>
            <div className='w-[330px] max-md:w-full h-screen overflow-y-scroll border-r border-zinc-800'>
                <p className='text-xl font-bold text-zinc-200 mt-9 pl-10'>Settings</p>
                <div className='m-4 p-5 bg-zinc-800 rounded-xl hover:bg-zinc-700 hover:cursor-pointer'>
                    <div className='flex items-center gap-1'>
                        <FontAwesomeIcon
                            icon={faMeta}
                            className='text-sm text-blue-500'
                        />
                        <p className='text-md font-medium'>Meta</p>
                    </div>
                    <p className='text-lx font-bold text-zinc-200 mt-2'>Account Center</p>
                    <p className='text-xs font-medium text-zinc-400 mt-1'>Manege you connected experiences and account settings across Meta technologies.</p>
                </div>
                <div className='flex flex-col mt-6 gap-2 px-4 pb-5'>
                    {
                        accountsSettingsOptions.map((item, index) => {
                            return (
                                <SingleAccountLink key={index} icon={item.icon} title={item.title} link={item.link} showLeftPanelHandler={showLeftPanelHandler} />
                            )
                        })
                    }
                </div>
            </div>
            <div className={`h-screen accountMainLeft max-md:fixed top-0 left-0 bg-black max-md:${(window.innerWidth <= 768 && isLeftPanelShown) ? 'block' : 'hidden'}`}>
                <div className='border-b border-zinc-800 hidden max-md:block'>
                    <FontAwesomeIcon
                        icon={faAngleLeft}
                        onClick={() => hideLeftPanelHandler()}
                        className='text-xl p-4'
                    />
                </div>
                <div className='min-h-[75vh]'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Accounts
