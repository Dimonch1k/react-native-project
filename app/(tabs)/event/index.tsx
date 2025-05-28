import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import { EventCard } from '@/components/event/event-card/EventCard'
import { eventCardsData } from '@/components/event/event-cards.data'
import { EventFilters } from '@/components/event/EventFilters'
import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { Heading } from '@/components/ui/heading/Heading'
import { useColor } from '@/hooks/useColor'

export default function EventScreen() {
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
			<Heading title='Event' rightChildren={buttons()} underline />

			<EventFilters />

			<FlatList
				data={eventCardsData}
				keyExtractor={item => item.id}
				contentContainerStyle={styles.listContainer}
				renderItem={({ item }) => (
					<EventCard
						isOnline={item.isOnline}
						title={item.title}
						isFree={item.isFree}
						newPrice={item.newPrice}
						oldPrice={item.oldPrice}
						participants={item.participants}
						date={item.date}
						image={item.image}
					/>
				)}
			/>
		</ThemedSafeAreaView>
	)
}

const styles = StyleSheet.create({
	listContainer: {
		gap: 16,
	},
})
