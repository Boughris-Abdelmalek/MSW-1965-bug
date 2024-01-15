import { setupServer } from "msw/node"
import { usersHandler } from "./handlers/usersHandler"

export const server = setupServer(...usersHandler)
server.events.on("request:start", ({ request }) => {
	console.log("MSW - request:start event triggered", request.method, request.url)
})

server.events.on("request:match", () => {
	console.log("MSW - request:match event triggered")
})

server.events.on("request:unhandled", () => {
	console.log("MSW - request:unhandled event triggered")
})

server.events.on("request:end", () => {
	console.log("MSW - request:end event triggered")
})

server.events.on("response:mocked", () => {
	console.log("MSW - response:mocked event triggered")
})

server.events.on("response:bypass", () => {
	console.log("MSW - response:bypass event triggered")
})

server.events.on("response:mocked", ({ request, response }) => {
	console.log("%s %s received %s %s", request.method, request.url, response.status, response.statusText)
})
