import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

import { COLORS } from '@/constants/colors.constant'
import { useTheme } from '@/hooks/useTheme'
import { ThemeProvider } from '@/providers/ThemeProvider'

export default function RootLayout() {
	const { theme } = useTheme()
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	})

	if (!loaded) {
		// Async font loading only occurs in development.
		return null
	}

	return (
		<ThemeProvider>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name='(tabs)' />
				<Stack.Screen name='+not-found' />
			</Stack>
			<StatusBar
				style={theme === 'dark' ? 'light' : 'dark'}
				backgroundColor={
					theme === 'dark' ? COLORS.dark.background : COLORS.light.background
				}
			/>
		</ThemeProvider>
	)
}
