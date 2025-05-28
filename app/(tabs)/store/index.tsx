import { SearchBar } from '@/components/store/SearchBar'
import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { Heading } from '@/components/ui/heading/Heading'
import { useColor } from '@/hooks/useColor'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

export default function StoreScreen() {
	const { textColor } = useColor()

	const buttons = () => (
		<>
			<Link href={'/favorite'}>
				<Ionicons name='heart-outline' size={24} color={textColor} />
			</Link>
			<Link href={'/cart'}>
				<Ionicons name='bag-handle-outline' size={24} color={textColor} />
			</Link>
		</>
	)

	return (
		<ThemedSafeAreaView>
			<Heading
				leftChildren={<SearchBar />}
				rightChildren={buttons()}
				underline
			/>
		</ThemedSafeAreaView>
	)
}
