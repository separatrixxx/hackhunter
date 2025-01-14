import { useTelegram } from '../layout/TelegramProvider';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../features/store/store';
import { useRouter } from 'next/router';


export const useSetup = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { webApp, tgUser } = useTelegram();

    const teams = useSelector((state: AppState) => state.teams.teams);
    const users = useSelector((state: AppState) => state.users.users);
    const token = useSelector((state: AppState) => state.token.token);
    const user = useSelector((state: AppState) => state.user.user);
    const filters = useSelector((state: AppState) => state.filters.filters);

    return {
        router,
        dispatch,
        webApp,
        tgUser,
        teams,
        users,
        token,
        user,
        filters,
    };
};
