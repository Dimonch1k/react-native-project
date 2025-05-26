import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { GoBackHeading }      from '@/components/ui/heading/GoBackHeading'

import React from 'react'

export default function FavoriteScreen ()
{
  return (
    <ThemedSafeAreaView>
      <GoBackHeading title="Favorite"/>
    </ThemedSafeAreaView>
  )
}
