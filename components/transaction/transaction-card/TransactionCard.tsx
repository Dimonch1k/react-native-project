import { StyledText } from '@/components/ui/text/Text'
import { useColor } from '@/hooks/useColor'
import React from 'react'
import {
	GestureResponderEvent,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import { SvgXml } from 'react-native-svg'

export interface TransactionCardProps {
	image: string
	icon: string
	title: string
	subtitle: string
	date: string
	onPress?: (event: GestureResponderEvent) => void
}

export const TransactionCard: React.FC<TransactionCardProps> = ({
	image,
	icon,
	title,
	subtitle,
	date,
	onPress,
}) => {
	const { backgroundTab } = useColor()

	const iconColor = '#ffffff'
	const coloredIcon = icon.replace(/fill="[^"]*"/g, `fill="${iconColor}"`)

	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={onPress}
			style={[
				styles.card,
				{ backgroundColor: backgroundTab, borderColor: backgroundTab },
			]}
		>
			<View style={styles.imageContainer}>
				<Image source={{ uri: image }} style={styles.image} />
				<View style={styles.iconContainer}>
					<SvgXml xml={coloredIcon} width={12} height={12} />
				</View>
			</View>

			<View style={styles.content}>
				<StyledText style={styles.title}>{title}</StyledText>
				<Text style={styles.subtitle}>{subtitle}</Text>
				<Text style={styles.date}>Order Date : {date}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	card: {
		padding: 10,
		borderRadius: 10,
		borderWidth: 1,
		flexDirection: 'row',
		gap: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 2.22,
		elevation: 3,
	},
	imageContainer: {
		width: 105,
		height: 91,
		borderRadius: 10,
		backgroundColor: '#C5DCFF',
		position: 'relative',
		overflow: 'hidden',
	},
	image: {
		width: 105,
		height: 91,
		borderRadius: 10,
	},
	iconContainer: {
		width: 20,
		height: 20,
		position: 'absolute',
		left: 8,
		top: 8,
		borderRadius: 5,
		backgroundColor: '#1668E3',
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
	},
	emoji: {
		fontSize: 12,
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		gap: 8,
	},
	title: {
		fontSize: 14,
		fontWeight: '600',
	},
	subtitle: {
		color: '#1668E3',
		fontSize: 12,
		fontWeight: '600',
	},
	date: {
		color: '#A3A3A3',
		fontSize: 10,
		fontWeight: '500',
	},
})
