import styles from './ProfilePage.module.css';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { useSetup } from '../../hooks/useSetup';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { UserMainInfo } from '../../components/UserComponents/UserMainInfo/UserMainInfo';
import { UserAdditionalInfo } from '../../components/UserComponents/UserAdditionalInfo/UserAdditionalInfo';
import { Toaster } from 'react-hot-toast';


export const ProfilePage = (): JSX.Element => {
    const { router, webApp, tgUser, user } = useSetup();

    if (webApp) {
        webApp?.BackButton.show();

        webApp?.BackButton.onClick(function () {
            router.push('/');
        });
    }

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={true}
                toastOptions={{
                    duration: 2000,
                }}
            />
            <div className={styles.wrapper}>
                {
                    !tgUser ?
                        <MainLink />
                    :
                        <>
                            <UserMainInfo user={user.user} isProfile={true} />
                            <UserAdditionalInfo user={user.user} isProfile={true} />
                            <Navbar />
                        </>
                }
            </div>
        </>
    );
};
