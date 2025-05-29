import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { Heading } from '@/components/ui/heading/Heading'
import { StyledText } from '@/components/ui/text/Text'
import { useThemeStore } from '@/stores/theme.store'
import { Ionicons } from '@expo/vector-icons'

import { useColor } from '@/hooks/useColor'
import React, { useState } from 'react'
import {
	Image,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native'
import { profileMenuItems } from './profile.data'

export default function ProfileScreen() {
	const toggleTheme = useThemeStore(state => state.toggleTheme)
	const isLight = useThemeStore(state => state.isLight)

	const { textColor } = useColor()

	const [selected, setSelected] = useState<string | null>(null)

	const handleSelect = (item: string) => {
		setSelected(prev => (prev === item ? null : item))
	}

	const toggleThemeButton = () => (
		<TouchableOpacity onPress={toggleTheme}>
			<StyledText textAlign='center'>
				{isLight ? (
					<Ionicons name='sunny' size={24} />
				) : (
					<Ionicons name='moon' size={24} />
				)}
			</StyledText>
		</TouchableOpacity>
	)

	return (
		<ThemedSafeAreaView>
			<Heading title='Profile' rightChildren={toggleThemeButton()} underline />

			<View style={styles.profileContainer}>
				<Image
					source={{ uri: 'https://placehold.co/55x55' }}
					style={styles.avatar}
				/>
				<View>
					<StyledText style={styles.name}>Claudia Alves</StyledText>
					<StyledText style={styles.email}>claudiaalves@mail.com</StyledText>
				</View>
			</View>

			<View
				style={[
					styles.divider,
					{ backgroundColor: isLight ? '#f7f7f7' : '#17191F' },
				]}
			/>

			<ScrollView contentContainerStyle={styles.optionsContainer}>
				{profileMenuItems.map(option => (
					<View key={option}>
						<TouchableOpacity
							style={styles.optionRow}
							onPress={() => handleSelect(option)}
						>
							<StyledText style={styles.optionText}>{option}</StyledText>
							<View
								style={[
									styles.arrow,
									{ borderColor: textColor },
									option === selected && {
										transform: [{ rotate: '-45deg' }],
									},
								]}
							/>
						</TouchableOpacity>

						{selected === option && (
							<View style={styles.dropdownContent}>
								<StyledText style={{ color: '#ccc' }}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</StyledText>
							</View>
						)}

						<View style={styles.subDivider} />
					</View>
				))}
			</ScrollView>

			<View
				style={[
					styles.divider,
					{ backgroundColor: isLight ? '#f7f7f7' : '#17191F' },
				]}
			/>

			<TouchableOpacity>
				<StyledText style={styles.logout}>Logout</StyledText>
			</TouchableOpacity>

			<StyledText style={styles.version}>App Version 1.0</StyledText>
		</ThemedSafeAreaView>
	)
}

const styles = StyleSheet.create({
	profileContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
	},
	avatar: {
		width: 55,
		height: 55,
		borderRadius: 100,
		backgroundColor: '#C5DCFF',
	},
	name: {
		fontSize: 20,
		fontWeight: '600',
		fontFamily: 'Poppins',
	},
	email: {
		fontSize: 14,
		opacity: 0.5,
		fontFamily: 'Poppins',
	},
	divider: {
		height: 8,
		marginTop: 32,
		marginBottom: 20,
	},
	optionsContainer: {
		gap: 20,
		paddingBottom: 120,
	},
	optionRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	optionText: {
		fontSize: 14,
		fontWeight: '600',
	},
	arrow: {
		width: 10,
		height: 10,
		borderLeftWidth: 2,
		borderBottomWidth: 2,
		transform: [{ rotate: '135deg' }],
		marginRight: 8,
	},
	dropdownContent: {
		paddingVertical: 10,
	},
	subDivider: {
		height: 0.5,
		backgroundColor: '#E0E0E0',
		opacity: 0.25,
		marginTop: 10,
	},
	logoutWrapper: {
		position: 'absolute',
		bottom: 60,
		left: 20,
	},
	logout: {
		color: '#FF3A46',
		fontSize: 14,
		fontWeight: '600',
	},
	version: {
		position: 'absolute',
		bottom: 30,
		alignSelf: 'center',
		color: '#ccc',
		fontSize: 14,
	},
})
