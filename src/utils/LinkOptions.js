import { faMagnifyingGlass, faLock, faShieldHeart, faBars, faChartLine, faUserGroup, faCircleExclamation, faTableCells, faCircleUser, faUserTag, faBan, faCalendarDays, faAt, faUserSlash, faKey, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faCompass, faSquarePlus, faBellSlash, faUser, faEnvelopeOpen, faSun, faBookmark, faComment } from '@fortawesome/free-regular-svg-icons'

export const postMoreOptions = [
    { title: 'Report', color: 'text-red-500' },
    { title: 'Unfollow', color: 'text-red-500' },
    { title: 'Add to favorite', color: 'text-zinc-200' },
    { title: 'Go to post', color: 'text-zinc-200' },
    { title: 'Copy link', color: 'text-zinc-200' },
    { title: 'About this account', color: 'text-zinc-200' },
    { title: 'Cancel', color: 'text-zinc-200' }
]

export const singleMenuOptions = [
    { icon: faEnvelopeOpen, title: 'Home', link: '/' },
    { icon: faMagnifyingGlass, title: 'Search', link: '/search' },
    { icon: faCompass, title: 'Explore', link: '/explore' },
    { icon: faHeart, title: 'Notifications', link: '/notifications' },
    { icon: faSquarePlus, title: 'Create' },
    { title: 'Profile', link: '/shuvopal89' },
    { icon: faBars, title: 'More' },
]

export const bottomNavigationOptions = [
    { icon: faEnvelopeOpen, link: '/' },
    { icon: faMagnifyingGlass, link: '/search' },
    { icon: faCompass, link: '/explore' },
    { icon: faSquarePlus, title: 'Create' },
    { icon: faUser, link: '/explore/people' },
    { title: 'Profile', link: '/shuvopal89' }
]

export const showMoreOptions = [
    { icon: faSun, title: 'Settings', link: '/accounts/edit' },
    { icon: faChartLine, title: 'Your activity', link: '/your_activity/likes' },
    { icon: faBookmark, title: 'Saved', link: '/shuvopal89/saved' },
    { icon: faCircleExclamation, title: 'Report a problem', link: '#' },
]

export const footerOptions = [
    { title: 'Meta', link: 'https://about.meta.com/' },
    { title: 'About', link: 'https://about.instagram.com/' },
    { title: 'Blog', link: 'https://about.instagram.com/blog/' },
    { title: 'Jobs', link: 'https://about.instagram.com/about-us/careers' },
    { title: 'Help', link: 'https://help.instagram.com/' },
    { title: 'API', link: 'https://developers.facebook.com/docs/instagram-platform' },
    { title: 'Privacy', link: 'https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect' },
    { title: 'Terms', link: 'https://help.instagram.com/581066165581870/' },
    { title: 'Locations', link: 'https://about.instagram.com/' },
    { title: 'Instagram Lite', link: 'https://www.instagram.com/web/lite/' },
    { title: 'Threads', link: 'https://www.threads.net/' },
    { title: 'Contact Uploading & Non-Users', link: 'https://www.facebook.com/help/instagram/261704639352628' },
    { title: 'Meta Verified', link: 'https://accountscenter.instagram.com/meta_verified/?entrypoint=web_footer' }
]

export const profileRouteOptions = [
    {title: 'POSTS', icon: faTableCells, link: '/shuvopal89'},
    {title: 'SAVED', icon: faBookmark, link: '/shuvopal89/saved'},
    {title: 'TAGGED', icon: faUserTag, link: '/shuvopal89/tagged'},
]

export const profileSettingsOptions = [
    { title: 'Apps and websites'},
    { title: 'QR code'},
    { title: 'Notifications'},
    { title: 'Settings and privacy'},
    { title: 'Meta Verified'},
    { title: 'Supervision'},
    { title: 'Embed'},
    { title: 'Log out'},
    { title: 'Cancel'}
]

export const accountsSettingsOptions = [
    { icon: faCircleUser, title: 'Edit profile', link: '/accounts/edit' },
    { icon: faUser, title: 'Personal details', link: '/accounts/personal_details' },
    { icon: faShieldHalved, title: 'Password and security', link: '/accounts/password_and_security' },
    { icon: faBellSlash, title: 'Muted accounts', link: '/accounts/muted_accounts' },
    { icon: faShieldHeart, title: 'Like and share counts', link: '/accounts/like_count' },
    { icon: faLock, title: 'Account privacy', link: '/accounts/privacy_setting' },
    { icon: faUserGroup, title: 'Close friends', link: '/accounts/close_friends' },
    { icon: faBan, title: 'Blocked', link: '/accounts/blocked_accounts' },
    { icon: faAt, title: 'Tags and mentions', link: '/accounts/tags_and_mentions' },
    { icon: faComment, title: 'Comments', link: '/accounts/comments' },
    { icon: faUserSlash, title: 'Restricted accounts', link: '/accounts/restricted_accounts' },
    { icon: faKey, title: 'Privacy Center', link: 'https://privacycenter.instagram.com/?entry_point=instagram_settings_page' },
]

export const activityLinks = [
    {title: 'LIKES', icon: faHeart, link: '/your_activity/likes'},
    {title: 'COMMENTS', icon: faComment, link: '/your_activity/comments'},
    {title: 'HISTORY', icon: faCalendarDays, link: '/your_activity/history'},
]