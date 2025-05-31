import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { Button } from '@/components/ui/buttons/Button'
import { Heading } from '@/components/ui/heading/Heading'
import { useColor } from '@/hooks/useColor'
import { Ionicons } from '@expo/vector-icons'

import { Link, router } from 'expo-router'
import { View } from 'react-native'

export default function HomeScreen() {
	const { textColor, backgroundTab } = useColor()

	const buttons = () => (
		<View style={{ flexDirection: 'row', gap: 16 }}>
			<Link href={'/auth'}>
				<Ionicons name='log-in-outline' size={24} color={textColor} />
			</Link>
			<Link href={'/auth/register-with-email'}>
				<Ionicons name='person-add-outline' size={24} color={textColor} />
			</Link>
		</View>
	)

	return (
		<ThemedSafeAreaView>
			<Heading title={'Home'} underline rightChildren={buttons()} />

			<Button
				title='Transaction History'
				color={textColor}
				backgroundColor={backgroundTab}
				onPress={() => {
					router.push('/(tabs)/transaction-history')
				}}
			/>
		</ThemedSafeAreaView>
	)
}
