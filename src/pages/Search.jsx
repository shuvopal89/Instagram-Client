import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import RecentSearch from '../components/RecentSearch'
import { dummyPosts } from '../utils/posts'
import { useSliceStr } from '../hooks/useSliceStr'

function Search() {
  const [search, setSearch] = useState('')

  return (
    <div className='w-full h-screen overflow-y-scroll pb-20'>
      <div className='max-w-[650px] min-h-[100vh] rounded-3xl mt-6 border border-zinc-800 m-auto px-5 max-sm:px-3 max-sm:mt-0 max-sm:border-0 max-sm:rounded-none'>
        <div className='flex items-center relative mt-5'>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className='text-xl text-zinc-400 absolute top-[15px] left-[26px]'
          />
          <input
            placeholder='Search'
            type='text'
            value={search}
            autoFocus={true}
            onChange={(e) => setSearch(e.target.value)}
            className='w-full px-16 py-3 text-zinc-200 bg-zinc-800 rounded-full outline-none border-none caret-zinc-400'
          />
          {
            search.length > 0 && <FontAwesomeIcon
              icon={faCircleXmark}
              onClick={() => setSearch('')}
              className='text-md text-zinc-400 absolute top-[16px] right-[20px] hover:cursor-pointer'
            />
          }
        </div>
        <div className='py-6'>
          {
            dummyPosts.length > 0 &&
            <div className='flex justify-between items-center'>
              <p className='text-md font-medium text-zinc-200'>Recent</p>
              <p className='text-sm font-medium hover:cursor-pointer text-blue-500'>Clear all</p>
            </div>
          }

          {
            (dummyPosts.length > 0) ? (
              <div className='mt-5 flex flex-col gap-4'>
                {
                  dummyPosts.map((item, index) => {
                    return (
                      <div key={index}>
                        <RecentSearch
                          profile={item.photos[0]}
                          username={item.name}
                          title={useSliceStr({ text: item.description, length: 45 })}
                          isActiveStory={item.isActiveStory}
                        />
                      </div>
                    )
                  })
                }
              </div>
            ) : (
              <div className='h-[60vh] w-full flex justify-center items-center'>
                <p className='text-sm font-normal text-zinc-400'>No recent searches.</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Search