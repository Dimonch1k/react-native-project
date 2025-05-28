import { LoginOptions } from '@/components/auth/LoginOptions'
import { PrivacyPolicyText } from '@/components/auth/PrivacyPolicyText'
import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { ThemedText } from '@/components/theme/ThemedText'
import { StyledText } from '@/components/ui/text/Text'

import { Link } from 'expo-router'
import { StyleSheet, View } from 'react-native'

export default function LoginScreen() {
	return (
		<ThemedSafeAreaView style={[styles.container]}>
			<View style={styles.inner}>
				<View />

				<ThemedText style={styles.title}>
					Enter to get closer to Bosedu and explore more
				</ThemedText>

				<LoginOptions />

				<StyledText fontSize={16} textAlign='center'>
					Register using Email{' '}
					<Link href={'/auth/register-with-email'}>
						<StyledText style={{ color: '#014BBA' }} fontWeight='bold'>
							Here!
						</StyledText>
					</Link>
				</StyledText>

				<PrivacyPolicyText position='absolute' bottom={20} />
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
		gap: 38,
	},
	title: {
		fontSize: 24,
		textAlign: 'center',
		marginBottom: 30,
		fontWeight: 'bold',
		lineHeight: 40,
	},
})
