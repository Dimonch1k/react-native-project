import PrivacyPolicyText from '@/components/auth/PrivacyPolicyText'
import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { ThemedText } from '@/components/theme/ThemedText'
import { Button } from '@/components/ui/buttons/Button'
import { GoBackHeading } from '@/components/ui/heading/GoBackHeading'
import { InputField } from '@/components/ui/inputs/InputField'

import Ionicons from '@expo/vector-icons/Ionicons'
import { Link } from 'expo-router'
import { StyleSheet, View } from 'react-native'

export default function LoginWithEmailScreen() {
	return (
		<ThemedSafeAreaView>
			<GoBackHeading title='Login with Email' />
			<View style={styles.buttonsContainer}>
				<InputField placeholder='Email' />
				<InputField placeholder='Password' secureTextEntry />
			</View>

			{/* Forgot password Link */}
			<Link href={'/auth/forgot-password'}>
				<ThemedText
					type='link'
					style={{ textAlign: 'center', fontWeight: 'bold' }}
				>
					Forgot Password?
				</ThemedText>
			</Link>

			{/* Login Button */}
			<Button
				title='Login'
				ionicIcon={<Ionicons name='log-in-outline' size={24} color='#fff' />}
				color='#fff'
				backgroundColor='#1668E3'
				onPress={() => {
					console.log('You successfully logged into your account')
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
