import React from 'react'
import Switch from './Switch';

function TextSwitch({title, switchVal, swithHandler}) {
    return (
        <div className='flex items-center justify-between mt-10'>
            <p className='text-md font-normal text-zinc-200'>{title}</p>
            <Switch
                value={switchVal}
                bgActive={'bg-zinc-200'}
                bgInactive={'bg-zinc-700'}
                circleActive={'bg-black'}
                circleInactive={'bg-black'}
                onValueChange={swithHandler}
            />
        </div>
    )
}

export default TextSwitch
