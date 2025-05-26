import { Link } from 'expo-router'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
	return (
		<SafeAreaView>
			<Text>Home Screen</Text>
			<Link href={'/auth/login'}>Login</Link>
			<Link href={'/auth/register'}>Register</Link>
		</SafeAreaView>
	)
}
