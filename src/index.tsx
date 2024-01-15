import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { worker } from "./mocks/browser"
import reportWebVitals from "./reportWebVitals"
import { setupStore } from "./store/store"

if (process.env.REACT_APP_USE_MOCK === "true") {
	worker.start({
		onUnhandledRequest: "bypass", // Non mapped request, we'll simply ignore
	})
}

const store = setupStore()

const root = createRoot(document.getElementById("root") as HTMLElement)
root.render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
