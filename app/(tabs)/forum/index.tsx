import { forumData } from '@/components/forum/forum.data'
import { ForumButton } from '@/components/forum/ForumButton'
import { ForumCard } from '@/components/forum/ForumCard'
import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { FilterButtons } from '@/components/ui/buttons/FilterButton'
import { Heading } from '@/components/ui/heading/Heading'
import { useColor } from '@/hooks/useColor'
import { useThemeStore } from '@/stores/theme.store'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { ScrollView, View } from 'react-native'

export default function ForumsScreen() {
	const { textColor } = useColor()
	const isLight = useThemeStore(state => state.isLight)

	const filters = [
		'All',
		'Information',
		'Education',
		'Opportunity',
		'Business',
		'Member Discussion',
	]

	const headingButtons = () => (
		<>
			<Link href={'/'}>
				<Ionicons name='search' size={24} color={textColor} />
			</Link>
			<Link href={'/'}>
				<Ionicons name='chatbox-ellipses-outline' size={24} color={textColor} />
			</Link>
		</>
	)

	const forumButtons = () => (
		<View style={{ flexDirection: 'row', gap: 8 }}>
			<ForumButton
				icon='pencil'
				iconSize={16}
				primaryColor='#FF3A46'
				borderColor='#FF9399'
				title='Add Discussion'
				backgroundColor={isLight ? '#FFEBEC' : '#22252A'}
			/>
			<ForumButton
				icon='chevron-forward-outline'
				iconSize={16}
				primaryColor='#1668E3'
				borderColor='#7BAEFD'
				title='Join Member'
				backgroundColor={isLight ? '#E9F1FE' : '#22252A'}
			/>
		</View>
	)

	return (
		<ThemedSafeAreaView>
			<Heading title='Forum' rightChildren={headingButtons()} underline />

			{forumButtons()}

			<FilterButtons filters={filters} />

			<ScrollView
				style={{
					marginTop: 16,
					paddingVertical: 8,
					paddingBottom: 16,
					paddingHorizontal: 2,
				}}
				showsVerticalScrollIndicator={false}
			>
				<View style={{ flexDirection: 'column', gap: 32 }}>
					{forumData.map((item, index) => (
						<ForumCard key={index} {...item} />
					))}
				</View>
			</ScrollView>
		</ThemedSafeAreaView>
	)
}
