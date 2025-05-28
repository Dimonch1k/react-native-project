import { StyledText } from '../ui/text/Text'

interface PrivacyPolicyTextProps {
	position?: 'absolute' | 'relative'
	bottom?: number
}

export function PrivacyPolicyText({
	position = 'relative',
	bottom = 0,
}: PrivacyPolicyTextProps) {
	return (
		<StyledText
			fontSize={14}
			fontWeight='400'
			textAlign='center'
			style={{ position, bottom, color: '#757678' }}
		>
			By registering, you agree to the{' '}
			<StyledText fontWeight='bold' style={{ color: '#757678' }}>
				Terms of Service
			</StyledText>
			,{' '}
			<StyledText fontWeight='bold' style={{ color: '#757678' }}>
				Privacy Policy
			</StyledText>{' '}
			and{' '}
			<StyledText fontWeight='bold' style={{ color: '#757678' }}>
				Cookie Policy
			</StyledText>
			.
		</StyledText>
	)
}
