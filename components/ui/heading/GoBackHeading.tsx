import { Heading } from '@/components/ui/heading/Heading'
import { useColor } from '@/hooks/useColor'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, View } from 'react-native'

interface GoBackHeadingProps {
	title?: string
	rightChildren?: React.ReactNode
	customFallback?: string
}

export function GoBackHeading({
	title,
	rightChildren,
	customFallback,
}: GoBackHeadingProps) {
	const { textColor } = useColor()

	const handleGoBack = () => {
		if (customFallback) {
			const { useRouter } = require('expo-router')
			const router = useRouter()

			if (router.canGoBack()) {
				router.back()
			} else {
				router.replace(customFallback)
			}
		}
	}

	const goBackButton = () => (
		<Pressable onPress={handleGoBack}>
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
