import { Link } from "react-router-dom"

const Header = () => {
	return (
		<header>
			<nav>
				<Link to="/">Home</Link>
				<br />
				<Link to="/about">About</Link>
				<br />
				<Link to="/contact">Contact</Link>
			</nav>
		</header>
	)
}

export default Header
