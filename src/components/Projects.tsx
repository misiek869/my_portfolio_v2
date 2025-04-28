import { useTranslation } from 'react-i18next'
import { projects } from '../data'
import ProjectCard from './ProjectCard'

const Projects = () => {
	const { t } = useTranslation()

	return (
		<section className='mt-20 p-10 bg-white'>
			<h2 className='text-4xl font-bold tracking-wide capitalize'>
				{t('projectsTitle')}
			</h2>
			<div className='mt-10 grid grid-cols-2 xl:grid-cols-3 gap-4'>
				{projects.map(project => {
					const { url, github, title, text, tech } = project
					return (
						<ProjectCard
							url={url}
							github={github}
							title={title}
							text={text}
							tech={tech}
						/>
					)
				})}
			</div>
		</section>
	)
}

export default Projects
