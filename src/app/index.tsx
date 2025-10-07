import { APP_CONSTANTS } from '@constants/app.constants'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'

type ListItem = {
  key: string
  text: string
  icon: string
}

export default function Index() {
  const [listData, setListData] = useState<ListItem[]>([
    { key: '1', text: 'Work', icon: 'work' },
    { key: '2', text: 'School', icon: 'school' },
    { key: '3', text: 'Shopping', icon: 'shopping-cart' },
    { key: '4', text: 'Fitness', icon: 'fitness-center' },
    { key: '5', text: 'Music', icon: 'music-note' },
    { key: '6', text: 'TV', icon: 'tv' },
    { key: '7', text: 'Reading', icon: 'book' },
    { key: '8', text: 'Travel', icon: 'flight-takeoff' },
    { key: '9', text: 'Other', icon: 'more-horiz' },
  ])

  const deleteItem = (rowKey: string) => {
    const newData = listData.filter((item) => item.key !== rowKey)
    setListData(newData)
  }

  const saveItem = (itemKey: string) => {
    const item = listData.find((i) => i.key === itemKey)
    alert(`✓ Saved: ${item?.text}`)
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
      <View className='mb-3 flex-row items-center justify-end pr-4'>
        <Pressable
          onPress={() => saveItem(item.key)}
          className='mr-2 h-full items-center justify-center rounded-xl bg-emerald-500 px-6 active:bg-emerald-600'
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
          className='h-full items-center justify-center rounded-xl bg-red-500 px-6 active:bg-red-600'
        >
          <MaterialIcons
            name='delete'
            size={APP_CONSTANTS.ICON_SIZE.MD}
            color='white'
          />
          <Text className='mt-1 text-xs font-semibold text-white'>Delete</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <View className='flex-1 bg-gray-50'>
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
