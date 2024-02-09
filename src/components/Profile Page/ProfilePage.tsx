import React from 'react'
import { CoverPhotoDiv } from './ProfilePage.styles'
import ProfileContainer from '../ProfileContainer/ProfileContainer'
import Tabs from '../Tab/Tabs'
import PostCard from '../PostCard/PostCard'

const ProfilePage = () => {
  return (
    <div>
        <CoverPhotoDiv />
        <ProfileContainer />
        <Tabs />
        <PostCard />
    </div>
  )
}

export default ProfilePage