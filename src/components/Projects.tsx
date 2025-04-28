import { useTranslation } from 'react-i18next'

const Projects = () => {
	const { t } = useTranslation()

	return (
		<section className='mt-20 p-10 bg-white'>
			<h2 className='text-4xl font-bold tracking-wide capitalize'>
				{t('projectsTitle')}
			</h2>
			<div className='mt-10 grid grid-cols-2 lg:grid-cols-3'></div>
		</section>
	)
}

export default Projects
