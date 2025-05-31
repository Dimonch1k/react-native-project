import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { StyledText } from '../ui/text/Text'

interface ForumButtonProps {
	icon: keyof typeof Ionicons.glyphMap
	iconSize?: number
	primaryColor: string
	borderColor: string
	title: string
	backgroundColor?: string
	onPress?: () => void
}

export function ForumButton({
	icon,
	iconSize = 24,
	primaryColor,
	borderColor,
	title,
	backgroundColor = 'transparent',
	onPress,
}: ForumButtonProps) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={[styles.container, { borderColor, backgroundColor }]}>
				<View style={[styles.iconCircle, { backgroundColor: primaryColor }]}>
					<Ionicons name={icon} size={iconSize} color='#fff' />
				</View>
				<StyledText style={{ color: primaryColor }}>{title}</StyledText>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		paddingVertical: 6,
		paddingHorizontal: 10,
		borderRadius: 100,
		borderWidth: 1,
	},
	iconCircle: {
		width: 30,
		height: 30,
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
