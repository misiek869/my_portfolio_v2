import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails'
import Layout from './components/Layout'
import Contact from './components/Contact'
import About from './components/About'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route
						index
						element={
							<>
								<Hero />
								<Projects />
								<About />
								<Contact />
							</>
						}
					/>
					<Route path='projects/:projectId' element={<ProjectDetails />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
