import React from 'react'

function Switch({ value, bgActive, bgInactive, circleActive, circleInactive, onValueChange }) {
    const handleSwitch = () => onValueChange(!value)
    return (
        <div onClick={handleSwitch} className={`w-[39px] h-[23px] px-[2px] rounded-full flex items-center ${value ? bgActive : bgInactive} hover:cursor-pointer`}>
            <div className={`w-[19px] h-[19px] rounded-full switchCircle ${value ? 'switchCircleActive' : 'switchCircleInactive'} ${value ? circleActive : circleInactive}`}></div>
        </div>
    )
}

export default Switch;