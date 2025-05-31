import { Heading } from '@/components/ui/heading/Heading'
import { useColor } from '@/hooks/useColor'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable, View } from 'react-native'

interface GoBackHeadingProps {
	title?: string
	rightChildren?: React.ReactNode
}

export function GoBackHeading({ title, rightChildren }: GoBackHeadingProps) {
	const { textColor } = useColor()
	const { back } = useRouter()

	const goBackButton = () => (
		<Pressable onPress={() => back()}>
			<View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
				<Ionicons name='arrow-back' size={24} color={textColor} />
			</View>
		</Pressable>
	)

	return (
		<Heading
			title={title}
			titleType='default'
			leftChildren={goBackButton()}
			rightChildren={rightChildren}
			underline
		/>
	)
}
