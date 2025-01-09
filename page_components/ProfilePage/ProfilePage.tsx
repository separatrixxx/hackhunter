import styles from './ProfilePage.module.css';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { useSetup } from '../../hooks/useSetup';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { ProfileBlock } from '../../components/ProfileComponents/ProfileBlock/ProfileBlock';


export const ProfilePage = (): JSX.Element => {
    const { router, webApp, tgUser } = useSetup();

    if (webApp) {
        webApp?.BackButton.show();

        webApp?.BackButton.onClick(function () {
            router.push('/');
        });
    }

    return (
        <div className={styles.wrapper}>
            {
                tgUser ?
                    <MainLink />
                :
                    <>
                        <ProfileBlock />
                        <Navbar />
                    </>
            }
        </div>
    );
};
