import { TeamPageProps } from './TeamPage.props';
import styles from './TeamPage.module.css';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { useSetup } from '../../hooks/useSetup';
import { TeamMainInfo } from '../../components/TeamComponents/TeamMainInfo/TeamMainInfo';
import { TeamAdditionalInfo } from '../../components/TeamComponents/TeamAdditionalInfo/TeamAdditionalInfo';
import { Toaster } from 'react-hot-toast';


export const TeamPage = ({ team }: TeamPageProps): JSX.Element => {
    const { router, webApp, tgUser } = useSetup();

    if (webApp) {
        webApp?.BackButton.show();

        webApp?.BackButton.onClick(function () {
            router.push({
                pathname: '/',
                query: {
                    type: router.query.type,
                    search: router.query.search,
                    scrollPosition: router.query.scrollPosition,
                },
            });
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
                        <TeamMainInfo team={team} />
                        <TeamAdditionalInfo team={team} />
                    </>
            }
        </div>
    );
};
