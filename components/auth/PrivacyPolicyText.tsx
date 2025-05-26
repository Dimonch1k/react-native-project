import { StyledText } from '../ui/text/Text'

interface PrivacyPolicyTextProps {
	position?: 'absolute' | 'relative'
	bottom?: number
}

export default function PrivacyPolicyText({
	position = 'relative',
	bottom = 0,
}: PrivacyPolicyTextProps) {
	return (
		<StyledText
			fontSize={14}
			fontWeight='400'
			textAlign='center'
			style={{ position, bottom }}
		>
			By registering, you agree to the{' '}
			<StyledText fontWeight='bold'>Terms of Service</StyledText>,{' '}
			<StyledText fontWeight='bold'>Privacy Policy</StyledText> and{' '}
			<StyledText fontWeight='bold'>Cookie Policy</StyledText>.
		</StyledText>
	)
}
