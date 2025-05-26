import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { ThemedText } from '@/components/theme/ThemedText'
import { StyledText } from '@/components/ui/text/Text'
import { useTheme } from '@/hooks/useTheme'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export default function ProfileScreen() {
	const { theme, toggleTheme } = useTheme()

	return (
		<ThemedSafeAreaView>
			<ThemedText>Profile Screen</ThemedText>
			<TouchableOpacity
				onPress={toggleTheme}
				style={{
					marginTop: 10,
					paddingVertical: 5,
					paddingHorizontal: 10,
					borderWidth: 2,
					borderColor: theme === 'dark' ? '#fff' : '#000',
				}}
			>
				<StyledText textAlign='center'>
					<ThemedText>Toggle Theme</ThemedText>
				</StyledText>
			</TouchableOpacity>
		</ThemedSafeAreaView>
	)
}
