import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { ThemedText }         from '@/components/theme/ThemedText'
import { Heading }            from '@/components/ui/heading/Heading'
import { StyledText }         from '@/components/ui/text/Text'
import { useColor }           from '@/hooks/useColor'
import { useThemeStore }      from '@/stores/theme.store'

import React                from 'react'
import { TouchableOpacity } from 'react-native'

export default function ProfileScreen ()
{
  const toggleTheme = useThemeStore(state => state.toggleTheme)
  const { textColor } = useColor()

  return (
    <ThemedSafeAreaView>
      <Heading title="Profile" underline/>
      <TouchableOpacity
        onPress={ toggleTheme }
        style={ {
          marginTop: 10,
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderWidth: 2,
          borderColor: textColor
        } }
      >
        <StyledText textAlign="center">
          <ThemedText>Toggle Theme</ThemedText>
        </StyledText>
      </TouchableOpacity>
    </ThemedSafeAreaView>
  )
}
