import { createSlice } from '@reduxjs/toolkit'
import { UserData } from '../../interfaces/users.interface';


const userData: UserData = {
    status: 'pending',
    isChanged: true,
    user: {
        id: 0,
        first_name: '',
        second_name: '',
        stack: null,
        roles: null,
        about: null,
        exp_work: null,
        hackathons: null,
        exp: null,
        who_is: null,
        links: null,
    },
};

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: userData,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setUserDefault: (state) => {
            state.user = userData
        },
        changeUserData: (state) => {
            state.user.isChanged = true
        },
    },
});

export const { setUser, setUserDefault, changeUserData } = userSlice.actions;

export default userSlice.reducer;
