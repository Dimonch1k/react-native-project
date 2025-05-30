import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'

export interface CartItem {
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

interface CartState {
	items: CartItem[]
	selectAll: boolean

	// Actions
	addItem: (item: Omit<CartItem, 'quantity' | 'selected'>) => Promise<void>
	removeItem: (id: string) => Promise<void>
	updateQuantity: (id: string, quantity: number) => Promise<void>
	toggleItemSelection: (id: string) => Promise<void>
	toggleSelectAll: () => Promise<void>
	clearCart: () => Promise<void>

	// Getters
	getSelectedItems: () => CartItem[]
	getTotalPrice: () => number
	getSelectedTotalPrice: () => number
	getItemsCount: () => number
	getSelectedItemsCount: () => number

	// Persistence
	hydrate: () => Promise<void>
}

const CART_STORAGE_KEY = 'cart_items'

export const useCartStore = create<CartState>((set, get) => ({
	items: [],
	selectAll: false,

	addItem: async newItem => {
		const currentItems = get().items
		const existingItemIndex = currentItems.findIndex(
			item => item.id === newItem.id
		)

		let updatedItems: CartItem[]

		if (existingItemIndex >= 0) {
			// Item exists, increment quantity
			updatedItems = currentItems.map((item, index) =>
				index === existingItemIndex
					? { ...item, quantity: item.quantity + 1 }
					: item
			)
		} else {
			// New item, add to cart
			updatedItems = [
				...currentItems,
				{ ...newItem, quantity: 1, selected: true },
			]
		}

		await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedItems))
		set({ items: updatedItems })

		// Update selectAll state
		const allSelected = updatedItems.every(item => item.selected)
		set({ selectAll: allSelected })
	},

	removeItem: async id => {
		const updatedItems = get().items.filter(item => item.id !== id)
		await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedItems))
		set({ items: updatedItems })

		// Update selectAll state
		const allSelected =
			updatedItems.length > 0 && updatedItems.every(item => item.selected)
		set({ selectAll: allSelected })
	},

	updateQuantity: async (id, quantity) => {
		if (quantity <= 0) {
			await get().removeItem(id)
			return
		}

		const updatedItems = get().items.map(item =>
			item.id === id ? { ...item, quantity } : item
		)

		await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedItems))
		set({ items: updatedItems })
	},

	toggleItemSelection: async id => {
		const updatedItems = get().items.map(item =>
			item.id === id ? { ...item, selected: !item.selected } : item
		)

		await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedItems))
		set({ items: updatedItems })

		// Update selectAll state
		const allSelected =
			updatedItems.length > 0 && updatedItems.every(item => item.selected)
		set({ selectAll: allSelected })
	},

	toggleSelectAll: async () => {
		const newSelectAll = !get().selectAll
		const updatedItems = get().items.map(item => ({
			...item,
			selected: newSelectAll,
		}))

		await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedItems))
		set({ items: updatedItems, selectAll: newSelectAll })
	},

	clearCart: async () => {
		await AsyncStorage.removeItem(CART_STORAGE_KEY)
		set({ items: [], selectAll: false })
	},

	getSelectedItems: () => {
		return get().items.filter(item => item.selected)
	},

	getTotalPrice: () => {
		return get().items.reduce((total, item) => {
			const price = item.isFree ? 0 : item.newPrice
			return total + price * item.quantity
		}, 0)
	},

	getSelectedTotalPrice: () => {
		return get()
			.items.filter(item => item.selected)
			.reduce((total, item) => {
				const price = item.isFree ? 0 : item.newPrice
				return total + price * item.quantity
			}, 0)
	},

	getItemsCount: () => {
		return get().items.reduce((count, item) => count + item.quantity, 0)
	},

	getSelectedItemsCount: () => {
		return get()
			.items.filter(item => item.selected)
			.reduce((count, item) => count + item.quantity, 0)
	},

	hydrate: async () => {
		try {
			const stored = await AsyncStorage.getItem(CART_STORAGE_KEY)
			if (stored) {
				const items: CartItem[] = JSON.parse(stored)
				const allSelected =
					items.length > 0 && items.every(item => item.selected)
				set({ items, selectAll: allSelected })
			}
		} catch (error) {
			console.error('Failed to hydrate cart:', error)
		}
	},
}))
