import React, { useContext, useState } from 'react'
import { DesignContext } from '../context/DesignContent'
import { faXmark, faAngleLeft, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { stories } from '../utils/story'

function NewCollections() {
    const [collection, setCollection] = useState("");
    const [showCollection, setShowCollection] = useState(true);
    const [selectSaved, setSelectSaved] = useState([]);
    const { setShowNewCollections } = useContext(DesignContext);
    const createNewCollectionsHandler = (e) => {
        if (e.target.classList.contains("parent")) {
            setShowNewCollections(false)
        }
    }
    const handleNext = () => {
        if (collection.length >= 1) {
            setShowCollection(false);
        } else {
            return false;
        }
    };
    const handleDone = () => { };
    const common = 'w-[400px] bg-zinc-800 divide-y divide-zinc-700 rounded-2xl max-md:w-full max-md:h-full max-md:rounded-none';
    return (
        <div className='fixed top-0 left-0 z-50 parent w-full h-screen flex justify-center items-center bg-black/60' onClick={createNewCollectionsHandler}>
            {
                showCollection && (
                    <div className={common}>
                        <div className='h-[50px] px-4 flex items-center justify-center relative'>
                            <p className='text-md font-medium text-zinc-200 text-center'>New collection</p>
                            <FontAwesomeIcon
                                icon={faXmark}
                                onClick={() => setShowNewCollections(false)}
                                className='text-zinc-200 text-2xl hover:cursor-pointer absolute top-3 right-4'
                            />
                        </div>
                        <div className='p-6'>
                            <input onChange={(e) => setCollection(e.target.value)} className='w-full bg-zinc-900 text-sm font-medium placeholder:text-zinc-500 caret-zinc-500 px-3 py-2 rounded-md border text-zinc-200 outline-none border-zinc-900 focus:border-zinc-600' type="text" autoFocus={true} placeholder='Collection name' value={collection} />
                        </div>
                        <button onClick={() => handleNext()} className={`text-sm w-full font-bold ${collection !== "" ? 'text-blue-500 cursor-pointer' : 'text-zinc-400 cursor-text'} text-center py-3`}>Next</button>
                    </div>
                )
            }
            {
                !showCollection && (
                    <div className={common}>
                        <div className='h-[50px] px-4 flex items-center justify-between'>
                            <FontAwesomeIcon
                                icon={faAngleLeft}
                                onClick={() => {
                                    setShowCollection(true);
                                    setCollection("");
                                    setSelectSaved([])
                                }}
                                className='text-zinc-200 text-xl hover:cursor-pointer'
                            />
                            <p className='text-md font-medium text-zinc-200 text-center'>{`Add from saved ${selectSaved.length === 0 ? '' : `(${selectSaved.length})`}`}</p>
                            <FontAwesomeIcon
                                icon={faXmark}
                                onClick={() => {
                                    setShowNewCollections(false)
                                    setSelectSaved([])
                                }}
                                className='text-zinc-200 text-2xl hover:cursor-pointer'
                            />
                        </div>
                        <div className='h-[75vh] addFromSaved overflow-y-scroll'>
                            <div className='h-max grid grid-cols-3'>
                                {
                                    stories.map((item, index) => {
                                        const find = selectSaved.find(i => i === item.id)
                                        return (
                                            <div key={index} onClick={() => {
                                                if (!find) {
                                                    setSelectSaved(prev => [...prev, item.id])
                                                } else {
                                                    setSelectSaved(selectSaved.filter(i => i !== item.id))
                                                }
                                            }} className='relative hover:cursor-pointer'>
                                                <img src={item.profile} className='object-cover cursor-pointer select-none' alt='' />
                                                <div className={`h-full ${find ? 'visible' : 'invisible'} w-full absolute top-0 left-0 bg-zinc-200/30 flex justify-center items-center`}>
                                                    {
                                                        find && (
                                                            <FontAwesomeIcon
                                                                icon={faCheck}
                                                                className='text-zinc-900 text-2xl hover:cursor-pointer'
                                                            />
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <button onClick={() => handleDone()} className={`text-sm w-full font-bold text-blue-500 cursor-pointer text-center h-[50px]`}>Done</button>
                    </div>
                )
            }
        </div>
    )
}

export default NewCollections
