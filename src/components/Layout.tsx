import { Outlet } from 'react-router-dom'
import SwitchLanguageButton from './LanguageSwitchBtn'
import Footer from './Footer'

const Layout = () => {
	return (
		<div className='relative min-h-screen overflow-hidden'>
			<main className='max-w-[95vw] lg:max-w-[75vw] xl:max-w-[55vw] mx-auto'>
				<div className='fixed top-4 right-4'>
					<SwitchLanguageButton />
				</div>
				<div className='py-20 '>
					<Outlet />
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default Layout
