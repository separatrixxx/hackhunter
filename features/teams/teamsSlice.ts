import { createSlice } from '@reduxjs/toolkit'
import { TeamsData } from '../../interfaces/teams.interface';


const teamsData: TeamsData = {
    status: 'pending',
    teams: [],
};

export const teamsSlice = createSlice({
    name: 'teams',
    initialState: {
        teams: teamsData,
    },
    reducers: {
        setTeams: (state, action) => {
            state.teams = action.payload
        },
        setTeamsDefault: (state) => {
            state.teams = teamsData
        },
    },
});

export const { setTeams, setTeamsDefault } = teamsSlice.actions;

export default teamsSlice.reducer;
