import axios from "axios";
import { setLocale } from "./locale.helper";
import { CreateTeamArguments } from "../interfaces/refactor.interface";
import { changeUserData } from "../features/user/userSlice";
import { ToastSuccess } from "../components/Common/Toast/Toast";


export async function checkCreateTeam(args: CreateTeamArguments) {
    const { name, description, setErrorName, setErrorDesccription } = args;

    setErrorName(!name);
    setErrorDesccription(!description);

    if (name && description) {
        createTeam(args);
    }
}

export async function createTeam(args: CreateTeamArguments) {
    const { router, dispatch, webApp, tgUser, token, name, description, roles, descriptionHunt, hunt, setIsLoading } = args;

    setIsLoading(true);

    try {
        await axios.put(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/users/' + tgUser?.id, {
            name: name,
            description: description,
            hunt: hunt,
            roles_hunt: roles.length > 0 ? roles : null,
            description_hunt: descriptionHunt ? descriptionHunt : null
        }, {
            headers: {
                'Bearer': token,
            },
        });

        dispatch(changeUserData());

        ToastSuccess(setLocale(tgUser?.language_code).team_successfully_created);

        router.push('/my_teams');
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.create_team_error);
        console.error(err);
    } finally {
        setIsLoading(false);
    }
}
