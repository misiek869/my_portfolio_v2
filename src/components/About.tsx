import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const About = () => {
	const { t } = useTranslation()

	return (
		<motion.section
			initial={{ x: '150%' }}
			animate={{ x: 0 }}
			exit={{ x: '150%' }}
			transition={{ duration: 0.3, delay: 0.2 }}
			className='mt-20 p-10 bg-[#DDDDDD] rounded-sm shadow-sm'>
			<h2 className='bg-gradient-to-r to-red-950 via-gray-900 from-purple-950 inline-block text-transparent bg-clip-text text-4xl font-bold tracking-wide capitalize'>
				{t('aboutTitle')}
			</h2>
			<div className='mt-10'>
				<p className='text-xl tracking-wide leading-loose md:text-2xl md:leading-relaxed'>
					{t('about_01')}
				</p>
				<p className='text-xl tracking-wide leading-loose md:text-2xl mt-6 md:leading-relaxed'>
					{t('about_02')}
				</p>
			</div>
		</motion.section>
	)
}

export default About
