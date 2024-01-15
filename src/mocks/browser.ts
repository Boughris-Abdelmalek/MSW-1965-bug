import { setupWorker } from "msw/browser"
import { usersHandler } from "./handlers/usersHandler"

// Configures the mock service worker for browser
export const worker = setupWorker(...usersHandler)

worker.events.on("request:start", ({ request }) => {
	console.log("Outgoing request:", request.method, request.url)
})
