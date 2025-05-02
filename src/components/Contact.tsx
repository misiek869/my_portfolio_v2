import { useTranslation } from 'react-i18next'

const Contact = () => {
	const { t } = useTranslation()
	return (
		<section
			style={{
				background: `
  radial-gradient(circle at 30% -30%, #ee79de 0%, transparent 48%),
  radial-gradient(circle at 70% 150%, #ee79de 0%, #000 48%)
`,
			}}
			className='h-screen mt-20 p-10 rounded-sm flex flex-col justify-center max-w-screen shadow-sm'>
			<h2 className='text-white text-4xl lg:text-6xl 2xl:text-7xl font-bold tracking-wide capitalize mb-10'>
				{t('contactTitle')}
			</h2>
			<h3 className=' text-white text-4xl lg:text-6xl 2xl:text-7xl font-bold tracking-wide mb-6'>
				gawlik.zator@o2.pl
			</h3>
			<h3 className=' text-white text-4xl lg:text-6xl 2xl:text-7xl font-bold tracking-wide '>
				+48 512-374-866
			</h3>
		</section>
	)
}

export default Contact
