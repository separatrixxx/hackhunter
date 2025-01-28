import styles from './CreateTeamPage.module.css';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { useSetup } from '../../hooks/useSetup';
import { Toaster } from 'react-hot-toast';
import { CreateTeamBlock } from '../../components/CreateTemsComponents/CreateTeamBlock/CreateTeamBlock';


export const CreateTeamPage = (): JSX.Element => {
    const { router, webApp, tgUser } = useSetup();

    if (webApp) {
        webApp?.BackButton.show();

        webApp?.BackButton.onClick(function () {
            router.push('/my_teams');
        });
    }
    return (
        <div className={styles.wrapper}>
            {
                !tgUser ?
                    <MainLink />
                :
                    <>
                        <Toaster
                            position="top-center"
                            reverseOrder={true}
                            toastOptions={{
                                duration: 2000,
                            }}
                        />
                        <CreateTeamBlock />
                    </>
            }
        </div>
    );
};
