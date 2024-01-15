import { HttpResponse, delay, http } from "msw"
import { server } from "../mocks/node"

export const setupServerWithErrorResponse = (endpoint: string) => {
	server.use(
		http.get(`http://localhost${endpoint}`, () => {
			return HttpResponse.error()
		})
	)
}

export const setupMockServerWithInfiniteLoading = (endpoint: string) => {
	server.use(
		http.get(`http://localhost${endpoint}`, async () => {
			await delay("infinite")
			return HttpResponse.json(null, { status: 200 })
		})
	)
}

export const pathResolve = (path: string) => {
	if (process.env.REACT_APP_USE_MOCK === "true") {
		return path
	} else {
		return `http://localhost${path}`
	}
}
