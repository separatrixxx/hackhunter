import axios from "axios";
import { setLocale } from "./locale.helper";
import { EditArguments } from "../interfaces/refactor.interface";
import { changeUserData } from "../features/user/userSlice";
import { ToastSuccess } from "../components/Common/Toast/Toast";


export async function editUser(args: EditArguments) {
    const { dispatch, webApp, tgUser, token, about, stack, roles, links, country, city, whoIs, setIsLoading } = args;

    setIsLoading(true);

    try {
        await axios.put(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/users/' + tgUser?.id, {
            about: about,
            stack: stack,
            roles: roles,
            links: links,
            location: {
                city: city,
                country: country
            },
            who_is: whoIs
        }, {
            headers: {
                'Bearer': token,
            },
        });

        dispatch(changeUserData());

        ToastSuccess(setLocale(tgUser?.language_code).info_changed_successfully);
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.edit_user_error);
        console.error(err);
    } finally {
        setIsLoading(false);
    }
}
