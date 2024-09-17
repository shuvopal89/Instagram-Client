import React from 'react'
import Footer from '../components/Footer'
import { activityLinks } from '../utils/LinkOptions'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ActivityLink({ title, icon, link }) {
    const pathname = useLocation().pathname;
    return (
        <Link to={link} className={`w-max max-md:w-full flex gap-2 items-center justify-center border-b ${link === pathname ? 'border-zinc-200' : 'border-black'}`}>
            <FontAwesomeIcon
                icon={icon}
                className={`text-xs ${link === pathname ? 'text-zinc-200' : 'text-zinc-500'} max-md:text-2xl`}
            />
            <p className={`text-[12px] font-bold tracking-wide ${link === pathname ? 'text-zinc-200' : 'text-zinc-500'} max-md:hidden`}>{title}</p>
        </Link>
    )
}

function Your_Activity() {
    return (
        <div className='w-full h-screen overflow-y-scroll px-3 max-md:px-0'>
            <div className='max-w-[940px] max-md:sticky top-0 bg-black h-[50px] border max-md:border-t-0 max-md:border-l-0 max-md:border-r-0 z-20 m-auto mt-7 max-md:mt-0 border-zinc-800 flex justify-evenly rounded-t-3xl'>
                {
                    activityLinks.map((item, index) => <ActivityLink key={index} title={item.title} icon={item.icon} link={item.link} />)
                }
            </div>
            <div className='max-w-[940px] h-[84vh] max-md:h-max border-l border-r max-md:border-0 border-b m-auto border-zinc-800 px-6 pb-4 max-md:px-3 overflow-y-scroll max-md:overflow-y-hidden rounded-b-3xl'>
                <Outlet />
            </div>
            <div className='mb-14'>
                <Footer />
            </div>
        </div>
    )
}

export default Your_Activity
