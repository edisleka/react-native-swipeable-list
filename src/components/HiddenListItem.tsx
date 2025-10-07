import type { RenderItemProps, SwipeActionHandler } from '@/types'
import { APP_CONSTANTS } from '@constants/app.constants'
import { MaterialIcons } from '@expo/vector-icons'
import { Pressable, Text, View } from 'react-native'

type HiddenListItemProps = RenderItemProps & {
  onSend: SwipeActionHandler
  onSave: SwipeActionHandler
  onDelete: SwipeActionHandler
}

export const HiddenListItem = ({
  item,
  onSend,
  onSave,
  onDelete,
}: HiddenListItemProps) => {
  return (
    <View className='mx-4 mb-3 flex-row items-center justify-between'>
      {/* Left side - Send button (shown when swiping right) */}
      <Pressable
        onPress={() => onSend(item.key)}
        className='items-center justify-center rounded-xl bg-blue-500 px-6 py-4 active:bg-blue-600'
      >
        <MaterialIcons
          name='send'
          size={APP_CONSTANTS.ICON_SIZE.MD}
          color='white'
        />
        <Text className='mt-1 text-xs font-semibold text-white'>Send</Text>
      </Pressable>

      {/* Right side - Save and Delete buttons (shown when swiping left) */}
      <View className='flex-row gap-2'>
        <Pressable
          onPress={() => onSave(item.key)}
          className='items-center justify-center rounded-xl bg-emerald-500 px-6 py-4 active:bg-emerald-600'
        >
          <MaterialIcons
            name='archive'
            size={APP_CONSTANTS.ICON_SIZE.MD}
            color='white'
          />
          <Text className='mt-1 text-xs font-semibold text-white'>Save</Text>
        </Pressable>
        <Pressable
          onPress={() => onDelete(item.key)}
          className='items-center justify-center rounded-xl bg-red-500 px-6 py-4 active:bg-red-600'
        >
          <MaterialIcons
            name='delete'
            size={APP_CONSTANTS.ICON_SIZE.MD}
            color='white'
          />
          <Text className='mt-1 text-xs font-semibold text-white'>Delete</Text>
        </Pressable>
      </View>
    </View>
  )
}
