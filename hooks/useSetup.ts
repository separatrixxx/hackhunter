import { useTelegram } from '../layout/TelegramProvider';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../features/store/store';
import { useRouter } from 'next/router';


export const useSetup = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { webApp, tgUser } = useTelegram();

    const teams = useSelector((state: AppState) => state.teams.teams);

    return {
        router,
        dispatch,
        webApp,
        tgUser,
        teams,
    };
};
