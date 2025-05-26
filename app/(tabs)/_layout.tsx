import { Tabs } from 'expo-router'
import React from 'react'

import { COLORS } from '@/constants/colors.constant'
import { useTheme } from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'

export default function TabLayout() {
	const { theme } = useTheme()
	const tabMenuColor =
		theme === 'light' ? COLORS.light.backgroundTab : COLORS.dark.backgroundTab

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: '#7BAFFF',
				headerShown: false,
				tabBarStyle: {
					backgroundColor: tabMenuColor,
					borderTopWidth: 0,
					elevation: 8,
					shadowColor: '#000',
					shadowOffset: { width: 0, height: -4 },
					shadowOpacity: 0.1,
					shadowRadius: 6,
				},
				headerShadowVisible: true,
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='home' size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='events/index'
				options={{
					title: 'Events',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='calendar' size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='store/index'
				options={{
					title: 'Store',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='storefront' size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='forums/index'
				options={{
					title: 'Forums',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='chatbubbles' size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='profile/index'
				options={{
					title: 'Profile',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='person' size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='auth/login/index'
				options={{
					href: null,
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name='auth/register/index'
				options={{
					href: null,
					headerShown: false,
				}}
			/>
		</Tabs>
	)
}
