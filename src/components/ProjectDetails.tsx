import { useParams } from 'react-router-dom'
import { projects } from '../data'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Footer from './Footer'

const ProjectDetails = () => {
	const { t, i18n } = useTranslation()
	const { projectId } = useParams()

	const project = projects.find(p => p.id === projectId)

	console.log(project.text)

	if (!project) {
		return (
			<div className='text-center py-20'>
				<h2 className='text-2xl text-gray-900 font-bold'>
					Projekt nie znaleziony
				</h2>
				<Link to='/' className='mt-4 inline-block text-blue-500'>
					← Powrót do strony głównej
				</Link>
			</div>
		)
	}

	return (
		<>
			<div className='max-w-[90vw] lg:max-w-[70vw] mx-auto'>
				<h1 className='text-5xl text-gray-900 font-bold tracking-wide capitalize'>
					{project.title}
				</h1>

				<div className='flex justify-center gap-x-8 mt-20'>
					{project.tech.map((IconComponent, index) => (
						<div key={index} className='text-6xl text-gray-900 '>
							<IconComponent />
						</div>
					))}
				</div>

				<p className='text-xl leading-loose mt-10 text-gray-900'>
					{project.text[i18n.language as keyof typeof text]}
				</p>
			</div>
			<Footer />
		</>
	)
}

export default ProjectDetails
