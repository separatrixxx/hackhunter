import styles from './MainBlock.module.css';
import { useState } from 'react';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { TeamsList } from '../TeamsList/TeamsList';
import cn from 'classnames';


export const MainBlock = (): JSX.Element => {
    const { webApp, tgUser } = useSetup();

    const [type, setType] = useState<'teams' | 'people'>('teams');

    return (
        <div className={styles.mainBlock}>
            <Htag tag='l'>
                {setLocale(tgUser?.language_code).find}
            </Htag>
            <div className={cn(styles.changeTypeDiv, {
                [styles.weba]: webApp?.platform === 'weba',
            })}>
                <Htag tag='m' className={cn({
                    [styles.active]: type === 'teams',
                })} onClick={() => setType('teams')}>
                    {setLocale(tgUser?.language_code).teams}
                </Htag>
                <Htag tag='m' className={cn({
                    [styles.active]: type === 'people',
                })} onClick={() => setType('people')}>
                    {setLocale(tgUser?.language_code).people}
                </Htag>
            </div>
            {
                type == 'teams' ?
                    <TeamsList />
                : <></>
            }
        </div>
    );
};
