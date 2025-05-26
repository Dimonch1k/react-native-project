import React from 'react'
import {
	TextProps as RNTextProps,
	StyleSheet,
	Text,
	TextStyle,
} from 'react-native'

interface StyledTextProps extends RNTextProps {
	fontWeight?: TextStyle['fontWeight']
	fontSize?: number
	color?: string
	textAlign?: TextStyle['textAlign']

	children: React.ReactNode
}

export function StyledText({
	fontWeight = '400',
	fontSize = 16,
	color = '#000',
	textAlign = 'left',
	style,
	children,
	...rest
}: StyledTextProps) {
	return (
		<Text
			style={[styles.text, { fontWeight, fontSize, color, textAlign }, style]}
			{...rest}
		>
			{children}
		</Text>
	)
}

const styles = StyleSheet.create({
	text: {
		// Add defaults or shared styles here if needed
	},
})
