import { FaGithubSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { IconType } from 'react-icons'

type ProjectCardProps = {
	url?: string
	github: string
	title: string
	text: { en: string; pl: string }
	tech: IconType[]
}

const ProjectCard = ({ url, github, title, text, tech }: ProjectCardProps) => {
	const { t, i18n } = useTranslation()

	return (
		<article className='border p-2 shadow-md hover:shadow-lg'>
			<h3 className='text-xl font-semibold capitalize'>{title}</h3>
			<h4 className='capitalize mt-3'>{t('projectTech')}</h4>
			<div className='flex justify-center gap-3 mt-2'>
				{tech.map((IconComponent, index) => (
					<div key={index} className='text-3xl'>
						<IconComponent />
					</div>
				))}
			</div>
			<p className='p-2 mt-2'>{text[i18n.language as keyof typeof text]}</p>
		</article>
	)
}

export default ProjectCard
