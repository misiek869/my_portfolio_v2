import { useTranslation } from 'react-i18next'
import { projects } from '../data'
import ProjectCard from './ProjectCard'

const Projects = () => {
	const { t } = useTranslation()

	return (
		<section className='mt-20 p-10 bg-white rounded-sm shadow-sm'>
			<h2 className='bg-gradient-to-r to-red-950 via-gray-900 from-purple-950 inline-block text-transparent bg-clip-text text-4xl font-bold tracking-wide capitalize'>
				{t('projectsTitle')}
			</h2>
			<div className='mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4'>
				{projects.map(project => {
					const { url, github, title, text, tech, id } = project
					return (
						<ProjectCard
							url={url}
							github={github}
							title={title}
							text={text}
							tech={tech}
							id={id}
						/>
					)
				})}
			</div>
		</section>
	)
}

export default Projects
