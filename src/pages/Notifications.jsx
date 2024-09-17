import React from 'react'
import { notifications } from '../utils/notifications'
import Notification from '../components/Notification'

function NotificationSection({ title, data }) {
  return (
    <div className='px-5 max-sm:px-3 py-5'>
      <p className='text-lg font-semibold text-zinc-200'>{title}</p>
      <div className='mt-2 flex flex-col gap-3'>
        {
          data.map((item, index) => {
            return (
              <div key={index}>
                <Notification
                  id={item.id}
                  username={item.username}
                  message={item.message}
                  profile={item.profile}
                  posted={item.posted}
                  read={item.read}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

function Notifications() {
  return (
    <div className='w-full pb-20 h-screen overflow-y-scroll'>
      <div className='max-w-[650px] border border-zinc-800 rounded-3xl m-auto mt-6 max-sm:mt-0 max-sm:rounded-none max-sm:border-0'>
        <p className='text-2xl font-bold text-zinc-200 mt-5 px-5 max-sm:px-3'>Notifications</p>
        <div className='divide-y min-h-[100vh] divide-zinc-800'>
          <NotificationSection
            title={'Today'}
            data={notifications.filter(notification => notification.read === false)}
          />
          <NotificationSection
            title={'New'}
            data={notifications.filter(notification => notification.read === false)}
          />
          <NotificationSection
            title={'Earlier'}
            data={notifications.filter(notification => notification.read === true)}
          />
        </div>
      </div>
    </div>
  )
}

export default Notifications
