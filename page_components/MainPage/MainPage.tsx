import styles from './MainPage.module.css';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { useSetup } from '../../hooks/useSetup';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { MainBlock } from '../../components/MainComponents/MainBlock/MainBlock';


export const MainPage = (): JSX.Element => {
    const { webApp, tgUser } = useSetup();

    if (webApp) {
        webApp?.BackButton.hide();
    }

    return (
        <div className={styles.wrapper}>
            {
                !tgUser ?
                    <MainLink />
                :
                    <>
                        <MainBlock />
                        <Navbar />
                    </>
            }
        </div>
    );
};
