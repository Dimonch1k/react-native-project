import { useColor } from '@/hooks/useColor'

import { StyleSheet, Text, type TextProps } from 'react-native'

export type ThemedTextProps = TextProps & {
	type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link'
	color?: string
}

export function ThemedText({
	style,
	color,
	type = 'default',
	...rest
}: ThemedTextProps) {
	const { textColor } = useColor()

	return (
		<Text
			style={[
				{ color: color ? color : textColor },
				type === 'default' ? styles.default : undefined,
				type === 'title' ? styles.title : undefined,
				type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
				type === 'subtitle' ? styles.subtitle : undefined,
				type === 'link' ? styles.link : undefined,
				style,
			]}
			{...rest}
		/>
	)
}

const styles = StyleSheet.create({
	default: {
		fontSize: 16,
	},
	defaultSemiBold: {
		fontSize: 16,
		fontWeight: '600',
	},
	title: {
		fontSize: 24,
	},
	subtitle: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	link: {
		fontSize: 16,
		color: '#0a7ea4',
	},
})
