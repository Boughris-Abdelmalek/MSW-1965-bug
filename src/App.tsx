import CssBaseline from "@mui/material/CssBaseline"
import { FC, Suspense, memo } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./page/About"
import Contact from "./page/Contact"
import Home from "./page/Home"

const App: FC = memo(() => (
	<Suspense fallback="Loading" data-testid="route">
		<CssBaseline />
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	</Suspense>
))

//In the case of React.memo the react component is not stored directly in a variable, but instead is an anonymous function inside the React.memo call. Therefore the displayName cannot be inferred.

App.displayName = "App"
export default App
