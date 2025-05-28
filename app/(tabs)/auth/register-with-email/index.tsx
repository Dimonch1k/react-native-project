import { PrivacyPolicyText } from '@/components/auth/PrivacyPolicyText'
import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { Button } from '@/components/ui/buttons/Button'
import { GoBackHeading } from '@/components/ui/heading/GoBackHeading'
import { InputField } from '@/components/ui/inputs/InputField'

import { StyleSheet, View } from 'react-native'

export default function RegisterWithEmailScreen() {
	return (
		<ThemedSafeAreaView>
			<GoBackHeading title='Register with Email' />
			<View style={styles.buttonsContainer}>
				<InputField placeholder='Full name' />
				<InputField placeholder='Email' />
				<InputField placeholder='Password' secureTextEntry />
				<InputField placeholder='Re-enter Password' secureTextEntry />
			</View>

			{/* Register Button */}
			<Button
				title='Register Now'
				color='#fff'
				backgroundColor='#1668E3'
				onPress={() => {
					console.log('Account successfully registered')
				}}
			/>
			{/* Privacy Policy */}
			<PrivacyPolicyText />
		</ThemedSafeAreaView>
	)
}

const styles = StyleSheet.create({
	buttonsContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 10,
	},
})
