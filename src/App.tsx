import About from './components/About'
import SwitchLanguageButton from './components/LanguageSwitchBtn'
import Projects from './components/Projects'

function App() {
	return (
		<main className='max-w-[90vw] xl:max-w-[70vw] mx-auto'>
			<div className='fixed top-4 right-4'>
				<SwitchLanguageButton />
			</div>
			<div className='pt-20'>
				{/* <div className='p-20 flex flex-col items-start justify-start'> */}
				<About />
				<Projects />
			</div>
		</main>
	)
}

export default App
