import { PreloadedState, combineReducers, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { api } from "./api/api"
import usersReducer from "./reducers/usersSlice"

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	users: usersReducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
	})
}

setupListeners(setupStore().dispatch)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
