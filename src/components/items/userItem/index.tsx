import React from 'react'

import {
  ItemWrapper,
  UserAvatar,
  UserName
} from './styles'
import { Props } from './types'

import { images } from 'resources/images'

export const UserItem = ({
  avatar,
  name,
  onPress,
  style
}: Props) => (
  <ItemWrapper onPress={onPress} style={style}>
    <UserAvatar
      source={{ uri: avatar || undefined }}
      defaultSource={images.defaultUser.path}
      resizeMode="cover"
    />
    <UserName>{name}</UserName>
  </ItemWrapper>
)
