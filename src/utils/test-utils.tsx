import CssBaseline from "@mui/material/CssBaseline"
import type { PreloadedState } from "@reduxjs/toolkit"
import { RenderOptions, render } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import React, { PropsWithChildren, Suspense } from "react"
import { Provider } from "react-redux"
import { MemoryRouter, useLocation } from "react-router-dom"
import { AppStore, RootState, setupStore } from "../store/store"

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
	preloadedState?: PreloadedState<RootState>
	store?: AppStore
	route?: string
	excludeAlert?: boolean
}

interface WrapperProps {
	store: AppStore
	children: React.ReactNode
	excludeAlert?: boolean
	route: string
}

export const CURRENT_ROUTE_PATHNAME_TEST_ID = "current-route-pathname"
const RouterPrinter = () => {
	const location = useLocation()
	return <div data-testid={CURRENT_ROUTE_PATHNAME_TEST_ID}>{location.pathname}</div>
}

export const Wrapper: React.FC<WrapperProps> = ({ store, children, excludeAlert = false, route = "/" }) => (
	<Suspense fallback="Loading...">
		<Provider store={store}>
			<CssBaseline />
			<MemoryRouter initialEntries={[route]}>
				{children}
				<RouterPrinter />
			</MemoryRouter>
		</Provider>
	</Suspense>
)

export const renderWithProviders = (
	ui: React.ReactElement,
	{
		preloadedState = {},
		// Automatically create a store instance if no store was passed in
		store = setupStore(preloadedState),
		route = "/",
		excludeAlert = false,
		...renderOptions
	}: ExtendedRenderOptions = {}
) => {
	const wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => (
		<Wrapper store={store} excludeAlert={excludeAlert} route={route}>
			{children}
		</Wrapper>
	)
	// Return an object with the store and all of RTL's query functions
	return { store, user: userEvent.setup(), ...render(ui, { wrapper, ...renderOptions }) }
}

// re-export everything
export * from "@testing-library/react"
