import React, { useState } from 'react'
import TextDefault from '../components/TextDefault'
import { explore } from '../utils/explore'
import ActivityLikePost from '../components/ActivityLikePost'

function LIKES() {
  const [selected, setSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const selectedHandler = () => {
    setSelected(val => !val)
    selected && setSelectedItem([]);
  }
  const isSelectHandler = (id) => {
    const findItem = selectedItem.find(i => i === id);
    if (!findItem) {
      setSelectedItem(prev => [...prev, id]);
    } else {
      setSelectedItem(selectedItem.filter(i => i !== id));
    }
  }
  const unlikeHandler = () => {
    console.log(selectedItem)
  }

  return (
    <div>
      {/* <TextDefault title="You haven't liked any posts." /> */}
      <div className='w-full min-h-[500px]'>
        <div className={`flex justify-between items-center ${selected && 'sticky top-0'} bg-black pt-4 pb-3 z-10 max-sm:flex-col max-sm:gap-4`}>
          <div className={`flex items-center gap-4`}>
            <p className='text-md font-bold text-zinc-200'>Newest to oldest</p>
            <button className='text-sm max-sm:px-3 font-bold py-1 px-4 border border-zinc-800 rounded-md'>Sort & filter</button>
            {selected && <p className='text-sm font-medium text-zinc-200'>{`${selectedItem.length} Selected`}</p>}
          </div>
          <div className='flex items-center gap-5'>
            {selectedItem.length > 0 && <p onClick={unlikeHandler} className='text-sm font-medium text-red-500 hover:cursor-pointer'>Unlike</p>}
            <p onClick={selectedHandler} className={`text-sm font-medium ${selected ? 'text-zinc-500' : 'text-blue-500'} hover:cursor-pointer select-none`}>{selected ? 'Cancel' : 'Select'}</p>
          </div>
        </div>
        <div className='grid grid-cols-7 gap-[2px] max-md:grid-cols-5 max-sm:grid-cols-3'>
          {
            explore.map((item, index) => {
              return (
                <ActivityLikePost
                  key={index}
                  id={item.id}
                  photo={item.photos}
                  selected={selected}
                  selectedItem={selectedItem}
                  isSelectHandler={isSelectHandler}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default LIKES