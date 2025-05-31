import { DiscussionModal } from '@/components/forum/DiscussionModal'
import { ForumButton } from '@/components/forum/ForumButton'
import { ForumCard } from '@/components/forum/ForumCard'
import { ThemedSafeAreaView } from '@/components/theme/ThemedSafeAreaView'
import { FilterButtons } from '@/components/ui/buttons/FilterButton'
import { Heading } from '@/components/ui/heading/Heading'
import { forumData } from '@/data/forum.data'
import { useColor } from '@/hooks/useColor'
import { useThemeStore } from '@/stores/theme.store'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { ScrollView, StyleSheet, View } from 'react-native'

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
			<DiscussionModal />

			<ForumButton
				icon='chevron-forward-outline'
				iconSize={16}
				primaryColor='#1668E3'
				borderColor='#7BAEFD'
				title='Joined'
				backgroundColor={isLight ? '#E9F1FE' : '#22252A'}
			/>
		</View>
	)

	return (
		<ThemedSafeAreaView>
			<Heading title='Forum' rightChildren={headingButtons()} underline />

			{forumButtons()}

			<FilterButtons filters={filters} />

			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flexDirection: 'column', gap: 32, paddingBottom: 32 }}>
					<View style={styles.listContainer}>
						{forumData.map((item, index) => (
							<ForumCard key={index} {...item} />
						))}
					</View>
				</View>
			</ScrollView>
		</ThemedSafeAreaView>
	)
}

const styles = StyleSheet.create({
	listContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		rowGap: 8,
		columnGap: 8,
		paddingHorizontal: 2,
		paddingVertical: 2,
	},
})
