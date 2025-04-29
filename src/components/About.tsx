import { useTranslation } from 'react-i18next'

const About = () => {
	const { t } = useTranslation()

	return (
		<section className=''>
			<h1 className='font-atkinson text-6xl font-extrabold tracking-wide'>
				Michał Gawlik
			</h1>
			<div className='mt-10'>
				<p className='text-xl tracking-wide leading-loose md:text-2xl md:leading-relaxed'>
					{t('about_01')}
				</p>
				<p className='text-xl tracking-wide leading-loose md:text-2xl mt-6 md:leading-relaxed'>
					{t('about_02')}
				</p>
			</div>
		</section>
	)
}

export default About
