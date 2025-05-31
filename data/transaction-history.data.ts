export const transactionFeatures = [
	{ label: 'All', color: '#1668E3', icon: '📚' },
	{ label: 'Module', color: '#10B981', icon: '📖' },
	{ label: 'Course', color: '#F59E0B', icon: '🎓' },
	{ label: 'Challenge', color: '#EF4444', icon: '🏆' },
	{ label: 'Bootcamp', color: '#8B5CF6', icon: '💻' },
]

export interface TransactionHistoryItem {
	id: string
	title: string
	subtitle: string
	date: string
	image: string
	icon: string
}

export const transactionHistoryData: TransactionHistoryItem[] = [
	{
		id: '1',
		title: 'Mastering the Entrepreneur Mindset',
		subtitle: '12 chapters · 22 min',
		date: 'Feb 22, 2024',
		image:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=105&h=91&fit=crop&crop=center',
		icon: '📚',
	},
	{
		id: '2',
		title: 'Complete React Native Bootcamp',
		subtitle: '18 chapters · 3h 12min',
		date: 'Mar 10, 2024',
		image:
			'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=105&h=91&fit=crop&crop=center',
		icon: '📖',
	},
	{
		id: '3',
		title: 'Challenge: Build Your First App',
		subtitle: '8 challenges · 45min',
		date: 'Apr 1, 2024',
		image:
			'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=105&h=91&fit=crop&crop=center',
		icon: '🎓',
	},
	{
		id: '4',
		title: 'Course: UI/UX Essentials',
		subtitle: '10 chapters · 1h 30min',
		date: 'Apr 20, 2024',
		image:
			'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=105&h=91&fit=crop&crop=center',
		icon: '🏆',
	},
	{
		id: '5',
		title: 'Business Growth Module',
		subtitle: '5 chapters · 1h',
		date: 'May 3, 2024',
		image:
			'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=105&h=91&fit=crop&crop=center',
		icon: '💻',
	},
]
