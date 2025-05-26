import { ThemedText }       from '@/components/theme/ThemedText'
import { useColor }         from '@/hooks/useColor'

import React                from 'react'
import { View, StyleSheet } from 'react-native'

interface HeadingProps
{
  title?: string
  underline?: boolean
  leftChildren?: React.ReactNode
  rightChildren?: React.ReactNode
}

export const Heading: React.FC<HeadingProps> = ( {
  title, underline, leftChildren, rightChildren
} ) =>
{
  const { textColor } = useColor()

  const border = StyleSheet.create( {
    bottom: {
      borderBottomWidth: underline ? 1 : 0,
      borderBottomColor: textColor
    }
  } )

  return (
    <View style={ [ styles.container, border.bottom ] }>
      { leftChildren }

      <ThemedText style={ styles.title }>{ title }</ThemedText>

      { rightChildren }
    </View>
  )
}

const styles = StyleSheet.create( {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    outlineOffset: 5
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: '600'
  }
} )
