import { ThemedText } from '@/components/theme/ThemedText'

import React from 'react'
import { TextProps as RNTextProps, TextStyle } from 'react-native'

interface StyledTextProps extends RNTextProps {
	fontWeight?: TextStyle['fontWeight']
	fontSize?: number
	textAlign?: TextStyle['textAlign']
	children: React.ReactNode
}

export function StyledText({
	fontWeight = '400',
	fontSize,
	textAlign = 'left',
	style,
	children,
	...rest
}: StyledTextProps) {
	return (
		<ThemedText style={[{ fontWeight, fontSize, textAlign }, style]} {...rest}>
			{children}
		</ThemedText>
	)
}
