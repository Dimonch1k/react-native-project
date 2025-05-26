import { useThemeStore } from '@/stores/theme.store'

import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { useEffect } from 'react'
import { View } from 'react-native'
import 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function RootLayout() {
	const hydrate = useThemeStore(state => state.hydrate)
	const isLight = useThemeStore(state => state.isLight)

	const insets = useSafeAreaInsets()

	useEffect(() => {
		hydrate()
	}, [])

	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	})

	if (!loaded) return null
	return (
		<>
			<View
				style={{
					height: insets.top,
					backgroundColor: isLight ? '#f5f5f5' : '#14171F',
				}}
			/>
			<StatusBar style={isLight ? 'dark' : 'light'} translucent />

			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name='(tabs)' />
				<Stack.Screen name='+not-found' />
			</Stack>
		</>
	)
}
