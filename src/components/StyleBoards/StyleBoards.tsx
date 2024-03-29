import React from 'react'
import ProfileContainer from '../ProfileContainer/ProfileContainer'
import Tabs from '../Tab/Tabs'
import PostCard from '../PostCard/PostCard'
import { CoverPhotoDiv } from '../Profile Page/ProfilePage.styles'
import StyleboardImageGrid from '../Styleboard Image Grid/StyleboardImageGrid'

type Props = {}

const StyleBoards = (props: Props) => {
  return (
    <div>
        <CoverPhotoDiv />
        <ProfileContainer />
        <Tabs />
        <StyleboardImageGrid />
    </div>
  )
}

export default StyleBoards