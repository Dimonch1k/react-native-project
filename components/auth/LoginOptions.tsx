import { loginButtons } from '@/components/auth/login-buttons.data'
import { Button } from '@/components/ui/buttons/Button'

import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export const LoginOptions = () => {
	const router = useRouter()

	return (
		<View style={styles.buttonsContainer}>
			{loginButtons.map((button, index) => (
				<Button
					key={index}
					title={button.title}
					icon={button.icon}
					color='#fff'
					backgroundColor={button.backgroundColor}
					onPress={() => {
						if (button.href && button.href !== '/') {
							router.push(button.href)
						} else {
							console.log(`${button.title} clicked`)
						}
					}}
				/>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	buttonsContainer: {
		flexDirection: 'column',
		gap: 12,
		width: '100%',
	},
})
