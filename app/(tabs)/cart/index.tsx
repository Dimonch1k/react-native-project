import { CartItem } from '@/components/cart/CartItem'
import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { GoBackHeading } from '@/components/ui/heading/GoBackHeading'
import { StyledText } from '@/components/ui/text/Text'

import { useCartStore } from '@/stores/cart.store'
import { Ionicons } from '@expo/vector-icons'

import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'

export default function CartScreen() {
	const {
		items,
		selectAll,
		toggleSelectAll,
		toggleItemSelection,
		updateQuantity,
		removeItem,
		getSelectedTotalPrice,
		getSelectedItemsCount,
		hydrate,
	} = useCartStore()

	useEffect(() => {
		hydrate()
	}, [])

	const selectedTotal = getSelectedTotalPrice()
	const selectedCount = getSelectedItemsCount()

	return (
		<ThemedSafeAreaView>
			<GoBackHeading title='Cart' />

			{/* Header - Select All */}
			<View style={styles.header}>
				<TouchableOpacity
					style={styles.selectAllContainer}
					onPress={toggleSelectAll}
				>
					<View
						style={[
							styles.checkbox,
							{ backgroundColor: selectAll ? '#1668E3' : 'transparent' },
						]}
					>
						{selectAll && <Ionicons name='checkmark' size={18} color='#fff' />}
					</View>
					<StyledText fontWeight='bold' style={styles.selectAllText}>
						Choose All
					</StyledText>
				</TouchableOpacity>
			</View>

			{/* Cart Items */}
			<ScrollView style={styles.itemsList} showsVerticalScrollIndicator={false}>
				{items.map(item => (
					<CartItem
						key={item.id}
						item={item}
						onToggleSelect={toggleItemSelection}
						onUpdateQuantity={updateQuantity}
						onRemove={removeItem}
					/>
				))}
			</ScrollView>

			{/* Footer - Total and Checkout */}
			{items.length > 0 && (
				<View style={styles.footer}>
					<View style={styles.totalContainer}>
						<StyledText fontWeight='medium' style={styles.totalLabel}>
							Total ({selectedCount} items):
						</StyledText>
						<StyledText fontWeight='bold' style={styles.totalPrice}>
							${selectedTotal.toFixed(2)}
						</StyledText>
					</View>
					<TouchableOpacity
						style={[
							styles.checkoutButton,
							{ opacity: selectedCount > 0 ? 1 : 0.5 },
						]}
						disabled={selectedCount === 0}
					>
						<StyledText fontWeight='bold' style={styles.checkoutText}>
							Checkout
						</StyledText>
					</TouchableOpacity>
				</View>
			)}

			{/* Empty Cart */}
			{items.length === 0 && (
				<View style={styles.emptyContainer}>
					<StyledText fontWeight='medium' style={styles.emptyText}>
						Your cart is empty
					</StyledText>
				</View>
			)}
		</ThemedSafeAreaView>
	)
}

const styles = StyleSheet.create({
	header: {
		marginBottom: 10,
	},
	selectAllContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	selectAllText: {
		color: 'white',
		fontSize: 12,
	},
	itemsList: {
		flex: 1,
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
