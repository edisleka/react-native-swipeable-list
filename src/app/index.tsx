import { APP_CONSTANTS } from '@constants/app.constants'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SwipeListView } from 'react-native-swipe-list-view'

type ListItem = {
  key: string
  text: string
  icon: string
}

export default function Index() {
  const [listData, setListData] = useState<ListItem[]>([
    { key: '1', text: 'Morning Coffee', icon: 'local-cafe' },
    { key: '2', text: 'Team Meeting', icon: 'groups' },
    { key: '3', text: 'Gym Workout', icon: 'fitness-center' },
    { key: '4', text: 'Lunch Break', icon: 'restaurant' },
    { key: '5', text: 'Code Review', icon: 'code' },
    { key: '6', text: 'Grocery Shopping', icon: 'shopping-basket' },
    { key: '7', text: 'Walk the Dog', icon: 'pets' },
    { key: '8', text: 'Movie Night', icon: 'movie' },
    { key: '9', text: 'Read a Book', icon: 'menu-book' },
    { key: '10', text: 'Call Mom', icon: 'phone' },
  ])

  const { bottom } = useSafeAreaInsets()

  const deleteItem = (rowKey: string) => {
    const newData = listData.filter((item) => item.key !== rowKey)
    setListData(newData)
  }

  const saveItem = (itemKey: string) => {
    const item = listData.find((i) => i.key === itemKey)
    alert(`✓ Saved: ${item?.text}`)
  }

  const sendItem = (itemKey: string) => {
    const item = listData.find((i) => i.key === itemKey)
    alert(`📤 Sent: ${item?.text}`)
  }

  const renderItem = ({ item }: { item: ListItem }) => {
    return (
      <View className='mx-4 mb-3'>
        <View className='flex-row items-center rounded-2xl bg-white px-5 py-4 shadow-lg shadow-gray-200'>
          <View className='mr-4 rounded-xl bg-indigo-50 p-3'>
            <MaterialIcons
              name={item.icon as any}
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

  const renderHiddenItem = ({ item }: { item: ListItem }) => {
    return (
      <View className='mx-4 mb-3 flex-row items-center justify-between'>
        {/* Left side - Send button (shown when swiping right) */}
        <Pressable
          onPress={() => sendItem(item.key)}
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
            onPress={() => saveItem(item.key)}
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
            onPress={() => deleteItem(item.key)}
            className='items-center justify-center rounded-xl bg-red-500 px-6 py-4 active:bg-red-600'
          >
            <MaterialIcons
              name='delete'
              size={APP_CONSTANTS.ICON_SIZE.MD}
              color='white'
            />
            <Text className='mt-1 text-xs font-semibold text-white'>
              Delete
            </Text>
          </Pressable>
        </View>
      </View>
    )
  }

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
