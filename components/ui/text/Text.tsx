import { ThemedText } from '@/components/theme/ThemedText'

import {
  TextProps as RNTextProps,
  StyleSheet,
  TextStyle
}            from 'react-native'
import React from 'react'

interface StyledTextProps extends RNTextProps
{
  fontWeight?: TextStyle['fontWeight']
  fontSize?: number
  textAlign?: TextStyle['textAlign']
  children: React.ReactNode
}

export function StyledText ( {
  fontWeight = '400',
  fontSize,
  textAlign = 'left',
  style,
  children,
  ...rest
}: StyledTextProps )
{
  return (
    <ThemedText
      style={ [ styles.text, { fontWeight, fontSize, textAlign }, style ] }
      { ...rest }
    >
      { children }
    </ThemedText>
  )
}

const styles = StyleSheet.create( {
  text: {
    // Add defaults or shared styles here if needed
  }
} )
