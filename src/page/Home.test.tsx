import { waitFor } from "@testing-library/dom"
import { renderWithProviders } from "../utils/test-utils"
import Home from "./Home"

describe("<Home />", () => {
	it("should render correctly", async () => {
		const { getByText } = renderWithProviders(<Home />)

		await waitFor(() => {
			expect(getByText("John Doe")).toBeInTheDocument()
		})
	})
})
