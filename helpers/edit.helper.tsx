import axios from "axios";
import { setLocale } from "./locale.helper";
import { EditArguments } from "../interfaces/refactor.interface";
import { changeUserData } from "../features/user/userSlice";
import { EditInterface } from "../interfaces/edit.interface";


export async function editUser(args: EditArguments) {
    const { dispatch, webApp, tgUser, token, user, about, setIsLoading } = args;
    console.log(token)

    setIsLoading(true);

    const editData: EditInterface = {
        stack: user.stack,
        roles: user.roles,
        about: about,
        exp_work: user.exp_work,
        hackathons: user.hackathons,
        exp: user.exp,
        who_is: user.who_is,
        links: user.links,
    };

    console.log(editData)

    try {
        // await axios.put(process.env.NEXT_PUBLIC_DOMAIN +
        //     '/api/users/' + tgUser?.id, editData, {
        //         headers: {
        //             'Bearer': token,
        //         },
        //     });

        // dispatch(changeUserData());
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.edit_user_error);
        console.error(err);
    } finally {
        setIsLoading(false);
    }
}
