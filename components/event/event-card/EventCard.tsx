import { StyledText } from '@/components/ui/text/Text'
import { useColor } from '@/hooks/useColor'
import { useThemeStore } from '@/stores/theme.store'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface EventCardProps {
	isOnline: boolean
	title: string
	isFree: boolean
	newPrice: number
	oldPrice: number
	participants: number
	date: string
	image: string
}

export function EventCard({
	isOnline,
	title,
	isFree,
	newPrice,
	oldPrice,
	participants,
	date,
	image,
}: EventCardProps) {
	const { backgroundTab } = useColor()
	const isLight = useThemeStore(state => state.isLight)

	console.log(title)

	return (
		<View style={[styles.card, { backgroundColor: backgroundTab }]}>
			<View style={styles.imageWrapper}>
				<Image source={{ uri: image }} style={styles.image} />
			</View>
			<View
				style={[
					styles.tag,
					{ backgroundColor: isOnline ? '#FF3A46' : '#1668E3' },
				]}
			>
				<StyledText style={{ color: '#fff' }}>
					{isOnline ? 'Online' : 'Offline'}
				</StyledText>
			</View>

			<View style={styles.content}>
				<StyledText fontWeight='bold'>{title}</StyledText>

				<View style={styles.priceWrapper}>
					<StyledText
						fontWeight='bold'
						style={[styles.newPrice, { color: isFree ? '#1668E3' : '#E13641' }]}
					>
						{isFree ? 'Free' : `$${newPrice}`}
					</StyledText>
					{!isFree && (
						<StyledText style={styles.oldPrice} fontWeight='bold'>
							${oldPrice}
						</StyledText>
					)}
				</View>
			</View>

			<View style={styles.footer}>
				<View style={styles.footerItem}>
					<Ionicons name='person' size={14} color='#1668E3' />
					<StyledText
						fontWeight='bold'
						style={[styles.footerText, { color: isLight ? '#000' : '#fff' }]}
					>
						{participants} Participants
					</StyledText>
				</View>

				<View style={styles.footerItem}>
					<Ionicons name='time' size={14} color='#1668E3' />
					<StyledText
						fontWeight='bold'
						style={[styles.footerText, { color: isLight ? '#000' : '#fff' }]}
					>
						{date}
					</StyledText>
				</View>

				<TouchableOpacity style={styles.joinButton}>
					<Text style={styles.joinText}>Join Event</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		alignSelf: 'stretch',
		paddingBottom: 10,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#292C32',
		backgroundColor: '#fff',
		flexDirection: 'column',
		gap: 10,
		overflow: 'hidden',
	},
	imageWrapper: {
		width: 'auto',
		height: 135,
		position: 'relative',
	},
	image: {
		width: '100%',
		height: '100%',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		backgroundColor: '#C5DCFF',
	},
	tag: {
		position: 'absolute',
		top: 10,
		left: 0,
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10,
		paddingHorizontal: 10,
		paddingVertical: 4,
	},
	tagText: {
		color: '#fff',
		fontSize: 12,
		fontWeight: '800',
		fontFamily: 'Inter',
	},
	content: {
		paddingHorizontal: 10,
		gap: 10,
	},
	priceWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 7,
	},
	newPrice: {
		color: '#FF3A46',
		fontSize: 14,
		fontFamily: 'Inter',
	},
	oldPrice: {
		color: '#A3A3A3',
		fontSize: 12,
		textDecorationLine: 'line-through',
		fontWeight: '500',
		fontFamily: 'Inter',
	},
	footer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		gap: 10,
	},
	footerItem: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 6,
	},
	footerText: {
		fontSize: 10,
		fontFamily: 'Poppins',
	},
	joinButton: {
		flex: 1,
		backgroundColor: '#1668E3',
		borderRadius: 20,
		paddingVertical: 8,
		paddingHorizontal: 10,
		alignItems: 'center',
		borderWidth: 0.5,
		borderColor: '#7BAFFF',
	},
	joinText: {
		color: '#EAF2FF',
		fontSize: 10,
		fontWeight: '600',
		fontFamily: 'Inter',
	},
})
