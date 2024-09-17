import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DesignContext } from '../context/DesignContent'
import { useNavigate, useLocation } from 'react-router-dom'

function SingleMenuItem({ icon, title, link }) {
    const { setShowMore, setShowCreatePost } = useContext(DesignContext);
    const navigate = useNavigate();
    const pathname = useLocation().pathname;

    const clickHandler = () => {
        navigate(link);
        switch (title) {
            case 'Home':
                break;
            case 'Search':
                break;
            case 'Explore':
                break;
            case 'Notifications':
                break;
            case 'Create':
                setShowCreatePost(true)
                document.title = "Create new post . Instagram"
                break;
            case 'Profile':
                break;
            case 'More':
                setShowMore(true)
                break;
        }
    }
    return (
        <div onClick={clickHandler} className={`group w-full max-[1350px]:w-max flex items-center gap-1 hover:cursor-pointer hover:bg-zinc-800 rounded-lg active:opacity-70`}>
            <div className={`h-12 w-12 ${pathname === link && 'max-[1350px]:bg-zinc-800'} rounded-lg flex justify-center items-center`}>
                {
                    title === 'Profile' ? (
                        <img src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" className={`h-6 w-6 select-none rounded-full object-cover transition-all group-hover:scale-110 group-active:scale-95 ${pathname === link && 'outline outline-offset outline-zinc-200 h-5 w-5'}`} alt="" />
                    ) : (
                        <FontAwesomeIcon
                            icon={icon}
                            className='text-2xl text-zinc-200 group-hover:scale-110 transition-all group-active:scale-95'
                        />
                    )
                }
            </div>
            <p className={`text-md ${pathname === link && 'font-bold'} text-zinc-200 max-[1350px]:hidden`}>{title}</p>
        </div>
    )
}

export default SingleMenuItem