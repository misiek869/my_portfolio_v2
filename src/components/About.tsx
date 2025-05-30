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
			className='mt-20 px-4 py-6 md:p-10 bg-[#DDDDDD] rounded-sm shadow-sm'>
			<h2 className='bg-gradient-to-r from-gray-950  to-purple-950 inline-block text-transparent bg-clip-text text-3xl md:text-4xl font-bold tracking-wide capitalize 3xl:text-5xl'>
				{t('aboutTitle')}
			</h2>
			<div className='mt-10'>
				<p className='text-lg sm:text-xl tracking-wide leading-loose md:text-2xl 3xl:text-3xl 3xl:leading-[3rem] md:leading-relaxed'>
					{t('about_01')}
				</p>
				<p className='text-lg sm:text-xl tracking-wide leading-loose md:text-2xl 3xl:text-3xl 3xl:leading-[3rem] mt-6 md:leading-relaxed'>
					{t('about_02')}
				</p>
			</div>
		</motion.section>
	)
}

export default About
