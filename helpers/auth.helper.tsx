import axios from "axios";
import { setLocale } from "./locale.helper";
import { AuthArguments } from "../interfaces/refactor.interface";


export async function checkAuth(args: AuthArguments) {
    const { webApp, tgUser, token } = args;

    try {
        await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/users/me', {
            headers: {
                'Bearer': token,
            },
        });
    } catch (err: any) {
        if (err.response?.data?.detail === 'User with id not found, please create user') {
            createUser(args);
        } else {
            webApp?.showAlert(setLocale(tgUser?.language_code).errors.check_auth_error);
            console.error(err);
        }
    }
}

export async function createUser(args: AuthArguments) {
    const { webApp, tgUser, token } = args;

    try {
        await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/users/' + tgUser?.id, {
                first_name: tgUser?.first_name,
                second_name: tgUser?.last_name || '',
                username: tgUser?.username || '',
                photo_url: tgUser?.photo_url || ''
            }, {
                headers: {
                    'Bearer': token,
                },
            });
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.create_user_error);
        console.error(err);
    }
}
