import { renderWithProviders } from "../utils/test-utils"
import Header from "./Header"

describe("<Header>", () => {
	it("renders correctly", () => {
		const { getByText } = renderWithProviders(<Header />)

		expect(getByText("Home")).toBeInTheDocument()
	})
})
