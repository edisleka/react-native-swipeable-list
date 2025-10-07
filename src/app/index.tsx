import type { RenderItemProps } from '@/types'
import { HiddenListItem } from '@components/HiddenListItem'
import { ListItem as ListItemComponent } from '@components/ListItem'
import { APP_CONSTANTS } from '@constants/app.constants'
import { INITIAL_LIST_DATA } from '@constants/list.constants'
import { useListActions } from '@hooks/useListActions'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SwipeListView } from 'react-native-swipe-list-view'

export default function Index() {
  const { bottom } = useSafeAreaInsets()
  const { listData, deleteItem, saveItem, sendItem } =
    useListActions(INITIAL_LIST_DATA)

  const renderItem = ({ item }: RenderItemProps) => (
    <ListItemComponent item={item} />
  )

  const renderHiddenItem = ({ item }: RenderItemProps) => (
    <HiddenListItem
      item={item}
      onSend={sendItem}
      onSave={saveItem}
      onDelete={deleteItem}
    />
  )

  return (
    <View className='flex-1 bg-gray-50' style={{ paddingBottom: bottom }}>
      {/* Header */}
      <View className='bg-indigo-600 pb-6 pt-16 shadow-md'>
        <View className='px-6'>
          <Text className='text-3xl font-bold text-white'>My Activities</Text>
          <Text className='mt-1 text-indigo-100'>
            {listData.length} {listData.length === 1 ? 'item' : 'items'}
          </Text>
        </View>
      </View>

      {/* List */}
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={APP_CONSTANTS.SWIPE.LEFT_OPEN}
        rightOpenValue={APP_CONSTANTS.SWIPE.RIGHT_OPEN}
        disableLeftSwipe={false}
        disableRightSwipe={false}
        className='flex-1 pt-6'
      />
    </View>
  )
}
