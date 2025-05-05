import { FaSquareGithub, FaLinkedin } from 'react-icons/fa6'
// import michalImage from '../assets/images/Zdjęcie_michal.jpg'
// import michalImageTransparent from '../assets/images/michal.png'
import { motion } from 'framer-motion'

const Hero = () => {
	return (
		<motion.section
			initial={{ x: '150%' }}
			animate={{ x: 0 }}
			exit={{ x: '150%' }}
			transition={{ duration: 0.3 }}
			className='max-w-screen'>
			{/* <h1 className='bg-gradient-to-r from-purple-950 via-gray-900 to-gray-950 inline-block text-transparent bg-clip-text text-6xl font-extrabold tracking-wide'>
				Michał Gawlik
			</h1>
			<div className='mt-10'>
				<p className='text-xl tracking-wide leading-loose md:text-2xl md:leading-relaxed'>
					{t('about_01')}
				</p>
				<p className='text-xl tracking-wide leading-loose md:text-2xl mt-6 md:leading-relaxed'>
					{t('about_02')}
				</p>
			</div> */}

			<div
				className='flex p-4 md:p-10 h-[50vh] xl:h-[80vh] rounded-sm'
				style={{
					background: `
  radial-gradient(circle at 30% -30%, #131213 0%, transparent 48%),
  radial-gradient(circle at 90% 150%, #ee79de 0%, #000 48%)
`,
				}}>
				<div className='flex flex-col items-start justify-center'>
					<h1 className='text-slate-100 text-4xl lg:text-5xl xl:text-6xl  3xl:text-8xl font-extrabold tracking-wider mb-4'>
						Michał Gawlik
					</h1>
					<h3 className='text-slate-100 text-2xl xl:text-3xl 3xl:text-5xl'>
						Front End Developer
					</h3>
					<div className='flex gap-x-6 justify-center mt-6'>
						<a target='_blank' href={'https://www.linkedin.com/in/m-gawlik/'}>
							<FaLinkedin className='text-slate-100 w-8 h-8 md:w-10 md:h-10 3xl:w-12 3xl:h-12 hover:text-slate-200 hover:animate-pulse hover:scale-110 duration-300' />
						</a>
						<a target='_blank' href={'https://github.com/misiek869'}>
							<FaSquareGithub className='text-slate-100 w-8 h-8 md:w-10 md:h-10 3xl:w-12 3xl:h-12 hover:text-slate-200 hover:animate-pulse hover:scale-110 duration-300' />
						</a>
					</div>
				</div>
				{/* <img src={michalImageTransparent} alt='' className='rounded-sm' /> */}
			</div>
		</motion.section>
	)
}

export default Hero
