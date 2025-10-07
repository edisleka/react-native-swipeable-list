import { MaterialIcons } from '@expo/vector-icons'

export type ListItem = {
  key: string
  text: string
  icon: keyof typeof MaterialIcons.glyphMap
}

export type RenderItemProps = {
  item: ListItem
}

export type SwipeAction = 'send' | 'save' | 'delete'

export type SwipeActionHandler = (itemKey: string) => void
