import { COLORS } from '@/constants/colors.constant'
import { useTheme } from '@/hooks/useTheme'
import { type ViewProps } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

export type ThemedSafeAreaViewProps = ViewProps & {
	lightColor?: string
	darkColor?: string
}

export function ThemedSafeAreaView({
	style,
	lightColor,
	darkColor,
	...otherProps
}: ThemedSafeAreaViewProps) {
	const { theme } = useTheme()
	const backgroundColor =
		theme === 'light' ? COLORS.light.background : COLORS.dark.background

	return (
		<SafeAreaView
			style={[{ flex: 1, backgroundColor }, style]}
			{...otherProps}
		/>
	)
}
