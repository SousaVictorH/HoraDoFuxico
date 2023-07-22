import React from "react"

import {
  ItemWrapper,
  UserAvatar,
  UserName
} from "./styles"
import { Props } from "./types"

import { images } from "resources/images"

export const UserItem = ({
  id,
  avatar,
  name
}: Props) => {
  const handlePress = () => {
    console.log('GOTO ', id)
  }

  return (
    <ItemWrapper onPress={handlePress}>
      <UserAvatar
        source={{ uri: avatar }}
        defaultSource={images.defaultUser.path}
        resizeMode="cover"
      />
      <UserName>{name}</UserName>
    </ItemWrapper>
  )
}