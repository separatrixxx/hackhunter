import styles from './EditPage.module.css';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { useSetup } from '../../hooks/useSetup';
import { Toaster } from 'react-hot-toast';
import { EditBlock } from '../../components/EditComponents/EditBlock/EditBlock';


export const EditPage = (): JSX.Element => {
    const { router, webApp, tgUser } = useSetup();

    if (webApp) {
        webApp?.BackButton.show();

        webApp?.BackButton.onClick(function () {
            router.push('/profile');
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
                        <EditBlock />
                    </>
            }
        </div>
    );
};
