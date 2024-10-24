import axios, { AxiosResponse } from "axios";
import { setLocale } from "./locale.helper";
import { BaseArguments } from "../interfaces/refactor.interface";
import { setTeams, setTeamsDefault } from "../features/teams/teamsSlice";
import { TeamInterface } from "../interfaces/teams.interface";


export async function getTeams(args: BaseArguments) {
    const { dispatch, webApp, tgUser } = args;

    try {
        dispatch(setTeamsDefault());

        const { data : response }: AxiosResponse<TeamInterface[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/teams');
            
        dispatch(setTeams({
            status: 'ok',
            teams: response,
        }));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_teams_error);
        console.error(err);
    }
}