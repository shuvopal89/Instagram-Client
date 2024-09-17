import React, { useContext, useState } from 'react'
import { DesignContext } from '../context/DesignContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function ChangePhoto() {
    const [currPass, setCurrPass] = useState({ val: '', type: 'password', shown: false });
    const [newPass, setNewPass] = useState({ val: '', type: 'password', shown: false });
    const [rePass, setRePass] = useState({ val: '', type: 'password', shown: false });
    const { changePassword, setChangePassword } = useContext(DesignContext);
    const allInputs = [
        { name: 'Current password', value: currPass.val, shown: false, t: currPass.type, s: currPass.shown },
        { name: 'New password', value: newPass.val, shown: false, t: newPass.type, s: newPass.shown },
        { name: 'Re-type new password', value: rePass.val, shown: false, t: rePass.type, s: rePass.shown },
    ]
    const changeAccountHandler = (e) => e.target.classList.contains("parent") && setChangePassword(false)
    const handlePassInput = (e, name) => {
        const value = e.target.value;
        switch (name) {
            case "Current password":
                setCurrPass({ ...currPass, val: value, shown: value.length < 1 ? false : true });
                break;
            case "New password":
                setNewPass({ ...newPass, val: value, shown: value.length < 1 ? false : true });
                break;
            case "Re-type new password":
                setRePass({ ...rePass, val: value, shown: value.length < 1 ? false : true });
                break;
        }
    }
    const changePassHandler = () => {}
    const togglePassHandler = (t, name) => {
        switch (name) {
            case "Current password":
                t === 'password' ? setCurrPass({ ...currPass, type: 'text' }) : setCurrPass({ ...currPass, type: 'password' });
                break;
            case "New password":
                t === 'password' ? setNewPass({ ...newPass, type: 'text' }) : setNewPass({ ...newPass, type: 'password' });
                break;
            case "Re-type new password":
                t === 'password' ? setRePass({ ...rePass, type: 'text' }) : setRePass({ ...rePass, type: 'password' });
                break;
        }
    }

    return (
        <div className='fixed top-0 left-0 z-50 parent w-full h-screen flex justify-center items-center bg-black/60' onClick={changeAccountHandler}>
            <div className={`w-[500px] h-max flex flex-col p-7 max-md:w-full max-md:h-full max-md:rounded-none bg-zinc-800 rounded-2xl ${changePassword ? 'scaleAnimShow' : ''}`}>
                <div className='flex items-center justify-between'>
                    <p className='text-xl font-medium text-zinc-200'>Change password</p>
                    <FontAwesomeIcon
                        icon={faXmark}
                        onClick={() => setChangePassword(false)}
                        className='text-2xl text-zinc-200 hover:cursor-pointer'
                    />
                </div>
                <p className='text-sm font-medium text-zinc-500 mt-4'>Your password must be at least 6 characters and should include a combination of numbers, letters and special characters (!$@%).</p>
                <div className='flex flex-col gap-3 mt-5'>
                    {
                        allInputs.map((item, index) => {
                            return (
                                <div className='relative select-none' key={index}>
                                    <input onChange={(e) => handlePassInput(e, item.name)} className='w-full px-5 py-4 border-none bg-zinc-700 rounded-xl text-sm font-medium text-zinc-200 placeholder:text-zinc-500 caret-zinc-500 outline-none' type={item.t} placeholder={item.name} value={item.value} />
                                    {item.s && <FontAwesomeIcon
                                        icon={item.t === 'password' ? faEyeSlash : faEye}
                                        onClick={() => togglePassHandler(item.t, item.name)}
                                        className='text-lg text-zinc-200 absolute right-5 top-[19px] hover:cursor-pointer'
                                    />}
                                </div>
                            )
                        })
                    }
                    <button onClick={changePassHandler} className='w-full py-4 bg-blue-500 text-zinc-200 rounded-full border-none outline-none text-sm font-medium hover:bg-blue-600 mt-4'>Change password</button>
                </div>
            </div>
        </div>
    )
}

export default ChangePhoto
