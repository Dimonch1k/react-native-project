import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { ThemedText } from '@/components/theme/ThemedText'
import { Button } from '@/components/ui/buttons/Button'
import { GoBackHeading } from '@/components/ui/heading/GoBackHeading'
import { InputField } from '@/components/ui/inputs/InputField'

import { StyleSheet, View } from 'react-native'

export default function ForgotPasswordScreen() {
	return (
		<ThemedSafeAreaView>
			<GoBackHeading title='Forgot Password' />

			<View style={styles.textContent}>
				<ThemedText type='subtitle'>Forgot your password?</ThemedText>
				<ThemedText style={{ color: '#b8b8ba', fontSize: 14 }}>
					Enter the registered email to receive help to reset your password.
				</ThemedText>
			</View>

			<View style={styles.buttonsContainer}>
				<InputField placeholder='claudiaalvez@mail.com' />
			</View>

			{/* Login Button */}
			<Button
				title='Send'
				color='#fff'
				backgroundColor='#1668E3'
				onPress={() => {
					console.log('Please check your email to reset password!')
				}}
			/>
		</ThemedSafeAreaView>
	)
}

const styles = StyleSheet.create({
	textContent: {
		flexDirection: 'column',
		gap: 8,
		width: '100%',
	},
	buttonsContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 10,
	},
})
