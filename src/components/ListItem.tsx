import type { RenderItemProps } from '@/types'
import { APP_CONSTANTS } from '@constants/app.constants'
import { MaterialIcons } from '@expo/vector-icons'
import { Text, View } from 'react-native'

export const ListItem = ({ item }: RenderItemProps) => {
  return (
    <View className='mx-4 mb-3'>
      <View className='flex-row items-center rounded-2xl bg-white px-5 py-4 shadow-lg shadow-gray-200'>
        <View className='mr-4 rounded-xl bg-indigo-50 p-3'>
          <MaterialIcons
            name={item.icon}
            size={APP_CONSTANTS.ICON_SIZE.LG}
            color='#6366f1'
          />
        </View>
        <Text className='flex-1 text-lg font-semibold text-gray-800'>
          {item.text}
        </Text>
        <MaterialIcons
          name='chevron-right'
          size={APP_CONSTANTS.ICON_SIZE.MD}
          color='#d1d5db'
        />
      </View>
    </View>
  )
}
