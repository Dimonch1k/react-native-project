import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { EventCard } from '@/components/event/event-card/EventCard'
import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { FilterButtons } from '@/components/ui/buttons/FilterButton'
import { Heading } from '@/components/ui/heading/Heading'
import { eventCardsData } from '@/data/event-cards.data'
import { useColor } from '@/hooks/useColor'

export default function EventScreen() {
	const { textColor } = useColor()

	const filters = ['New', 'Online', 'Offline', 'Free']

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
			<Heading title='Event' rightChildren={buttons()} underline />

			<FilterButtons filters={filters} />

			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flexDirection: 'column', paddingBottom: 32 }}>
					<View style={styles.listContainer}>
						{eventCardsData.map(card => (
							<EventCard
								key={card.id}
								isOnline={card.isOnline}
								title={card.title}
								isFree={card.isFree}
								newPrice={card.newPrice}
								oldPrice={card.oldPrice}
								participants={card.participants}
								date={card.date}
								image={card.image}
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
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		rowGap: 8,
		columnGap: 8,
	},
})
