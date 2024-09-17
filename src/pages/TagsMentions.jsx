import React, { useState } from 'react'
import Footer from '../components/Footer';
import { tagsOptions, mentionsOptions } from '../utils/featuresOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function TagAndMention({ title, from, tag, setTag, mention, setMention }) {
  const handleClick = () => {
    if (from === 'tag') setTag(title);
    if (from === 'mention') setMention(title)
  }

  return (
    <div onClick={() => handleClick()} className='flex items-center justify-between px-4 py-[10px] select-none hover:cursor-pointer' id='alaska'>
      <p className='text-md font-normal text-zinc-400' id='alaska'>{title}</p>
      {
        (title ===  tag || title === mention) ? (
          <FontAwesomeIcon
            icon={faCircleCheck}  
            className='text-xl text-zinc-200'
          />
        ) : (
          <FontAwesomeIcon
            icon={faCircle}
            className='text-xl text-zinc-400'
          />
        )
      }
    </div>
  )
}

function TagsMentions() {
  const [tag, setTag] = useState("Allow tags from everyone");
  const [mention, setMention] = useState("Allow mentions from everyone");

  const ts = 'text-md font-normal text-zinc-200';
  const sts = 'text-xs font-normal text-zinc-400 mt-2';
  const opts = 'py-3 rounded-2xl border border-zinc-700 flex flex-col mt-3';

  return (
    <div className='w-full h-screen overflow-y-scroll max-xl:px-3'>
      <div className='max-w-[620px] m-auto mt-12 max-md:mt-4'>
        <p className='text-xl font-bold text-zinc-200'>Tags and mentions</p>
        <div className='mt-9'>
          <p className={ts}>Who can tag you</p>
          <p className={sts}>Choose who can tag you in their photos and videos. When people try to tag you, they'll see if you don't allow tags from everyone.</p>
          <div className={opts}>
            {
              tagsOptions.map((item, index) => <TagAndMention key={index} title={item.title} from={'tag'} tag={tag} setTag={setTag} />)
            }
          </div>
        </div>
        <div className='mt-8'>
          <p className={ts}>Who can @mention you</p>
          <p className={sts}>Choose who can tag you in their photos and videos. When people try to tag you, they'll see if you don't allow tags from everyone.</p>
          <div className={opts}>
            {
              mentionsOptions.map((item, index) => <TagAndMention key={index} title={item.title} from={'mention'} mention={mention} setMention={setMention} />)
            }
          </div>
        </div>
      </div>
      <div className='max-w-[700px] m-auto mt-10 mb-14'>
        <Footer />
      </div>
    </div>
  )
}

export default TagsMentions