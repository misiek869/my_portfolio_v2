import { useParams } from 'react-router-dom'
import { projects } from '../data'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaArrowLeft } from 'react-icons/fa'

import Footer from './Footer'

const ProjectDetails = () => {
	const { t, i18n } = useTranslation()
	const { projectId } = useParams()

	const project = projects.find(p => p.id === projectId)

	console.log(project.text)

	if (!project) {
		return (
			<div className='text-center py-20'>
				<h2 className='text-2xl bg-gradient-to-r from-red-950 via-gray-900 to-purple-950 inline-block text-transparent bg-clip-text font-bold'>
					Projekt nie znaleziony
				</h2>
				<Link to='/' className='mt-4 inline-block text-blue-500'>
					← Powrót do strony głównej
				</Link>
			</div>
		)
	}

	return (
		<div className='flex'>
			<Link
				to='/'
				className='absolute top-4 left-4 text-gray-500 hover:text-gray-800 duration-300 flex items-center '>
				<FaArrowLeft className='mr-2' /> Powrót do strony głównej
			</Link>
			<div className='max-w-[90vw] lg:max-w-[70vw] mx-auto'>
				<h1 className='text-5xl bg-gradient-to-r from-gray-800 via-purple-950 to-purple-950 inline-block text-transparent bg-clip-text  font-bold tracking-wide capitalize pb-2'>
					{project.title}
				</h1>

				<div className='flex justify-center gap-x-8 mt-14'>
					{project.tech.map((IconComponent, index) => (
						<div key={index} className='text-6xl text-gray-900 '>
							<IconComponent />
						</div>
					))}
				</div>

				<p className='text-xl leading-loose mt-16 text-gray-900'>
					{project.text[i18n.language as keyof typeof text]}
				</p>
			</div>
			<Footer />
		</div>
	)
}

export default ProjectDetails
