import { StyledText } from '@/components/ui/text/Text'
import { useColor } from '@/hooks/useColor'
import { useCartStore } from '@/stores/cart.store'
import React from 'react'
import {
	Alert,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'

export interface StoreCardProps {
	id: string
	title: string
	isFree?: boolean
	discount?: number
	newPrice?: number
	oldPrice?: number
	sold: number
	image?: string
	rightFooter: string
}

export function StoreCard({
	id,
	title,
	isFree,
	discount,
	newPrice,
	oldPrice,
	sold,
	image,
	rightFooter,
}: StoreCardProps) {
	const { backgroundTab } = useColor()
	const { addItem } = useCartStore()

	const handleAddToCart = async () => {
		try {
			await addItem({
				id,
				title,
				newPrice: newPrice || 0,
				oldPrice: oldPrice || 0,
				image: image || '',
				isFree,
				discount,
			})

			Alert.alert('Added to Cart', `${title} has been added to your cart!`, [
				{ text: 'OK' },
			])
		} catch (error) {
			Alert.alert('Error', 'Failed to add item to cart')
		}
	}

	return (
		<TouchableOpacity
			style={[styles.card, { backgroundColor: backgroundTab }]}
			onPress={handleAddToCart}
			activeOpacity={0.8}
		>
			<View style={styles.imageWrapper}>
				<Image source={{ uri: image }} style={styles.image} />
			</View>

			{/* Tag */}
			{(isFree || (discount && discount > 0)) && (
				<View
					style={[
						styles.tag,
						{
							backgroundColor: isFree ? '#1668E3' : '#FF3A46',
							right: 0,
							left: 'auto',
						},
					]}
				>
					<StyledText style={{ color: '#fff' }} fontWeight='bold'>
						{isFree ? 'FREE' : `${discount}%`}
					</StyledText>
				</View>
			)}

			<View style={styles.content}>
				<StyledText
					fontWeight='bold'
					numberOfLines={1}
					style={{
						overflow: 'hidden',
					}}
				>
					{title}
				</StyledText>

				<View style={styles.priceWrapper}>
					<StyledText
						fontWeight='bold'
						style={[styles.newPrice, { color: isFree ? '#1668E3' : '#E13641' }]}
					>
						{isFree ? 'FREE' : `$${newPrice}`}
					</StyledText>
					{!isFree && (
						<StyledText style={styles.oldPrice} fontWeight='bold'>
							${oldPrice}
						</StyledText>
					)}
				</View>
			</View>

			<View style={styles.footer}>
				<StyledText
					fontWeight='bold'
					style={[styles.footerText, { color: '#A3A3A3' }]}
				>
					{sold} Sold
				</StyledText>

				<StyledText
					fontWeight='bold'
					style={[styles.footerText, { color: '#1668E3' }]}
				>
					<Text>{rightFooter}</Text>
				</StyledText>
			</View>
		</TouchableOpacity>
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
		width: '48%',
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
		right: 0,
		left: 'auto',
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
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
