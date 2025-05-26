import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { Heading }            from '@/components/ui/heading/Heading'
import { useColor } from '@/hooks/useColor'

import Ionicons from '@expo/vector-icons/Ionicons'
import { Link } from 'expo-router'
import React    from 'react'

export default function EventsScreen ()
{
  const { textColor } = useColor()

  const buttons = () => (
    <>
      <Link
        href={ '/favorite' }>
        <Ionicons name="heart-outline" size={24} color={ textColor }/>
      </Link>
      <Link
        href={ '/cart' }>
        <Ionicons name="bag-handle-outline" size={24} color={ textColor }/>
      </Link>
    </>
  )

  return (
    <ThemedSafeAreaView>
      <Heading title="Event" rightChildren={ buttons() } underline/>
    </ThemedSafeAreaView>
  )
}