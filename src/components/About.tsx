import { useTranslation } from 'react-i18next'

const About = () => {
	const { t } = useTranslation()

	return (
		<section className=''>
			<h1 className='text-6xl font-bold tracking-wide'>Michał Gawlik</h1>
			<div className='mt-10'>
				<p className='text-xl'>{t('about_01')}</p>
				<p className='text-xl mt-6'>{t('about_02')}</p>
			</div>
		</section>
	)
}

export default About
