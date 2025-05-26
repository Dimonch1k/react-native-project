import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { Heading }            from '@/components/ui/heading/Heading'
import { useColor }           from '@/hooks/useColor'
import Ionicons               from '@expo/vector-icons/Ionicons'

import { Link } from 'expo-router'
import { View } from 'react-native'

export default function HomeScreen ()
{
  const { textColor } = useColor()

  const buttons = () => (
    <View style={ { flexDirection: 'row', gap: 16 } }>
      <Link
        href={ '/auth' }>
        <Ionicons name="log-in-outline" size={ 24 } color={ textColor }/>
      </Link>
      <Link
        href={ '/auth/register-with-email' }>
        <Ionicons name="person-add-outline" size={ 24 } color={ textColor }/>
      </Link>
    </View>
  )

  return (
    <ThemedSafeAreaView>
      <Heading  title={ 'Home' } underline rightChildren={ buttons() }/>
    </ThemedSafeAreaView>
  )
}
