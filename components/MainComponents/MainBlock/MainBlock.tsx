import styles from './MainBlock.module.css';
import { useState } from 'react';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { TeamsList } from '../TeamsList/TeamsList';
import { Search } from '../Search/Search';
import { UsersList } from '../UsersList/UsersList';
import { ChangeInfoBlock } from '../../BlockComponents/ChangeInfoBlock/ChangeInfoBlock';
import { FiltersBar } from '../../FiltersComponents/FiltersBar/FiltersBar';


export const MainBlock = (): JSX.Element => {
    const { tgUser, router } = useSetup();

    const [type, setType] = useState<'teams' | 'people'>((router.query.type as 'teams' | 'people') || 'teams');
    const [search, setSearch] = useState<string>((router.query.search as string) || '');

    return (
        <div className={styles.mainBlock}>
            <Htag tag='l'>
                {setLocale(tgUser?.language_code).find}
            </Htag>
            <ChangeInfoBlock type={type} info1={setLocale(tgUser?.language_code).teams}
                info2={setLocale(tgUser?.language_code).people} infoType1={'teams'}
                infoType2={'people'} setType={setType} setSearch={setSearch} />
            <Search type={type} search={search} setSearch={setSearch} />
            <FiltersBar />
            {
                type == 'teams' ?
                    <TeamsList search={search} />
                    : <UsersList search={search} />
            }
        </div>
    );
};
