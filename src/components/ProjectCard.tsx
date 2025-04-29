import { FaGithubSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { IconType } from 'react-icons'
import { Link } from 'react-router-dom'

type ProjectCardProps = {
	url?: string
	github: string
	title: string
	text: { en: string; pl: string }
	tech: IconType[]
	id: string
}

const ProjectCard = ({
	url,
	github,
	title,
	text,
	tech,
	id,
}: ProjectCardProps) => {
	const { t } = useTranslation()

	return (
		<article className='flex flex-col items-center border p-4 shadow-md hover:shadow-lg rounded-sm'>
			<h3 className='bg-gradient-to-r from-red-950 via-gray-900 to-purple-900 inline-block text-transparent bg-clip-text text-2xl font-semibold capitalize tracking-wide text-center'>
				{title}
			</h3>
			<div className='flex gap-x-6 justify-center mt-6'>
				{url ? (
					<a target='_blank' href={url} className=''>
						<TbWorldWww className='h-8 w-8 text-sky-950 hover:text-black duration-300' />
					</a>
				) : (
					''
				)}

				<a target='_blank' href={github} className=''>
					<FaGithubSquare className='h-8 w-8 text-sky-950 hover:text-black duration-300' />
				</a>
			</div>

			<Link
				to={`/projects/${id}`}
				className='inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none mt-6'>
				{t('moreBtn')}
			</Link>
		</article>
	)
}

export default ProjectCard
