import styles from './MyTeamsPage.module.css';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { useSetup } from '../../hooks/useSetup';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { MyTeamsBlock } from '../../components/MyTeamsComponents/MyTeamsBlock/MyTeamsBlock';
import { Toaster } from 'react-hot-toast';


export const MyTeamsPage = (): JSX.Element => {
    const { router, webApp, tgUser } = useSetup();

    if (webApp) {
        webApp?.BackButton.hide();
        webApp?.BackButton.show();

        webApp?.BackButton.onClick(function () {
            router.push('/');
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
                        <MyTeamsBlock />
                        <Navbar />
                    </>
            }
        </div>
    );
};
