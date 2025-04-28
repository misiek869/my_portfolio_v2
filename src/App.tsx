import About from './components/About'
import SwitchLanguageButton from './components/LanguageSwitchBtn'

function App() {
	return (
		<>
			<div className='fixed top-4 right-4'>
				<SwitchLanguageButton />
			</div>
			<div className='p-20'>
				{/* <div className='p-20 flex flex-col items-start justify-start'> */}
				<About />
			</div>
		</>
	)
}

export default App
