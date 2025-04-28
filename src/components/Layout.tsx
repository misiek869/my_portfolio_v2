import { Outlet } from 'react-router-dom'
import SwitchLanguageButton from './LanguageSwitchBtn'

const Layout = () => {
	return (
		<main className='max-w-[90vw] xl:max-w-[70vw] mx-auto'>
			<div className='fixed top-4 right-4'>
				<SwitchLanguageButton />
			</div>
			<div className='pt-20'>
				<Outlet /> {/* Tutaj będzie renderowana zawartość */}
			</div>
		</main>
	)
}

export default Layout
