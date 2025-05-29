import { courseTabs } from '@/components/category-tabs/category-tabs.data'
import { CategoryTabs } from '@/components/category-tabs/CategoryTabs'
import { courseCards } from '@/components/store/store.data'
import { StoreCard } from '@/components/store/StoreCard'
import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { GoBackHeading } from '@/components/ui/heading/GoBackHeading'
import { useColor } from '@/hooks/useColor'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { ScrollView, StyleSheet, View } from 'react-native'

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
			<GoBackHeading title='Course' rightChildren={buttons()} />

			<CategoryTabs tabs={courseTabs} />

			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flexDirection: 'column', gap: 32, paddingBottom: 32 }}>
					<View style={styles.listContainer}>
						{courseCards.map((card, index) => (
							<StoreCard
								key={index}
								title={card.title}
								isFree={card.isFree}
								discount={card.discount}
								newPrice={card.newPrice}
								oldPrice={card.oldPrice}
								sold={card.sold}
								image={card.image}
								rightFooter={card.rightFooter}
							/>
						))}
						))
					</View>
				</View>
			</ScrollView>
		</ThemedSafeAreaView>
	)
}

const styles = StyleSheet.create({
	listContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		rowGap: 8,
		columnGap: 8,
	},
})
