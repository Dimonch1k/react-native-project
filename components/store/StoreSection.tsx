import { useColor } from '@/hooks/useColor'

import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { StyledText } from '../ui/text/Text'
import { StoreCard, StoreCardProps } from './StoreCard'

interface StoreSectionProps {
	title: string
	onClickMore: () => void
	cards: StoreCardProps[]
}

export function StoreSection({ title, onClickMore, cards }: StoreSectionProps) {
	const { textColor } = useColor()

	return (
		<View style={[styles.inputWrapper, { borderColor: textColor }]}>
			{/* Heading */}
			<View style={styles.heading}>
				<StyledText fontSize={24} fontWeight='bold'>
					{title}
				</StyledText>
				<TouchableOpacity onPress={onClickMore}>
					<StyledText style={{ color: '#7BAFFF' }}>View More</StyledText>
				</TouchableOpacity>
			</View>

			{/* Cards */}
			<View style={styles.cards}>
				{cards.map(card => (
					<StoreCard
						key={card.id}
						id={card.id}
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
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	inputWrapper: {
		flexDirection: 'column',
		gap: 16,
	},
	heading: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	cards: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		rowGap: 8,
		columnGap: 8,
	},
})
