import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Stack } from 'expo-router'

export default function RegisterScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<Stack.Screen options={{ headerShown: false }} />
			<View>
				<Text style={styles.title}>
					Enter to get closer to Bosedu and explore more
				</Text>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 33,
	},
	title: {
		fontSize: 22,
		textAlign: 'center',
		marginBottom: 20,
	},
	button: {
		backgroundColor: '#007BFF',
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 8,
		alignItems: 'center',
		marginTop: 20,
	},
	buttonContent: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	buttonIcon: {
		width: 24,
		height: 24,
		marginRight: 10,
	},
	buttonTitle: {
		color: '#FFFFFF',
		fontSize: 16,
		fontWeight: 'bold',
	},
})
