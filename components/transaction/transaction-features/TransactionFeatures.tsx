import { transactionFeatures } from '@/data/transaction-history.data'
import { useColor } from '@/hooks/useColor'
import { useThemeStore } from '@/stores/theme.store'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

export const TransactionFeatures = () => {
	const { backgroundTab, textColor } = useColor()
	const isLight = useThemeStore(state => state.isLight)

	const [selectedIndex, setSelectedIndex] = useState(0)

	return (
		<View
			style={[
				styles.container,
				{
					backgroundColor: isLight ? '#EAF2FF' : backgroundTab,
					borderColor: isLight ? '#C5DCFF' : '#292C32',
				},
			]}
		>
			{transactionFeatures.map((feature, index) => {
				const iconColor = selectedIndex === index ? '#ffffff' : '#166AE3'
				const coloredIcon = feature.icon.replace(
					/fill="[^"]*"/g,
					`fill="${iconColor}"`
				)

				return (
					<TouchableOpacity
						key={index}
						style={styles.feature}
						onPress={() => setSelectedIndex(index)}
					>
						<View
							style={[
								styles.icon,
								{
									backgroundColor:
										selectedIndex === index ? '#1668E3' : 'transparent',
								},
							]}
						>
							<SvgXml xml={coloredIcon} width={24} height={24} />
						</View>
						<Text
							style={[
								styles.label,
								{
									color: textColor,
								},
							]}
						>
							{feature.label}
						</Text>
					</TouchableOpacity>
				)
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 16,
		borderWidth: 1,
		borderRadius: 12,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
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
		overflow: 'hidden',
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
