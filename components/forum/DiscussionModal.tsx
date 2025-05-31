// components/DiscussionModal.tsx

import { useColor } from '@/hooks/useColor'
import { useThemeStore } from '@/stores/theme.store'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import {
	Modal,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'
import { Button } from '../ui/buttons/Button'
import { ForumButton } from './ForumButton'

export function DiscussionModal() {
	const [visible, setVisible] = useState(false)

	const openModal = () => setVisible(true)
	const closeModal = () => setVisible(false)

	const onSend = () => {}

	const isLight = useThemeStore(state => state.isLight)
	const { textColor, backgroundTab, backgroundColor } = useColor()

	return (
		<>
			<ForumButton
				icon='pencil'
				iconSize={16}
				primaryColor='#FF3A46'
				borderColor='#FF9399'
				title='Add Discussion'
				backgroundColor={isLight ? '#FFEBEC' : '#22252A'}
				onPress={openModal}
			/>

			<Modal visible={visible} animationType='slide'>
				<View style={[styles.modalContainer, { backgroundColor }]}>
					{/* Heading */}
					<View style={styles.heading}>
						<TouchableOpacity onPress={closeModal}>
							<Ionicons name='close-outline' size={40} color={textColor} />
						</TouchableOpacity>

						<Button
							title='Send'
							color='#fff'
							backgroundColor='#1668E3'
							width='40%'
							onPress={onSend}
						/>
					</View>

					<View style={[styles.divider, { marginVertical: 18 }]}></View>

					<TextInput
						style={[styles.textArea, { color: textColor }]}
						placeholder='Write something...'
						placeholderTextColor='#A3A3A3'
						multiline={true}
						numberOfLines={4}
					/>
				</View>
			</Modal>
		</>
	)
}

const styles = StyleSheet.create({
	modalOverlay: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalContainer: {
		width: '100%',
		height: '100%',
		padding: 20,
		position: 'relative',
	},
	heading: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	divider: {
		width: '100%',
		height: 1,
		backgroundColor: '#454649',
	},
	textArea: {
		height: '50%',
		textAlignVertical: 'top',
		fontSize: 14,
	},
})
