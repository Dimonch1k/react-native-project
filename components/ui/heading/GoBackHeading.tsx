import { Heading } from '@/components/ui/heading/Heading'
import { useColor } from '@/hooks/useColor'
import Ionicons from '@expo/vector-icons/Ionicons'

import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable, View } from 'react-native'

interface GoBackHeadingProps {
	title?: string
}

export const GoBackHeading: React.FC<GoBackHeadingProps> = ({ title }) => {
	const { back } = useRouter()
	const { textColor } = useColor()

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
			underline
		/>
	)
}
