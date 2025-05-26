import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { GoBackHeading }      from '@/components/ui/heading/GoBackHeading'
import React                  from 'react'

export default function CartScreen ()
{
  return (
    <ThemedSafeAreaView>
      <GoBackHeading title="Cart"/>
    </ThemedSafeAreaView>
  )
}
