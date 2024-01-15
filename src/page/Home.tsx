import { useEffect } from "react"
import Header from "../components/Header"
import { useGetUsersQuery } from "../store/api/api"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { selectUsers, setUsers } from "../store/reducers/usersSlice"

const Home = () => {
	const { data } = useGetUsersQuery()
	const dispatch = useAppDispatch()
	const users = useAppSelector(selectUsers)

	useEffect(() => {
		if (data) {
			dispatch(setUsers(data))
		}
	}, [data])

	return (
		<>
			<Header />
			<h1>Welcome Home</h1>
			<ul>{users && users.map(user => <li key={user.username}>{`${user.firstName} ${user.lastName}`}</li>)}</ul>
		</>
	)
}

export default Home
