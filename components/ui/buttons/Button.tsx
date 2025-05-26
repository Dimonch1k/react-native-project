import { ThemedText } from '@/components/theme/ThemedText'
import React from 'react'
import {
	Image,
	ImageSourcePropType,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native'

type ButtonProps = {
	title: string
	icon?: ImageSourcePropType
	ionicIcon?: React.ReactNode
	color?: string
	backgroundColor?: string
	onPress?: () => void
}

export const Button: React.FC<ButtonProps> = ({
	title,
	icon,
	ionicIcon,
	color,
	backgroundColor,
	onPress,
}) => {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor }]}
			activeOpacity={0.7}
			onPress={onPress}
		>
			<View style={styles.buttonContent}>
				<View style={styles.leftIconWrapper}>
					{icon && <Image source={icon} style={styles.buttonIcon} />}
					{ionicIcon}
				</View>
				<View style={styles.centerTextWrapper}>
					<ThemedText color={color} type='defaultSemiBold'>
						{title}
					</ThemedText>
				</View>
				<View style={styles.rightFiller} />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 100,
		alignSelf: 'stretch',
	},
	buttonContent: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20,
		paddingVertical: 13,
	},
	leftIconWrapper: {
		width: 32,
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	centerTextWrapper: {
		flex: 1,
		alignItems: 'center',
	},
	rightFiller: {
		width: 24,
	},
	buttonIcon: {
		width: 24,
		height: 24,
	},
})
