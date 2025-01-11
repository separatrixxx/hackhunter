import styles from './MainBlock.module.css';
import { useState } from 'react';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { TeamsList } from '../TeamsList/TeamsList';
import { isWebPlatform } from '../../../helpers/platform.helper';
import { Search } from '../Search/Search';
import cn from 'classnames';
import { UsersList } from '../UsersList/UsersList';


export const MainBlock = (): JSX.Element => {
    const { webApp, tgUser } = useSetup();

    const [type, setType] = useState<'teams' | 'people'>('teams');
    const [search, setSearch] = useState<string>('');

    return (
        <div className={styles.mainBlock}>
            <Htag tag='l'>
                {setLocale(tgUser?.language_code).find}
            </Htag>
            <div className={cn(styles.changeTypeDiv, {
                [styles.weba]: isWebPlatform(webApp?.platform),
            })}>
                <Htag tag='m' className={cn({
                    [styles.active]: type === 'teams',
                })} onClick={() => {
                    if (type !== 'teams') {
                        setType('teams');
                        setSearch('');
                    }
                }}>
                    {setLocale(tgUser?.language_code).teams}
                </Htag>
                <Htag tag='m' className={cn({
                    [styles.active]: type === 'people',
                })} onClick={() => {
                    if (type !== 'people') {
                        setType('people');
                        setSearch('');
                    }
                }}>
                    {setLocale(tgUser?.language_code).people}
                </Htag>
            </div>
            <Search type={type} search={search} setSearch={setSearch} />
            {
                type == 'teams' ?
                    <TeamsList search={search} />
                : <UsersList search={search} />
            }
        </div>
    );
};
