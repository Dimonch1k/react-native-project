import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { useColorScheme } from 'react-native'

// Define the allowed themes
type ThemeType = 'light' | 'dark'

interface ThemeContextProps {
	theme: ThemeType
	toggleTheme: () => void
	setSystemTheme: () => void
}

// Create default context (with placeholder functions)
export const ThemeContext = createContext<ThemeContextProps>({
	theme: 'light',
	toggleTheme: () => {},
	setSystemTheme: () => {},
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const systemColorScheme = useColorScheme()
	const [theme, setTheme] = useState<ThemeType>(systemColorScheme ?? 'light')

	// Load theme from storage on mount
	useEffect(() => {
		const loadTheme = async () => {
			try {
				const storedTheme = await AsyncStorage.getItem('theme')
				if (storedTheme === 'light' || storedTheme === 'dark') {
					setTheme(storedTheme)
				}
			} catch (error) {
				console.error('Error loading theme from storage:', error)
			}
		}
		loadTheme()
	}, [])

	// Toggle between light and dark
	const toggleTheme = async () => {
		const newTheme: ThemeType = theme === 'light' ? 'dark' : 'light'
		setTheme(newTheme)
		await AsyncStorage.setItem('theme', newTheme)
	}

	// Revert to system theme
	const setSystemTheme = async () => {
		const systemTheme: ThemeType = systemColorScheme ?? 'light'
		setTheme(systemTheme)
		await AsyncStorage.setItem('theme', systemTheme)
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme, setSystemTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
