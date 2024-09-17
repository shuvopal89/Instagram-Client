import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { DesignContext } from '../context/DesignContent'
import { bottomNavigationOptions } from '../utils/LinkOptions'
import { useLocation, useNavigate } from 'react-router-dom'

function BottomNavigation() {
    const { setShowCreatePost } = useContext(DesignContext);
    const navigate = useNavigate();
    const pathname = useLocation().pathname;
    const bottomIconHandler = (link, title) => {
        navigate(link);
        title === 'Create' && setShowCreatePost(true)
    }
    return (
        <>
            <div className='w-full h-full flex justify-between items-center px-3'>
                {
                    bottomNavigationOptions.map((item, index) =>
                        <div key={index} className={`h-9 w-9 ${pathname === item.link && 'bg-zinc-800'} flex justify-center items-center rounded-lg`}>
                            {item.title === 'Profile' ?
                                <img onClick={() => navigate('/shuvopal89')} src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" className='h-6 w-6 select-none rounded-full object-cover active:scale-95' alt="" />
                                :
                                <FontAwesomeIcon
                                    onClick={() => bottomIconHandler(item.link, item.title)}
                                    icon={item.icon}
                                    className='text-xl text-zinc-200 active:scale-95'
                                />}
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default BottomNavigation
