import { useColor } from '@/hooks/useColor'
import { useThemeStore } from '@/stores/theme.store'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { StyledText } from '../ui/text/Text'

interface ForumCardProps {
	timeAgo: string
	username: string
	userTitle: string
	userImage: string
	message: string
	comments: number
	likes: number
	shares: number
}

export const ForumCard = ({
	timeAgo,
	username,
	userTitle,
	userImage,
	message,
	comments,
	likes,
	shares,
}: ForumCardProps) => {
	const { backgroundTab, textColor } = useColor()
	const isLight = useThemeStore(state => state.isLight)

	return (
		<View
			style={[
				styles.card,
				{ backgroundColor: backgroundTab },
				!isLight && styles.cardDark,
			]}
		>
			{/* Top Row */}
			<View style={styles.topRow}>
				<StyledText style={[styles.timeAgo, { color: textColor }]}>
					{timeAgo}
				</StyledText>
				<View style={styles.topIcons}>
					<Ionicons name='pricetag' size={16} color={'#1668E3'} />
					<Ionicons name='ellipsis-horizontal' size={24} color={textColor} />
				</View>
			</View>

			{/* Message Container */}
			<View
				style={[
					styles.messageBox,
					{ backgroundColor: isLight ? '#EAF2FF' : '#22252A' },
				]}
			>
				<View style={styles.userRow}>
					<Image source={{ uri: userImage }} style={styles.userImage} />

					<View style={{ flexDirection: 'column', gap: 2 }}>
						<View style={styles.nameAndBadge}>
							<StyledText style={[styles.username, { color: textColor }]}>
								{username}
							</StyledText>
						</View>
						<StyledText style={[styles.userTitle, { color: textColor }]}>
							{userTitle}
						</StyledText>
					</View>
				</View>
				<StyledText style={[styles.message, { color: textColor }]}>
					{message}
				</StyledText>
			</View>

			{/* Stats Row */}
			<View style={styles.statsRow}>
				<View style={styles.statItem}>
					<Ionicons name='thumbs-up-outline' size={16} color={textColor} />
					<StyledText style={[styles.statText, { color: textColor }]}>
						{comments}
					</StyledText>
				</View>
				<View style={styles.statItem}>
					<Ionicons
						name='chatbox-ellipses-outline'
						size={16}
						color={textColor}
					/>
					<StyledText style={[styles.statText, { color: textColor }]}>
						{likes}
					</StyledText>
				</View>
				<View style={styles.statItem}>
					<Ionicons name='arrow-redo-outline' size={16} color={textColor} />
					<StyledText style={[styles.statText, { color: textColor }]}>
						{shares}
					</StyledText>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		alignSelf: 'stretch',
		padding: 18,
		borderRadius: 10,
		gap: 16,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 2.22,
		elevation: 3,
	},
	cardDark: {
		borderColor: '#2F2F2F',
		borderWidth: 1,
	},
	topRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	timeAgo: {
		fontSize: 10,
		fontWeight: '500',
	},
	topIcons: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
	},
	iconCircle: {
		width: 14,
		height: 14,
		borderRadius: 7,
		backgroundColor: '#1668E3',
	},
	menuBar: {
		width: 16,
		height: 4,
	},
	messageBox: {
		borderRadius: 8,
		padding: 10,
		gap: 10,
	},
	userRow: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 6,
		flexWrap: 'wrap',
	},
	userImage: {
		width: 28,
		height: 28,
		borderRadius: 100,
		backgroundColor: '#C5DCFF',
	},
	userTitle: {
		fontSize: 8,
		fontWeight: '500',
	},
	nameAndBadge: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
	},
	username: {
		fontSize: 12,
		fontWeight: '700',
	},
	badge: {
		width: 16,
		height: 16,
		borderRadius: 100,
		backgroundColor: '#5599FF',
	},
	message: {
		fontSize: 12,
		fontWeight: '500',
	},
	statsRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	statItem: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
	},
	statText: {
		fontSize: 12,
		fontWeight: '500',
	},
})
