import { transactionFeatures } from '@/data/transaction-history.data'
import { useColor } from '@/hooks/useColor'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const TransactionFeatures = () => {
	const { backgroundTab } = useColor()

	const [selectedIndex, setSelectedIndex] = useState(0)

	return (
		<View
			style={[
				styles.container,
				{ backgroundColor: backgroundTab, borderColor: backgroundTab },
			]}
		>
			{transactionFeatures.map((feature, index) => (
				<TouchableOpacity
					key={index}
					style={styles.feature}
					onPress={() => setSelectedIndex(index)}
					activeOpacity={0.7}
				>
					<View
						style={[
							styles.icon,
							{
								backgroundColor:
									selectedIndex === index ? feature.color : '#EAF2FF',
								borderColor:
									selectedIndex === index ? feature.color : 'transparent',
								borderWidth: selectedIndex === index ? 2 : 0,
							},
						]}
					>
						<Text
							style={[
								styles.emoji,
								{ opacity: selectedIndex === index ? 1 : 0.6 },
							]}
						>
							{feature.icon}
						</Text>
					</View>
					<Text
						style={[
							styles.label,
							{
								color: selectedIndex === index ? feature.color : '#8B9DC3',
								fontWeight: selectedIndex === index ? '600' : '500',
							},
						]}
					>
						{feature.label}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 16,
		borderRadius: 12,
		borderWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	feature: {
		width: 50,
		height: 70,
		alignItems: 'center',
		justifyContent: 'flex-start',
		position: 'relative',
	},
	icon: {
		width: 48,
		height: 48,
		borderRadius: 12,
		marginBottom: 6,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 2,
	},
	emoji: {
		fontSize: 20,
	},
	label: {
		fontSize: 9,
		fontFamily: 'Inter',
		textAlign: 'center',
		position: 'absolute',
		bottom: 0,
		width: '100%',
	},
})
