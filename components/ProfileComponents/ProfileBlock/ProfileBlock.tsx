import { useEffect, useRef } from 'react';
import styles from './ProfileBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import Script from 'next/script';


export const ProfileBlock = (): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <div className={styles.profileBlock}>
            <Htag tag="l">
                {setLocale(tgUser?.language_code).profile}
            </Htag>
            <div id="telegram-widget-container" />
            <Script
                src="https://telegram.org/js/telegram-widget.js?22"
                strategy="lazyOnload"
                onLoad={() => {
                    const container = document.getElementById('telegram-widget-container');
                    if (container) {
                        const script = document.createElement('script');
                        script.src = 'https://telegram.org/js/telegram-widget.js?22';
                        script.async = true;
                        script.dataset.telegramLogin = 'hack_hunter_bot';
                        script.dataset.size = 'large';
                        script.dataset.radius = '16';
                        script.dataset.authUrl = 'https://t.me/hack_hunter_bot';
                        script.dataset.requestAccess = 'write';
                        container.appendChild(script);
                    }
                }}
            />
        </div>
    );
};
