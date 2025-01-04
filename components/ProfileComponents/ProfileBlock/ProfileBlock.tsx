import { useEffect, useRef } from 'react';
import styles from './ProfileBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';


export const ProfileBlock = (): JSX.Element => {
    const { tgUser } = useSetup();
    const widgetContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = widgetContainerRef.current;

        if (!container) return;

        const script = document.createElement('script');
        script.src = '/telegram-widget.js';
        script.async = true;
        script.dataset.telegramLogin = 'hack_hunter_bot';
        script.dataset.size = 'large';
        script.dataset.radius = '16';
        script.dataset.authUrl = 'https://t.me/hack_hunter_bot';
        script.dataset.requestAccess = 'write';

        container.innerHTML = '';
        container.appendChild(script);

        return () => {
            container.innerHTML = '';
        };
    }, []);

    return (
        <div className={styles.profileBlock}>
            <Htag tag='l'>
                {setLocale(tgUser?.language_code).profile}
            </Htag>
            <div ref={widgetContainerRef} />
        </div>
    );
};
