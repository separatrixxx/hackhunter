import axios, { AxiosResponse } from "axios";
import { setLocale } from "./locale.helper";
import { BaseArguments } from "../interfaces/refactor.interface";
import { setUsers, setUsersDefault } from "../features/users/usersSlice";
import { UserInterface } from "../interfaces/users.interface";


export async function getUsers(args: BaseArguments) {
    const { dispatch, webApp, tgUser } = args;

    try {
        dispatch(setUsersDefault());

        const { data : response }: AxiosResponse<UserInterface[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/users');
            
        dispatch(setUsers({
            status: 'ok',
            users: response,
        }));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_teams_error);
        console.error(err);
    }
}