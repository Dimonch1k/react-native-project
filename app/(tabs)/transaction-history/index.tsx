import { SearchBar } from '@/components/store/SearchBar'
import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { TransactionCard } from '@/components/transaction/transaction-card/TransactionCard'
import { TransactionFeatures } from '@/components/transaction/transaction-features/TransactionFeatures'
import { GoBackHeading } from '@/components/ui/heading/GoBackHeading'
import { transactionHistoryData } from '@/data/transaction-history.data'
import { ScrollView, StyleSheet, View } from 'react-native'

export default function TransactionHistoryScreen() {
	return (
		<ThemedSafeAreaView>
			<GoBackHeading title='Transaction History' />

			<TransactionFeatures />

			<SearchBar />

			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flexDirection: 'column', paddingBottom: 32 }}>
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
				</View>
			</ScrollView>
		</ThemedSafeAreaView>
	)
}

const styles = StyleSheet.create({
	listContainer: {
		flexDirection: 'column',
		rowGap: 8,
		columnGap: 8,
		paddingHorizontal: 2,
		paddingVertical: 2,
	},
})
