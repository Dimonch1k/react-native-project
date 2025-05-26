import { Link, Stack } from 'expo-router'
import { StyleSheet, View } from 'react-native'

import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { ThemedText } from '@/components/theme/ThemedText'

export default function NotFoundScreen() {
	return (
		<ThemedSafeAreaView style={styles.container}>
			<Stack.Screen options={{ title: 'Oops!' }} />
			<View>
				<ThemedText type='title'>This screen does not exist.</ThemedText>
				<Link href='/' style={styles.link}>
					<ThemedText type='link'>Go to home screen!</ThemedText>
				</Link>
			</View>
		</ThemedSafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
})
