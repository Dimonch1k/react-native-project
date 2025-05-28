import { useColor } from '@/hooks/useColor'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export function EventFilters() {
	const { textColor } = useColor()

	const [selectedFilter, setSelectedFilter] = useState('New')

	const filters = ['New', 'Online', 'Offline', 'Free']

	return (
		<View style={styles.filtersContainer}>
			{filters.map(filter => (
				<Pressable
					key={filter}
					onPress={() => setSelectedFilter(filter)}
					style={[
						styles.button,
						{ borderColor: textColor },
						selectedFilter === filter && styles.activeButton,
					]}
				>
					<Text
						style={[
							styles.buttonText,
							selectedFilter === filter && styles.activeText,
						]}
					>
						{filter}
					</Text>
				</Pressable>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	filtersContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		paddingVertical: 8,
	},

	button: {
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderRadius: 8,
		borderWidth: 1,
	},

	activeButton: {
		backgroundColor: '#1668E3',
		borderColor: '#3083FF',
	},

	buttonText: {
		fontSize: 10,
		color: '#A3A3A3',
		fontWeight: '600',
	},

	activeText: {
		color: 'white',
	},
})
