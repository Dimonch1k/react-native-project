import { useColor } from '@/hooks/useColor'
import { StyleSheet, type ViewProps } from 'react-native'

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
	const { backgroundColor } = useColor()

	return (
		<SafeAreaView
			style={[styles.inner, { backgroundColor }, style]}
			{...otherProps}
		/>
	)
}

const styles = StyleSheet.create({
	inner: {
		flex: 1,
		paddingHorizontal: 33,
		flexDirection: 'column',
		gap: 28,
	},
})
