import { useColor } from '@/hooks/useColor'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface CategoryTabsProps {
	tabs: string[]
}

export const CategoryTabs = ({ tabs }: CategoryTabsProps) => {
	const { textColor } = useColor()
	const [selected, setSelected] = useState('All')

	return (
		<View style={styles.container}>
			<View style={styles.tabRow}>
				{tabs.map(tab => (
					<TouchableOpacity
						key={tab}
						onPress={() => setSelected(tab)}
						style={styles.tab}
					>
						<Text
							style={[
								styles.tabText,
								selected === tab
									? styles.tabTextSelected
									: styles.tabTextUnselected,
							]}
						>
							{tab}
						</Text>
						{selected === tab && <View style={styles.tabUnderline} />}
					</TouchableOpacity>
				))}
				<Ionicons name='settings' size={16} color={textColor} />
			</View>
			<View style={styles.underline} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		position: 'relative',
	},
	tabRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	tab: {
		alignItems: 'center',
		paddingHorizontal: 4,
	},
	tabText: {
		fontSize: 12,
		fontFamily: 'Inter',
	},
	tabTextSelected: {
		color: '#1668E3',
		fontWeight: '600',
	},
	tabTextUnselected: {
		color: '#B8B8B8',
		opacity: 0.5,
		fontWeight: '500',
	},
	tabUnderline: {
		marginTop: 2,
		height: 3,
		borderRadius: 1.5,
		backgroundColor: '#1668E3',
		width: '100%',
	},
	underline: {
		height: 0.5,
		backgroundColor: '#CCCCCC',
		marginTop: 4,
	},
})
