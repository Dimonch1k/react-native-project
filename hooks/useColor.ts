import { COLORS }        from '@/constants/colors.constant'
import { useThemeStore } from '@/stores/theme.store'

export const useColor = () =>
{
  const isLight = useThemeStore( ( state ) => state.isLight )

  const textColor = isLight ? COLORS.light.text : COLORS.dark.text

  const backgroundColor = isLight ? COLORS.light.background : COLORS.dark.background

  const backgroundTab = isLight ? COLORS.light.backgroundTab : COLORS.dark.backgroundTab

  const iconColor = isLight ? COLORS.light.icon : COLORS.dark.icon

  const tabIconDefault = isLight
                         ? COLORS.light.tabIconDefault
                         : COLORS.dark.tabIconDefault

  const tabIconSelected = isLight
                          ? COLORS.light.tabIconSelected
                          : COLORS.dark.tabIconSelected

  const statusBar = isLight ? COLORS.light.statusBar : COLORS.dark.statusBar

  return {
    textColor,
    backgroundColor,
    backgroundTab,
    iconColor,
    tabIconDefault,
    tabIconSelected,
    statusBar
  }
}
