import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { Heading }            from '@/components/ui/heading/Heading'

export default function StoreScreen ()
{
  return (
    <ThemedSafeAreaView>
      <Heading title={ 'Store' } underline/>
    </ThemedSafeAreaView>
  )
}
