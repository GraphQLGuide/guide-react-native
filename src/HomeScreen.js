import React from 'react'
import { Text, FlatList, Pressable } from 'react-native'
import { gql, useQuery } from '@apollo/client'

import Loading from './Loading'
import styles from './styles'

const CHAPTERS_QUERY = gql`
  query Chapters {
    chapters {
      id
      number
      title
    }
  }
`

const ChapterItem = ({ chapter }) => {
  const { number, title } = chapter
  let header, subheader

  if (number) {
    header = `Chapter ${number}`
    subheader = title
  } else {
    header = title
  }

  return (
    <Pressable style={styles.item}>
      <Text style={styles.header}>{header}</Text>
      {subheader && <Text style={styles.subheader}>{subheader}</Text>}
    </Pressable>
  )
}

export default () => {
  const { data, loading } = useQuery(CHAPTERS_QUERY)

  if (loading) {
    return <Loading />
  }

  return (
    <FlatList
      data={data.chapters}
      renderItem={({ item }) => <ChapterItem chapter={item} />}
      keyExtractor={(chapter) => chapter.id.toString()}
    />
  )
}
