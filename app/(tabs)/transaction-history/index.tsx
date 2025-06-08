import { SearchBar } from '@/components/store/SearchBar'
import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { TransactionCard } from '@/components/transaction/transaction-card/TransactionCard'
import { TransactionFeatures } from '@/components/transaction/transaction-features/TransactionFeatures'
import { GoBackHeading } from '@/components/ui/heading/GoBackHeading'
import { transactionHistoryData } from '@/data/transaction-history.data'
import { useColor } from '@/hooks/useColor'
import { useThemeStore } from '@/stores/theme.store'
import { ScrollView, StyleSheet, View } from 'react-native'

export default function TransactionHistoryScreen() {
	const isLight = useThemeStore(state => state.isLight)
	const { backgroundColor } = useColor()

	return (
		<ThemedSafeAreaView>
			<GoBackHeading title='Transaction History' />

			<ScrollView
				style={{ flex: 1 }}
				showsVerticalScrollIndicator={false}
				stickyHeaderIndices={[1]}
				contentContainerStyle={styles.scrollContent}
			>
				<TransactionFeatures />

				<View
					style={[
						styles.searchWrapper,
						{
							backgroundColor: isLight ? '#FFFFFF' : backgroundColor,
						},
					]}
				>
					<SearchBar />
				</View>

				<View style={styles.listContainer}>
					{transactionHistoryData.map(card => (
						<TransactionCard
							key={card.id}
							image={card.image}
							icon={card.icon}
							title={card.title}
							subtitle={card.subtitle}
							date={card.date}
						/>
					))}
				</View>
			</ScrollView>
		</ThemedSafeAreaView>
	)
}

const styles = StyleSheet.create({
	scrollContent: {
		flexDirection: 'column',
		gap: 28,
		paddingBottom: 32,
	},
	searchWrapper: {
		paddingVertical: 8,
		zIndex: 10,
	},
	listContainer: {
		flexDirection: 'column',
		rowGap: 8,
		columnGap: 8,
		paddingHorizontal: 2,
		paddingVertical: 2,
	},
})
