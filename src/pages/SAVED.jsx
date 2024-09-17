import React, { useContext } from 'react'
import SavedCollection from '../components/SavedCollection'
import { collections } from '../utils/collections'
import { DesignContext } from '../context/DesignContent'

function SAVED() {
  const { setShowNewCollections } = useContext(DesignContext)
  return (
    <div className='w-full'>
      <div className='flex items-center justify-between mt-8 max-lg:px-3'>
        <p className='text-xs font-normal text-zinc-400'>Only you can see what you've saved</p>
        <p onClick={() => setShowNewCollections(true)} className='text-sm font-medium text-blue-500 hover:cursor-pointer'>+ New Collection</p>
      </div>
      <div className='flex flex-col items-center'>
        <div className='mt-3 grid grid-cols-3 justify-center max-lg:px-3 gap-3'>
          {
            collections.map((item, index) => <SavedCollection key={index} name={item.name} link={item.link} />)
          }
        </div>
      </div>
    </div>
  )
}

export default SAVED
