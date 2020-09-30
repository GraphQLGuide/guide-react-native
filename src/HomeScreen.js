import React from 'react'
import { Text, FlatList, Pressable } from 'react-native'
import { gql, useQuery } from '@apollo/client'
import { AppLoading } from 'expo'

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

const ChapterItem = ({ chapter, onPress }) => {
  const { number, title } = chapter
  let header, subheader

  if (number) {
    header = `Chapter ${number}`
    subheader = title
  } else {
    header = title
  }

  return (
    <Pressable style={styles.item} onPress={onPress}>
      <Text style={styles.header}>{header}</Text>
      {subheader && <Text style={styles.subheader}>{subheader}</Text>}
    </Pressable>
  )
}

export default ({ navigation }) => {
  const { data, loading } = useQuery(CHAPTERS_QUERY)

  if (loading) {
    return <AppLoading />
  }

  return (
    <FlatList
      data={data.chapters}
      renderItem={({ item }) => (
        <ChapterItem
          chapter={item}
          onPress={() => navigation.navigate('Chapter', { chapter: item })}
        />
      )}
      keyExtractor={(chapter) => chapter.id.toString()}
    />
  )
}
