import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

interface Users {
	username: string
	firstName: string
	lastName: string
	email: string
}

const initialState: Users[] = []

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		setUsers: (state, action) => {
			// Assuming action.payload is an array of users
			return action.payload
		},
	},
})

export const { setUsers } = usersSlice.actions

export const selectUsers = (state: RootState) => state.users

export default usersSlice.reducer
