import { CategoryTabs } from '@/components/category-tabs/CategoryTabs'
import { SearchBar } from '@/components/store/SearchBar'
import { StoreSection } from '@/components/store/StoreSection'
import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { Heading } from '@/components/ui/heading/Heading'
import { storeTabs } from '@/data/category-tabs.data'
import { storeCourseCards, storeModulCards } from '@/data/store.data'
import { useColor } from '@/hooks/useColor'
import { Ionicons } from '@expo/vector-icons'
import { Link, useRouter } from 'expo-router'
import { ScrollView, View } from 'react-native'

export default function StoreScreen() {
	const { textColor } = useColor()

	const router = useRouter()

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
				leftChildren={<SearchBar maxWidth='70%' />}
				rightChildren={buttons()}
				underline
			/>

			<CategoryTabs tabs={storeTabs} />

			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flexDirection: 'column', gap: 32, paddingBottom: 32 }}>
					<StoreSection
						title='Modul'
						onClickMore={() => router.push('/')}
						cards={storeModulCards}
					/>

					<StoreSection
						title='Course'
						onClickMore={() => router.push('/(tabs)/store/course')}
						cards={storeCourseCards}
					/>

					<StoreSection
						title='Bootcamp'
						onClickMore={() => router.push('/')}
						cards={storeCourseCards}
					/>
				</View>
			</ScrollView>
		</ThemedSafeAreaView>
	)
}
