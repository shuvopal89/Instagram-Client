import React, { useContext } from 'react'
import SingleMoreLink from '../components/SingleMoreLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThreads } from '@fortawesome/free-brands-svg-icons'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { DesignContext } from '../context/DesignContent'
import { showMoreOptions } from '../utils/LinkOptions'

function ShowMore() {
    const { setShowMore, setShowSwitch } = useContext(DesignContext)
    const moreHandler = (e) => e.target.classList.contains("parent") && setShowMore(false)
    return (
        <div className='w-full h-screen absolute top-0 left-0 z-50'>
            <div className='w-full h-screen relative parent' onClick={moreHandler}>
                <div className='w-64 h-max bg-zinc-800 rounded-2xl absolute left-4 bottom-[74px] divide-y-4 divide-zinc-700'>
                    <div className='w-full flex flex-col gap-1 p-3 rounded-t-2xl'>
                        {
                            showMoreOptions.map((item, index) =>
                                <SingleMoreLink key={index} icon={item.icon} title={item.title} link={item.link} />)
                        }
                    </div>
                    <div className='w-full p-3'>
                        <NavLink target='_blank' to={"https://www.threads.net/"} className='flex items-center justify-between p-4 rounded-lg hover:cursor-pointer hover:bg-zinc-700 group'>
                            <div className='flex items-center'>
                                <div className='w-8 flex justify-start'>
                                    <FontAwesomeIcon
                                        icon={faThreads}
                                        className='text-zinc-200 text-lg'
                                    />
                                </div>
                                <p className='text-zinc-200 text-sm tracking-wide font-normal'>Threads</p>
                            </div>
                            <FontAwesomeIcon
                                icon={faUpRightFromSquare}
                                className='text-zinc-500 text-md hidden group-hover:block'
                            />
                        </NavLink>
                    </div>
                    <div className='w-full p-3 flex flex-col gap-1'>
                        <p onClick={() => {
                            setShowSwitch(true)
                            setShowMore(false)
                        }} className='p-4 text-sm font-normal tracking-wide w-full text-zinc-200 rounded-lg hover:cursor-pointer hover:bg-zinc-700'>Switch accounts</p>
                        <p onClick={() => setShowMore(false)} className='p-4 text-sm font-normal tracking-wide w-full text-zinc-200 rounded-lg hover:cursor-pointer hover:bg-zinc-700'>Log out</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowMore
