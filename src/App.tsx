import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails'

import Layout from './components/Layout'
import Interests from './components/Interests'
import Footer from './components/Footer'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route
						index
						element={
							<>
								<About />
								<Projects />
								<Interests />
								{/* <Footer /> */}
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
