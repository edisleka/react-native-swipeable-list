import type { ListItem, SwipeActionHandler } from '@/types'
import { useState } from 'react'

export const useListActions = (initialData: ListItem[]) => {
  const [listData, setListData] = useState<ListItem[]>(initialData)

  const deleteItem: SwipeActionHandler = (rowKey) => {
    const newData = listData.filter((item) => item.key !== rowKey)
    setListData(newData)
  }

  const saveItem: SwipeActionHandler = (itemKey) => {
    const item = listData.find((i) => i.key === itemKey)
    alert(`✓ Saved: ${item?.text}`)
  }

  const sendItem: SwipeActionHandler = (itemKey) => {
    const item = listData.find((i) => i.key === itemKey)
    alert(`📤 Sent: ${item?.text}`)
  }

  return {
    listData,
    deleteItem,
    saveItem,
    sendItem,
  }
}
