import { useColor } from '@/hooks/useColor'
import { Ionicons } from '@expo/vector-icons'

import React from 'react'
import { DimensionValue, StyleSheet, TextInput, View } from 'react-native'

export function SearchBar({ maxWidth }: { maxWidth?: DimensionValue }) {
	const { textColor } = useColor()

	return (
		<View style={[styles.inputWrapper, { borderColor: textColor, maxWidth }]}>
			<Ionicons name='search' size={18} color='#6E9BE2' />
			<TextInput
				style={{ color: textColor }}
				placeholder='Search something ...'
				placeholderTextColor={textColor}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	inputWrapper: {
		paddingHorizontal: 16,
		paddingVertical: 2,
		borderRadius: 100,
		borderWidth: 0.5,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
})
