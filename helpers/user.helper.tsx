import axios, { AxiosResponse } from "axios";
import { setLocale } from "./locale.helper";
import { BaseArguments } from "../interfaces/refactor.interface";
import { setUser, setUserDefault } from "../features/user/userSlice";
import { UserInterface } from "../interfaces/users.interface";


export async function getUser(args: BaseArguments) {
    const { dispatch, webApp, tgUser } = args;

    try {
        dispatch(setUserDefault());

        const { data : response }: AxiosResponse<UserInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/users/' + tgUser?.id);
            
        dispatch(setUser({
            status: 'ok',
            user: response,
        }));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_user_error);
        console.error(err);
    }
}
