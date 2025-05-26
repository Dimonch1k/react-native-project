import { create }     from 'zustand'
import AsyncStorage   from '@react-native-async-storage/async-storage'
import { Appearance } from 'react-native'

type ThemeType = 'light' | 'dark'

interface ThemeState
{
  theme: ThemeType
  isLight: boolean
  setTheme: ( theme: ThemeType ) => Promise<void>
  toggleTheme: () => Promise<void>
  setSystemTheme: () => Promise<void>
  hydrate: () => Promise<void>
}

export const useThemeStore = create<ThemeState>(
  ( set, get ) => (
    {
      // Default values must always be defined
      theme: 'light',
      isLight: true,

      setTheme: async ( theme ) =>
      {
        await AsyncStorage.setItem( 'theme', theme )
        set( { theme, isLight: theme === 'light' } )
      },

      toggleTheme: async () =>
      {
        const newTheme = get().theme === 'light' ? 'dark' : 'light'
        await get().setTheme( newTheme )
      },

      setSystemTheme: async () =>
      {
        const systemTheme = Appearance.getColorScheme() ?? 'light'
        await get().setTheme( systemTheme )
      },

      hydrate: async () =>
      {
        const stored = await AsyncStorage.getItem( 'theme' )
        const theme = stored === 'light' || stored === 'dark'
                      ? stored
                      : Appearance.getColorScheme() ?? 'light'
        set( { theme, isLight: theme === 'light' } )
      }
    }
  )
)
