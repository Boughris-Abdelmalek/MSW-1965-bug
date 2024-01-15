import { HttpResponse, http } from "msw"
import { pathResolve } from "../../utils/mockServerUtils"

export const usersHandler = [
	http.get(pathResolve("/api/users"), () => {
		return HttpResponse.json([
			{
				username: "John",
				firstName: "John",
				lastName: "Doe",
				email: "john.doe@example.com",
			},
			{
				username: "Alice",
				firstName: "Alice",
				lastName: "Johnson",
				email: "alice.johnson@example.com",
			},
			{
				username: "Bob",
				firstName: "Bob",
				lastName: "Smith",
				email: "bob.smith@example.com",
			},
			{
				username: "Emily",
				firstName: "Emily",
				lastName: "Brown",
				email: "emily.brown@example.com",
			},
			{
				username: "David",
				firstName: "David",
				lastName: "Williams",
				email: "david.williams@example.com",
			},
			{
				username: "Sophia",
				firstName: "Sophia",
				lastName: "Miller",
				email: "sophia.miller@example.com",
			},
			{
				username: "Daniel",
				firstName: "Daniel",
				lastName: "Jones",
				email: "daniel.jones@example.com",
			},
			{
				username: "Olivia",
				firstName: "Olivia",
				lastName: "Taylor",
				email: "olivia.taylor@example.com",
			},
			{
				username: "Mason",
				firstName: "Mason",
				lastName: "Davis",
				email: "mason.davis@example.com",
			},
			{
				username: "Ella",
				firstName: "Ella",
				lastName: "Moore",
				email: "ella.moore@example.com",
			},
		])
	}),
]
