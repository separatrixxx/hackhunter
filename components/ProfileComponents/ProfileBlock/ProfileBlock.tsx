import styles from './ProfileBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';


export const ProfileBlock = (): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <div className={styles.profileBlock}>
            <Htag tag='l'>
                {setLocale(tgUser?.language_code).profile}
            </Htag>
            <iframe
                src="https://telegram.org/js/telegram-widget.js?22#id=hack_hunter_bot&size=large&radius=16&auth_url=https://t.me/hack_hunter_bot&request_access=write"
                frameBorder="0"
                scrolling="no"
                width="100%"
                height="60px"
                style={{
                    border: 'none',
                    overflow: 'hidden',
                    maxWidth: '100%',
                }}
                allowTransparency
            />
        </div>
    );
};
