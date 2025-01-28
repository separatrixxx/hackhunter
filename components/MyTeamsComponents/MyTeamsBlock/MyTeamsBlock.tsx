import styles from './MyTeamsBlock.module.css';
import { useState } from 'react';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { ChangeInfoBlock } from '../../BlockComponents/ChangeInfoBlock/ChangeInfoBlock';
import { NoTeamsBlock } from '../NoTeamsBlock/NoTeamsBlock';


export const MyTeamsBlock = (): JSX.Element => {
    const { tgUser } = useSetup();

    const [type, setType] = useState<'current' | 'archive'>('current');

    return (
        <div className={styles.myTeamsBlock}>
            <Htag tag='l'>
                {setLocale(tgUser?.language_code).my_teams}
            </Htag>
            <ChangeInfoBlock type={type} info1={setLocale(tgUser?.language_code).current}
                info2={setLocale(tgUser?.language_code).archive} infoType1={'current'}
                infoType2={'archive'} setType={setType} />
            {
                true ?
                    <NoTeamsBlock />
                : type == 'current' ?
                    <></>
                : <></>
            }
        </div>
    );
};
