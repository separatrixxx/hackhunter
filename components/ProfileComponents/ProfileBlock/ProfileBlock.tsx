import styles from './ProfileBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { useEffect } from 'react';


export const ProfileBlock = (): JSX.Element => {
    const { tgUser } = useSetup();

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://telegram.org/js/telegram-widget.js?22";
        script.setAttribute("data-telegram-login", "hack_hunter_bot");
        script.setAttribute("data-size", "large");
        script.setAttribute("data-radius", "16");
        script.setAttribute("data-auth-url", "https://hackhunter.vercel.app");
        script.setAttribute("data-request-access", "write");
        script.async = true;
    
        const container = document.getElementById("telegram-login-container");

        if (container) {
            container.appendChild(script);
        } else {
            console.error("Element with id 'telegram-login-container' not found");
        }
      }, []);

    return (
        <div className={styles.profileBlock}>
            <Htag tag='l'>
                {setLocale(tgUser?.language_code).profile}
            </Htag>
            <div id="telegram-login-container" />
        </div>
    );
};
