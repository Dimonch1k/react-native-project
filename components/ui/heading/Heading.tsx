import { ThemedText } from '@/components/theme/ThemedText'
import { useColor } from '@/hooks/useColor'

import React from 'react'
import { StyleSheet, View } from 'react-native'

interface HeadingProps {
	title?: string
	titleType?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link'
	underline?: boolean
	leftChildren?: React.ReactNode
	rightChildren?: React.ReactNode
	marginBottom?: number
}

export const Heading: React.FC<HeadingProps> = ({
	title,
	titleType = 'title',
	underline,
	leftChildren,
	rightChildren,
	marginBottom,
}) => {
	const { textColor } = useColor()

	const divider = StyleSheet.create({
		bottom: {
			alignSelf: 'stretch',
			height: underline ? 0.6 : 0,
			backgroundColor: textColor,
			marginTop: 10,
		},
	})

	return (
		<View style={(styles.container, { marginBottom })}>
			<View style={styles.headingRow}>
				{leftChildren}

				<ThemedText type={titleType} style={[styles.title]}>
					{title}
				</ThemedText>

				{rightChildren}
			</View>

			{/* Divider line */}
			<View style={divider.bottom} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	headingRow: {
		alignSelf: 'stretch',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		gap: 16,
	},
	title: {
		flex: 1,
	},
})
