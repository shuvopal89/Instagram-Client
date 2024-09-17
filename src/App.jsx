import React from 'react'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Profile from './pages/Profile'
import People from './pages/People'
import Feed from './pages/Feed'
import Search from './pages/Search'
import Notifications from './pages/Notifications'
import POSTS from './pages/POSTS'
import SAVED from './pages/SAVED'
import TAGGED from './pages/TAGGED'
import Collections from './pages/Collections'
import Accounts from './pages/Accounts'
import EditProfile from './pages/EditProfile'
import MutedAccounts from './pages/MutedAccounts'
import LikeCount from './pages/LikeCount'
import AccountPrivacy from './pages/AccountPrivacy'
import CloseFriends from './pages/CloseFriends'
import BlockedAccounts from './pages/BlockedAccounts'
import TagsMentions from './pages/TagsMentions'
import Comments from './pages/Comments'
import RestrictedAccounts from './pages/RestrictedAccounts'
import PersonalDetails from './pages/PersonalDetails'
import PasswordSecurity from './pages/PasswordSecurity'
import Your_Activity from './pages/Your_Activity'
import LIKES from './pages/LIKES'
import AC_COMMENTS from './pages/AC_COMMENTS'
import HISTORY from './pages/HISTORY'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='' element={<Feed />} />
          <Route path='search' element={<Search />} />
          <Route path='explore' element={<Explore />} />
          <Route path='notifications' element={<Notifications />} />
          <Route path=':username' element={<Profile />}>
            <Route path='' element={<POSTS />} />
            <Route path='saved' element={<SAVED />} />
            <Route path='tagged' element={<TAGGED />} />
          </Route>
          <Route path=':username/saved/:collection' element={<Collections />} />
          <Route path='explore/people' element={<People />} />
          <Route path='/accounts/' element={<Accounts />}>
            <Route path='edit' element={<EditProfile />} />
            <Route path='personal_details' element={<PersonalDetails />} />
            <Route path='password_and_security' element={<PasswordSecurity />} />
            <Route path='muted_accounts' element={<MutedAccounts />} />
            <Route path='like_count' element={<LikeCount />} />
            <Route path='privacy_setting' element={<AccountPrivacy />} />
            <Route path='close_friends' element={<CloseFriends />} />
            <Route path='blocked_accounts' element={<BlockedAccounts />} />
            <Route path='tags_and_mentions' element={<TagsMentions />} />
            <Route path='comments' element={<Comments />} />
            <Route path='restricted_accounts' element={<RestrictedAccounts />} />
          </Route>
          <Route path='/your_activity/' element={<Your_Activity />}>
            <Route path='likes' element={<LIKES />} />
            <Route path='comments' element={<AC_COMMENTS />} />
            <Route path='history' element={<HISTORY />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
