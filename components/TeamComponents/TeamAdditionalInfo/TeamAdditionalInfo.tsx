import { TeamAdditionalInfoProps } from './TeamAdditionalInfo.props';
import styles from './TeamAdditionalInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { useState } from 'react';
import { setLocale } from '../../../helpers/locale.helper';
import cn from 'classnames';


export const TeamAdditionalInfo = ({ team }: TeamAdditionalInfoProps): JSX.Element => {
    const { webApp, tgUser } = useSetup();

    const [type, setType] = useState<'vacancies' | 'participants'>('vacancies');

    return (
        <div className={styles.teamAdditionalInfo}>
            <div className={cn(styles.changeInfoDiv, {
                [styles.weba]: webApp?.platform === 'weba',
            })}>
                <Htag tag='m' className={cn({
                    [styles.active]: type === 'vacancies',
                })} onClick={() => setType('vacancies')}>
                    {setLocale(tgUser?.language_code).vacancies}
                    <Htag tag='s' className={styles.countBlock}>
                        {3}
                    </Htag>
                </Htag>
                <Htag tag='m' className={cn({
                    [styles.active]: type === 'participants',
                })} onClick={() => setType('participants')}>
                    {setLocale(tgUser?.language_code).participants}
                    <Htag tag='s' className={styles.countBlock}>
                        {3}
                    </Htag>
                </Htag>
            </div>
        </div>
    );
};
