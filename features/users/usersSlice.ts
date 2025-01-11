import { createSlice } from '@reduxjs/toolkit'
import { UsersData } from '../../interfaces/users.interface';


const usersData: UsersData = {
    status: 'pending',
    users: [],
};

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: usersData,
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        },
        setUsersDefault: (state) => {
            state.users = usersData
        },
    },
});

export const { setUsers, setUsersDefault } = usersSlice.actions;

export default usersSlice.reducer;
