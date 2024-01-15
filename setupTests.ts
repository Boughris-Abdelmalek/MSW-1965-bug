import "@testing-library/jest-dom"
import "jest-location-mock"
import { setGlobalOrigin } from "undici"
import { server } from "./src/mocks/node"

beforeAll(() => server.listen())
beforeEach(() => {
	setGlobalOrigin(window.location.href)
})
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

global.clearImmediate = jest.useRealTimers

interface LocalStorageMock {
	getItem(key: string): string | null

	setItem(key: string, value: string): void

	clear(): void

	removeItem(key: string): void

	getAll(): Record<string, string>
}

const localStorageMock: LocalStorageMock = (function () {
	let store: Record<string, string> = {}

	return {
		getItem(key) {
			return store[key] || null
		},

		setItem(key, value) {
			store[key] = value
		},

		clear() {
			store = {}
		},

		removeItem(key) {
			delete store[key]
		},

		getAll() {
			return store
		},
	}
})()

Object.defineProperty(window, "localStorage", { value: localStorageMock })
