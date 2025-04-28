import { useTranslation } from 'react-i18next'

const About = () => {
	const { t } = useTranslation()

	return (
		<section>
			<h1 className=''>Michał Gawlik</h1>
			<div className=''>
				<p className=''>{t('about')}</p>
			</div>
		</section>
	)
}

export default About
