import AppleIcon from '@/assets/images/light/apple-icon-light.png'
import FacebookIcon from '@/assets/images/light/facebook-icon-light.png'
import GmailIcon from '@/assets/images/light/gmail-icon-light.png'
import GoogleIcon from '@/assets/images/light/google-icon-light.png'

export const loginButtons = [
	{
		icon: FacebookIcon,
		title: 'Facebook',
		href: '/',
		backgroundColor: '#014BBA',
	},
	{ icon: GoogleIcon, title: 'Google', href: '/', backgroundColor: '#FF3A46' },
	{
		icon: GmailIcon,
		title: 'Email',
		href: '/(tabs)/auth/login-with-email',
		backgroundColor: '#7BAFFF',
	},
	{ icon: AppleIcon, title: 'Apple', href: '/', backgroundColor: '#22252A' },
]
