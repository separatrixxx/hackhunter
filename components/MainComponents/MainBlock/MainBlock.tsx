import styles from './MainBlock.module.css';
import { useState } from 'react';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { TeamsList } from '../TeamsList/TeamsList';
import { isWebPlatform } from '../../../helpers/platform.helper';
import { Search } from '../Search/Search';
import { UsersList } from '../UsersList/UsersList';
import { ChangeInfoBlock } from '../../BlockComponents/ChangeInfoBlock/ChangeInfoBlock';
import cn from 'classnames';


export const MainBlock = (): JSX.Element => {
    const { webApp, tgUser } = useSetup();

    const [type, setType] = useState<'teams' | 'people'>('teams');
    const [search, setSearch] = useState<string>('');

    return (
        <div className={styles.mainBlock}>
            <Htag tag='l'>
                {setLocale(tgUser?.language_code).find}
            </Htag>
            <ChangeInfoBlock type={type} info1={setLocale(tgUser?.language_code).teams}
                info2={setLocale(tgUser?.language_code).people} infoType1={'teams'}
                infoType2={'people'} setType={setType} setSearch={setSearch} />
            <Search type={type} search={search} setSearch={setSearch} />
            {
                type == 'teams' ?
                    <TeamsList search={search} />
                    : <UsersList search={search} />
            }
        </div>
    );
};
