import React from 'react'
import {
	Image,
	ImageSourcePropType,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'

type LoginButtonProps = {
	title: string
	icon: ImageSourcePropType
	color: string
	onPress?: () => void
}

export const LoginButton: React.FC<LoginButtonProps> = ({
	title,
	icon,
	color,
	onPress,
}) => {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: color }]}
			activeOpacity={0.7}
			onPress={onPress}
		>
			<View style={styles.buttonContent}>
				<View style={styles.leftIconWrapper}>
					<Image source={icon} style={styles.buttonIcon} />
				</View>
				<View style={styles.centerTextWrapper}>
					<Text style={[styles.buttonTitle]}>{title}</Text>
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
		width: 24,
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
	buttonTitle: {
		fontSize: 16,
		fontWeight: '600',
		textAlign: 'center',
		color: '#fff',
	},
})
