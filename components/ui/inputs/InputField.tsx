import { useColor } from '@/hooks/useColor'
import { useThemeStore } from '@/stores/theme.store'
import React from 'react'
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'

interface InputFieldProps extends TextInputProps {
	placeholder?: string
}

export const InputField: React.FC<InputFieldProps> = ({
	placeholder = '...',
	...props
}) => {
	const { textColor } = useColor()
	const isLight = useThemeStore(state => state.isLight)

	const placeholderColor = isLight ? '#666666' : '#AAAAAA'

	return (
		<View style={[styles.inputWrapper, { borderColor: '#666666' }]}>
			<TextInput
				style={[styles.input, { color: textColor }]}
				placeholder={placeholder}
				placeholderTextColor={placeholderColor}
				{...props}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	inputWrapper: {
		paddingHorizontal: 20,
		paddingVertical: 6,
		borderRadius: 100,
		borderWidth: 0.5,
		justifyContent: 'center',
		width: '100%',
	},
	input: {
		fontSize: 16,
		fontFamily: 'Inter',
		fontWeight: '400',
	},
})
