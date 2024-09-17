import React, { useContext } from 'react'
import { DesignContext } from '../context/DesignContent'
import { postMoreOptions } from '../utils/LinkOptions';

function PostMore() {
    const { setShowPostMore, showPostMore } = useContext(DesignContext);
    const handlePostShowMore = (e) => e.target.classList.contains("parent") && setShowPostMore(false);

    const handleItemClick = (title) => {
        switch (title) {
            case "Cancel":
                setShowPostMore(false);
                break;
        }
    }
    return (
        <div className={`parent w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-black/60 z-50`} onClick={handlePostShowMore}>
            <div className={`w-[350px] bg-zinc-800 rounded-2xl max-md:mx-3 divide-y divide-zinc-700 hover:cursor-pointer ${showPostMore ? 'scaleAnimShow' : ''}`}>
                {postMoreOptions.map((item, index) => <p key={index} onClick={() => handleItemClick(item.title)} className={`text-center text-sm font-medium ${item.color} py-4`}>{item.title}</p>)}
            </div>
        </div>
    )
}

export default PostMore;
