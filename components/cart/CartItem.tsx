import { useColor } from '@/hooks/useColor'
import { Ionicons } from '@expo/vector-icons'
import { Alert, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { StyledText } from '../ui/text/Text'

interface CartItemProps {
	item: {
		id: string
		title: string
		newPrice: number
		oldPrice: number
		image: string
		quantity: number
		selected: boolean
		isFree?: boolean
		discount?: number
	}
	onToggleSelect: (id: string) => void
	onUpdateQuantity: (id: string, quantity: number) => void
	onRemove: (id: string) => void
}

export function CartItem({
	item,
	onToggleSelect,
	onUpdateQuantity,
	onRemove,
}: CartItemProps) {
	const { backgroundTab } = useColor()

	const handleRemove = () => {
		Alert.alert(
			'Remove Item',
			'Are you sure you want to remove this item from cart?',
			[
				{ text: 'Cancel', style: 'cancel' },
				{
					text: 'Remove',
					style: 'destructive',
					onPress: () => onRemove(item.id),
				},
			]
		)
	}

	return (
		<View style={[styles.itemCard, { backgroundColor: backgroundTab }]}>
			{/* Checkbox */}
			<TouchableOpacity
				style={styles.checkbox}
				onPress={() => onToggleSelect(item.id)}
			>
				<View
					style={[
						styles.checkbox,
						{ backgroundColor: item.selected ? '#1668E3' : 'transparent' },
					]}
				>
					{item.selected && (
						<Ionicons name='checkmark' size={18} color='#fff' />
					)}
				</View>
			</TouchableOpacity>

			{/* Course Image */}
			<View style={styles.imageContainer}>
				<Image source={{ uri: item.image }} style={styles.courseImage} />
			</View>

			{/* Content */}
			<View style={styles.itemContent}>
				{/* Course Info */}
				<View style={styles.courseInfo}>
					<StyledText
						fontWeight='bold'
						style={styles.courseTitle}
						numberOfLines={2}
					>
						{item.title}
					</StyledText>

					<View style={styles.priceContainer}>
						<StyledText
							fontWeight='bold'
							style={[
								styles.newPrice,
								{ color: item.isFree ? '#1668E3' : '#FF3A46' },
							]}
						>
							{item.isFree ? 'FREE' : `$${item.newPrice.toFixed(1)}`}
						</StyledText>
						{!item.isFree && (
							<StyledText fontWeight='medium' style={styles.oldPrice}>
								${item.oldPrice.toFixed(1)}
							</StyledText>
						)}
					</View>
				</View>

				{/* Controls */}
				<View style={styles.controls}>
					{/* Quantity Controls */}
					<View style={styles.quantityContainer}>
						<TouchableOpacity
							style={[styles.quantityButton, styles.decreaseButton]}
							onPress={() => onUpdateQuantity(item.id, item.quantity - 1)}
						>
							<View style={styles.minusIcon} />
						</TouchableOpacity>

						<StyledText fontWeight='bold' style={styles.quantityText}>
							{item.quantity}
						</StyledText>

						<TouchableOpacity
							style={[styles.quantityButton, styles.increaseButton]}
							onPress={() => onUpdateQuantity(item.id, item.quantity + 1)}
						>
							<View style={styles.plusIconVertical} />
							<View style={styles.plusIconHorizontal} />
						</TouchableOpacity>
					</View>

					{/* Remove Button */}
					<TouchableOpacity style={styles.removeButton} onPress={handleRemove}>
						<Ionicons name='trash-bin' size={18} color='#E12632' />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	itemCard: {
		padding: 10,
		borderRadius: 10,
		marginBottom: 10,
		borderWidth: 1,
		borderColor: '#292C32',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.1,
		shadowRadius: 15,
		elevation: 5,
	},
	checkbox: {
		width: 24,
		height: 24,
		borderRadius: 4,
		borderWidth: 2,
		borderColor: '#1668E3',
		justifyContent: 'center',
		alignItems: 'center',
	},
	checkboxInner: {
		width: 18,
		height: 18,
		borderRadius: 2,
	},
	imageContainer: {
		width: 105,
		height: 91,
	},
	courseImage: {
		width: 105,
		height: 91,
		borderRadius: 10,
		backgroundColor: '#C5DCFF',
	},
	itemContent: {
		flex: 1,
		justifyContent: 'space-between',
		gap: 13,
	},
	courseInfo: {
		gap: 4,
	},
	courseTitle: {
		fontSize: 16,
	},
	priceContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	newPrice: {
		fontSize: 14,
	},
	oldPrice: {
		fontSize: 10,
		color: '#A3A3A3',
		textDecorationLine: 'line-through',
	},
	controls: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	quantityContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	quantityButton: {
		width: 19,
		height: 19,
		borderRadius: 9999,
		justifyContent: 'center',
		alignItems: 'center',
	},
	decreaseButton: {
		backgroundColor: '#8F8F8F',
	},
	increaseButton: {
		backgroundColor: '#1668E3',
	},
	minusIcon: {
		width: 5.94,
		height: 1.65,
		backgroundColor: 'white',
	},
	plusIconVertical: {
		position: 'absolute',
		width: 1.65,
		height: 7.14,
		backgroundColor: 'white',
	},
	plusIconHorizontal: {
		position: 'absolute',
		width: 7.14,
		height: 1.65,
		backgroundColor: 'white',
	},
	quantityText: {
		fontSize: 12,
		textAlign: 'center',
	},
	removeButton: {
		width: 19,
		height: 19,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
	},
	removeIcon: {
		width: 15.04,
		height: 16.23,
		backgroundColor: '#E12632',
	},
	footer: {
		paddingTop: 16,
		borderTopWidth: 1,
		borderTopColor: '#292C32',
		gap: 12,
	},
	totalContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	totalLabel: {
		color: '#A3A3A3',
		fontSize: 14,
	},
	totalPrice: {
		color: '#1668E3',
		fontSize: 18,
	},
	checkoutButton: {
		backgroundColor: '#1668E3',
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 8,
		alignItems: 'center',
	},
	checkoutText: {
		color: 'white',
		fontSize: 16,
	},
	emptyContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	emptyText: {
		color: '#A3A3A3',
		fontSize: 16,
	},
})
