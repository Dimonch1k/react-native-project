import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { ThemedText } from '@/components/theme/ThemedText'
import { LoginButton } from '@/components/ui/buttons/LoginButton'
import { StyledText } from '@/components/ui/text/Text'
import { COLORS } from '@/constants/colors.constant'
import { useTheme } from '@/hooks/useTheme'
import { Stack } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { loginButtons } from './login-buttons.data'

export default function LoginScreen() {
	const { theme } = useTheme()

	const color = theme === 'light' ? COLORS.light.text : COLORS.dark.text

	return (
		<ThemedSafeAreaView style={[styles.container]}>
			<Stack.Screen options={{ headerShown: false }} />

			<View style={styles.inner}>
				<ThemedText>
					<StyledText style={[styles.title, { color }]}>
						Enter to get closer to Bosedu and explore more
					</StyledText>
				</ThemedText>

				<View style={styles.buttonsContainer}>
					{loginButtons.map((button, index) => (
						<LoginButton
							key={index}
							title={button.title}
							icon={button.icon}
							color={button.color}
							onPress={() => console.log(`${button.title} clicked`)}
						/>
					))}
				</View>

				<StyledText
					color={color}
					fontSize={14}
					fontWeight='400'
					textAlign='center'
				>
					By registering, you agree to the{' '}
					<StyledText color={color} fontWeight='semibold'>
						Terms of Service
					</StyledText>
					,{' '}
					<StyledText color={color} fontWeight='semibold'>
						Privacy Policy
					</StyledText>{' '}
					and{' '}
					<StyledText color={color} fontWeight='semibold'>
						Cookie Policy
					</StyledText>
					.
				</StyledText>
			</View>
		</ThemedSafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	inner: {
		flex: 1,
		paddingHorizontal: 33,
		gap: 38,
		justifyContent: 'center',
	},
	title: {
		fontSize: 22,
		textAlign: 'center',
		marginBottom: 30,
		fontWeight: 'semibold',
	},
	buttonsContainer: {
		flexDirection: 'column',
		gap: 12,
		width: '100%',
	},
	privacyPolicy: {
		textAlign: 'center',
		marginTop: 30,
		fontSize: 14,
	},
})
