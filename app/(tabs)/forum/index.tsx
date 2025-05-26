import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { Heading }            from '@/components/ui/heading/Heading'

export default function ForumsScreen ()
{
  return (
    <ThemedSafeAreaView>
      <Heading title={ 'Forum' } underline/>
    </ThemedSafeAreaView>
  )
}
