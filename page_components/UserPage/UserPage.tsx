import { UserPageProps } from './UserPage.props';
import styles from './UserPage.module.css';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { useSetup } from '../../hooks/useSetup';
import { UserMainInfo } from '../../components/UserComponents/UserMainInfo/UserMainInfo';
import { UserAdditionalInfo } from '../../components/UserComponents/UserAdditionalInfo/UserAdditionalInfo';
import { Toaster } from 'react-hot-toast';


export const UserPage = ({ user }: UserPageProps): JSX.Element => {
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
                        <UserMainInfo user={user} />
                        <UserAdditionalInfo user={user} />
                    </>
            }
        </div>
    );
};
