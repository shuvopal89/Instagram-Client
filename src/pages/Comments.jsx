import React, { useState } from 'react'
import Footer from '../components/Footer';
import { commentsOptions } from '../utils/featuresOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function Comments() {
  const [comment, setComment] = useState("Everyone")

  const commentHandler = (title) => {
    setComment(title);
  }
  return (
    <div className='w-full h-screen overflow-y-scroll max-xl:px-3'>
      <div className='max-w-[620px] h-[60vh] m-auto mt-12 max-md:mt-4'>
        <p className='text-xl font-bold text-zinc-200'>Comments</p>
        <p className='text-sm font-medium text-zinc-200 mt-12'>Allow comments from</p>
        <div className='flex flex-col gap-5 mt-4'>
          {
            commentsOptions.map((item, index) => {
              return (
                <div className='flex items-center gap-3 hover:cursor-pointer' key={index} onClick={() => commentHandler(item.title)}>
                  {
                    item.title === comment ? (
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className='text-2xl text-zinc-200'
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faCircle}
                        className='text-2xl text-zinc-400'
                      />
                    )
                  }
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm font-normal text-zinc-200'>{item.title}</p>
                    <p className='text-xs font-medium text-zinc-500'>{item.peoples}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='max-w-[700px] m-auto mt-10 mb-14'>
        <Footer />
      </div>
    </div>
  )
}

export default Comments