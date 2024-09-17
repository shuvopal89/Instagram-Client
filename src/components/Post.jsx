import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faHeart as faHeartFull, faCircleChevronLeft, faCircleChevronRight, faStar } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faComment, faPaperPlane, faBookmark, faFaceSmile } from '@fortawesome/free-regular-svg-icons'
import { DesignContext } from '../context/DesignContent'
import { useSliceStr } from '../hooks/useSliceStr'

function Post({ id, name, created, photos, likes, isActiveStory, comments, tags, credit, description }) {
    const [isMore, setIsMore] = useState(false)
    const [comment, setComment] = useState("")
    const [currentPhoto, setCurrentPhoto] = useState(0)

    const { setShowPostMore } = useContext(DesignContext)

    const goToPrev = () => (currentPhoto !== 0) && setCurrentPhoto(currentPhoto => currentPhoto -= 1)
    const goToNext = () => (currentPhoto !== photos.length - 1) && setCurrentPhoto(currentPhoto => currentPhoto += 1)

    return (
        <div className='max-w-[470px] h-max'>
            <div className='w-full mt-3 flex justify-between items-center max-sm:px-3'>
                <div className='flex items-center gap-2'>
                    {
                        isActiveStory ? (
                            <div style={{ padding: '2px' }} className='select-none flex-shrink-0 w-max flex justify-center items-center bg-gradient-to-r from-fuchsia-400 from-10% via-amber-400 via-30% to-rose-400 to-90% rounded-full hover:cursor-pointer'>
                                <img src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp" className='w-10 h-10 object-cover rounded-full border-4 border-black' />
                            </div>
                        ) : (
                            <img src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp" className='w-9 h-9 object-cover rounded-full' />
                        )
                    }
                    <div className='flex items-center gap-2 hover:cursor-pointer'>
                        <p className='text-sm font-medium text-zinc-200'>{`${name} . `}</p>
                        <p className='text-zinc-400 text-sm'>{created}</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <FontAwesomeIcon
                        icon={faStar}
                        className='text-sm active:opacity-50 hover:cursor-pointer text-red-500 hidden'
                    />
                    <FontAwesomeIcon
                        icon={faEllipsis}
                        onClick={() => setShowPostMore(true)}
                        className='text-md text-zinc-200 hover:cursor-pointer active:opacity-50'
                    />
                </div>
            </div>
            <div className='relative'>
                <div className=' mt-3 w-full border border-zinc-800 max-sm:border-l-0 max-sm:border-r-0 rounded-sm flex overflow-hidden'>
                    {
                        photos.map((photo, index) => {
                            return (
                                <div key={index} className='flex-shrink-0 w-full select-none flex justify-center items-center transition-transform ease-in-out duration-300' style={{ transform: `translateX(-${currentPhoto * 100}%)` }}>
                                    <img className='w-full max-h-[560px] object-contain' src={photo} alt="" />
                                </div>
                            )
                        })
                    }
                    {
                        photos.length > 1 && (
                            <>
                                <FontAwesomeIcon
                                    icon={faCircleChevronLeft}
                                    onClick={goToPrev}
                                    className={`text-2xl absolute top-1/2 left-3 text-zinc-200 hover:cursor-pointer transition-all hover:scale-110 ${currentPhoto === 0 && 'invisible'}`}
                                />
                                <FontAwesomeIcon
                                    icon={faCircleChevronRight}
                                    onClick={goToNext}
                                    className={`text-2xl absolute top-1/2 right-3 text-zinc-200 hover:cursor-pointer transition-all hover:scale-110 ${currentPhoto === photos.length - 1 && 'invisible'}`}
                                />
                                <div className='absolute bottom-4 w-full flex items-center justify-center gap-1'>
                                    {
                                        photos.map((_, index) => {
                                            return (
                                                <span key={index} className={`bg-zinc-100 rounded-md ${currentPhoto === index ? '' : 'opacity-40'}`} style={{ height: '6px', width: '6px' }}></span>
                                            )
                                        })
                                    }
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
            <div className='w-full max-sm:px-3'>
                <div className='w-full flex items-center justify-between mt-4'>
                    <div className='flex items-center gap-4'>
                        <FontAwesomeIcon
                            icon={faHeart}
                            className='text-2xl text-zinc-200 hover:text-zinc-400 hover:cursor-pointer active:scale-90'
                        />
                        <FontAwesomeIcon
                            icon={faHeartFull}
                            className='text-2xl text-red-500 hidden'
                        />
                        <FontAwesomeIcon
                            icon={faComment}
                            className='text-2xl text-zinc-200 hover:text-zinc-400 hover:cursor-pointer active:scale-90'
                        />
                        <FontAwesomeIcon
                            icon={faPaperPlane}
                            className='text-2xl text-zinc-200 hover:text-zinc-400 hover:cursor-pointer active:scale-90'
                        />
                    </div>
                    <FontAwesomeIcon
                        icon={faBookmark}
                        className='text-2xl text-zinc-200 hover:text-zinc-400 hover:cursor-pointer active:scale-90'
                    />
                </div>
                <p className='text-sm font-medium text-zinc-200 mt-3'>Liked by yaswanth_yash_430 and others</p>
                {
                    isMore ? (
                        <div className='w-full'>
                            <p className='text-sm mt-2 font-normal text-zinc-200'><span className='font-medium'>joinuniversitymeta</span> Git vs Github</p>
                            <p className='text-sm mt-3 font-normal text-zinc-200'><span className='font-medium'>Credit:</span> {credit}</p>
                            <p className='text-sm font-normal text-zinc-200 mt-3'>{description}</p>
                            <ul className='w-full flex items-center flex-wrap mt-3'>
                                {
                                    tags.map((item, index) => {
                                        return (
                                            <li key={index} className='text-sm text-blue-500 mr-1 font-normal'>{item}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    ) : (
                        <p className='text-sm font-normal text-zinc-200 mt-3'>
                            {
                                `${useSliceStr({ text: description, length: 100 })}`
                            }
                            <span onClick={() => setIsMore(isMore => !isMore)} className='text-sm font-medium text-zinc-400 hover:cursor-pointer'>{description.length < 100 && '...'} more</span>
                        </p>
                    )
                }
                <p className='text-sm font-normal text-zinc-400 mt-3 hover:cursor-pointer'>{`View all ${comments.length} comments`}</p>
                <div className='w-full flex items-center gap-3 mb-2'>
                    <input type='text' placeholder="Add a comment..." className='w-full py-2 border-none outline-none bg-black placeholder:text-zinc-400 font-normal text-sm text-zinc-200' onChange={(e) => setComment(e.target.value)} />
                    {
                        comment.length >= 1 && <p className='text-sm text-blue-500 font-medium hover:cursor-pointer hover:text-zinc-200'>Post</p>
                    }
                    <FontAwesomeIcon
                        icon={faFaceSmile}
                        className='text-md text-zinc-400 hover:text-zinc-500 hover:cursor-pointer'
                    />
                </div>
            </div>
        </div>
    )
}

export default Post
